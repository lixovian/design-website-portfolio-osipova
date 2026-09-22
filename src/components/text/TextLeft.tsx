import type { PropsWithChildren } from 'react'

type TextLeftProps = PropsWithChildren<{
    className?: string
}>

export function TextLeft({children, className = ''}: TextLeftProps) {
    return (
        <div className={`w-full min-w-0 text-left md:w-1/2 ${className}`}>
            {children}
        </div>
    )
}
