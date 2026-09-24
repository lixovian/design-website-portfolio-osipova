import type {ImgHTMLAttributes} from "react";

export type ProjectImageProps = {
    src: string
    alt: string
    className?: string
    loading?: ImgHTMLAttributes<HTMLImageElement>['loading']
}

export function ImageFull({
    src,
    alt,
    className,
    loading = 'lazy',
}: ProjectImageProps) {
    return (
        <img
            src={src}
            alt={alt}
            className={`block h-auto w-full ${className ?? ''}`}
            loading={loading}
            decoding="async"
        />
    )
}
