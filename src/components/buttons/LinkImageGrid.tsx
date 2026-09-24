import {LinkImage, type LinkImageItem} from "./LinkImage.tsx";

export type LinkImageGridSize = 'default' | 'large'
export type LinkImageGridAlign = 'start' | 'center'

type LinkImageGridProps = {
    items: LinkImageItem[]
    size?: LinkImageGridSize
    align?: LinkImageGridAlign
}

const itemSizeClasses: Record<LinkImageGridSize, string> = {
    default: 'md:w-[calc((100%-2rem)/2)] lg:w-[calc((100%-4rem)/3)] 2xl:w-[calc((100%-6rem)/4)]',
    large: 'md:w-[calc((100%-2rem)/2)]',
}

const alignmentClasses: Record<LinkImageGridAlign, string> = {
    start: 'justify-start',
    center: 'justify-center',
}

export function LinkImageGrid({
    items,
    size = 'default',
    align = 'center',
}: LinkImageGridProps) {
    return (
        <div className={`flex flex-wrap gap-8 ${alignmentClasses[align]}`}>
            {items.map((item) => (
                <LinkImage
                    key={item.to}
                    {...item}
                    className={`${itemSizeClasses[size]} ${item.className ?? ''}`}
                />
            ))}
        </div>
    )
}
