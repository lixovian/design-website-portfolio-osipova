import type { PropsWithChildren } from 'react'

type TextRightProps = PropsWithChildren<{
    className?: string
}>

const DEFAULT_CLASS_NAME: string = 'flex flex-col gap-8 font-light';
export function TextRight({children, className = DEFAULT_CLASS_NAME}: TextRightProps) {
    return (
        <div className={`ml-auto w-full min-w-0 text-left md:w-1/2 ${className}`}>
            {children}
        </div>
    )
}
