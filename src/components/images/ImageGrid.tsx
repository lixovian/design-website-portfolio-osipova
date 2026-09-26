type ImageGridProps = {
    images: string[]
}

export function ImageGrid({images}: ImageGridProps) {
    return (
        <div className="grid grid-cols-1 gap-x-2 gap-y-4 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3 2xl:grid-cols-4">
            {images.map((src) => (
                <img
                    key={src}
                    src={src}
                    alt="Image"
                    className="h-auto w-full"
                    loading="lazy"
                />
            ))}
        </div>
    )
}
