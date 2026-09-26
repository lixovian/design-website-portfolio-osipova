import type {PropsWithChildren} from "react";

type TextFullProps = PropsWithChildren<{
    className?: string
}>

const DEFAULT_CLASS_NAME: string = 'flex flex-col gap-4 font-light sm:gap-8';

export default function TextFull({children, className = DEFAULT_CLASS_NAME}: TextFullProps) {
    return (
        <div className={`w-full min-w-0 text-left ${className}`}>
            {children}
        </div>
    )
}
