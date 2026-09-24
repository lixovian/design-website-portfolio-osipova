import type { PropsWithChildren } from 'react'

type TextLeftProps = PropsWithChildren<{
    className?: string
}>

const DEFAULT_CLASS_NAME: string = 'flex flex-col gap-8 font-light';
export function TextLeft({children, className = DEFAULT_CLASS_NAME}: TextLeftProps) {
    return (
        <div className={`w-full min-w-0 text-left md:w-1/2 ${className}`}>
            {children}
        </div>
    )
}
