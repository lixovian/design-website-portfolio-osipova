import type {ProjectImageProps} from "./ImageFull.tsx";

export function ImageLeft({src, alt, className, loading = 'lazy'}: ProjectImageProps) {
    return (
        <img
            src={src}
            alt={alt}
            className={`block h-auto w-full md:w-1/2 ${className ?? ''}`}
            loading={loading}
            decoding="async"
        />
    )
}
