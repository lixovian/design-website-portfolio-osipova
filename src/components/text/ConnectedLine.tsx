type ConnectedLineProps = {
    left: string
    right: string
    className?: string
}

export function ConnectedLine({
                                  left,
                                  right,
                                  className = '',
                              }: ConnectedLineProps) {
    return (
        <div className={`flex flex-wrap items-center gap-x-2 font-light ${className}`}>
            <span className="flex min-w-fit flex-1 items-center gap-2 whitespace-nowrap">
                <span>{left}</span>
                <span className="h-px min-w-8 flex-1 bg-current" />
            </span>

            <span className="whitespace-nowrap">
                {right}
            </span>
        </div>
    )
}