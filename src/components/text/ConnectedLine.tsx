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
        <div className={`flex flex-wrap items-end gap-x-2 font-light ${className}`}>
            <span className="flex min-w-0 flex-auto items-end gap-2">
                <span className="w-fit min-w-0">{left}</span>
                <span
                    aria-hidden="true"
                    className="mb-[0.575em] h-px min-w-8 flex-1 bg-current"
                />
            </span>

            <span className="max-w-full shrink-0">
                {right}
            </span>
        </div>
    )
}
