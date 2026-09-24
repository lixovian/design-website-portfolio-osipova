type ImageGridProps = {
    images: string[]
}

export function ImageGrid({images}: ImageGridProps) {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {images.map((src) => (
                <img
                    key={src}
                    src={src}
                    className="h-auto w-full"
                    loading="lazy"
                />
            ))}
        </div>
    )
}
