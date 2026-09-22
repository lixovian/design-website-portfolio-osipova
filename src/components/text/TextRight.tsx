import type { PropsWithChildren } from 'react'

type TextRightProps = PropsWithChildren<{
    className?: string
}>

export function TextRight({children, className = ''}: TextRightProps) {
    return (
        <div className={`ml-auto w-full min-w-0 text-left md:w-1/2 ${className}`}>
            {children}
        </div>
    )
}
