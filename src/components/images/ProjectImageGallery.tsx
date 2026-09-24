import type {ComponentType} from "react";
import {ImageFull, type ProjectImageProps} from "./ImageFull.tsx";
import {ImageLeft} from "./ImageLeft.tsx";
import {ImageRight} from "./ImageRight.tsx";

export type ProjectImageLayout = 'full' | 'left' | 'right'

export type ProjectImageItem = Pick<ProjectImageProps, 'src' | 'alt'> & {
    layout: ProjectImageLayout
}

type ProjectImageGalleryProps = {
    images: readonly ProjectImageItem[]
    className?: string
}

const imageComponents: Record<ProjectImageLayout, ComponentType<ProjectImageProps>> = {
    full: ImageFull,
    left: ImageLeft,
    right: ImageRight,
}

export function ProjectImageGallery({images, className}: ProjectImageGalleryProps) {
    return (
        <div className={`flex flex-col gap-8 md:gap-12 ${className ?? ''}`}>
            {images.map((image) => {
                const ImageComponent = imageComponents[image.layout]

                return (
                    <ImageComponent
                        key={image.src}
                        src={image.src}
                        alt={image.alt}
                    />
                )
            })}
        </div>
    )
}
