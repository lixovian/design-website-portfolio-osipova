import { mkdir, readdir, readFile, rename, stat, writeFile } from 'node:fs/promises'
import { dirname, extname, join, relative } from 'node:path'
import sharp from 'sharp'

const root = process.cwd()
const imageRoot = join(root, 'src', 'assets', 'images')
const backupRoot = join(root, '.image-originals')
const sourceRoot = join(root, 'src')
const keepOriginals = process.argv.includes('--keep-originals')
const maxWidth = 2400

async function walk(directory) {
    const entries = await readdir(directory, {withFileTypes: true})
    const files = await Promise.all(entries.map((entry) => {
        const path = join(directory, entry.name)
        return entry.isDirectory() ? walk(path) : path
    }))

    return files.flat()
}

const pngFiles = (await walk(imageRoot)).filter((path) => extname(path).toLowerCase() === '.png')

if (pngFiles.length === 0) {
    console.log('No PNG images found.')
    process.exit(0)
}

let beforeBytes = 0
let afterBytes = 0

for (const pngPath of pngFiles) {
    const webpPath = pngPath.replace(/\.png$/i, '.webp')
    const pngStats = await stat(pngPath)
    const image = sharp(pngPath)
    const metadata = await image.metadata()
    const isMainArtwork = relative(imageRoot, pngPath).startsWith(`main${join('', '\\')}`)
    const resize = metadata.width && metadata.width > maxWidth
        ? {width: maxWidth, withoutEnlargement: true}
        : null

    let pipeline = image.rotate()
    if (resize) pipeline = pipeline.resize(resize)

    const result = await pipeline
        .webp(isMainArtwork
            ? {lossless: true, effort: 6}
            : {quality: 84, alphaQuality: 95, smartSubsample: true, effort: 6})
        .toFile(webpPath)

    beforeBytes += pngStats.size
    afterBytes += result.size
}

const sourceFiles = (await walk(sourceRoot)).filter((path) => ['.ts', '.tsx', '.css'].includes(extname(path)))
for (const sourcePath of sourceFiles) {
    const source = await readFile(sourcePath, 'utf8')
    const updated = source.replace(/(assets\/images[^'"\s)]+)\.png/g, '$1.webp')
    if (updated !== source) await writeFile(sourcePath, updated)
}

if (!keepOriginals) {
    for (const path of pngFiles) {
        const backupPath = join(backupRoot, relative(imageRoot, path))
        await mkdir(dirname(backupPath), {recursive: true})
        await rename(path, backupPath)
    }
}

const savedPercent = Math.round((1 - afterBytes / beforeBytes) * 100)
console.log(`Optimized ${pngFiles.length} images: ${(beforeBytes / 1024 / 1024).toFixed(1)} MB -> ${(afterBytes / 1024 / 1024).toFixed(1)} MB (${savedPercent}% smaller).`)
if (keepOriginals) console.log('Original PNG files were kept.')
else console.log(`Original PNG files were moved to ${relative(root, backupRoot)}.`)
