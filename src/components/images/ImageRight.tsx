import type {ProjectImageProps} from "./ImageFull.tsx";

export function ImageRight({src, alt, className, loading = 'lazy'}: ProjectImageProps) {
    return (
        <img
            src={src}
            alt={alt}
            className={`ml-auto block h-auto w-full md:w-1/2 ${className ?? ''}`}
            loading={loading}
            decoding="async"
        />
    )
}
