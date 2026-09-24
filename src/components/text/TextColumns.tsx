import type {ReactNode} from "react";

export type TextColumnItem = {
    title: ReactNode
    paragraphs: readonly ReactNode[]
}

type TextColumnsProps = {
    items: readonly TextColumnItem[]
    className?: string
}

export function TextColumns({items, className}: TextColumnsProps) {
    return (
        <div className={`grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16 ${className ?? ''}`}>
            {items.map((item, columnIndex) => (
                <section className="min-w-0" key={columnIndex}>
                    <h2 className="font-normal">{item.title}</h2>

                    <div className="flex flex-col gap-4 font-light">
                        {item.paragraphs.map((paragraph, paragraphIndex) => (
                            <p key={paragraphIndex}>{paragraph}</p>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    )
}
