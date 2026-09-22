export type SwitchItem = {
    id: string
    label: string
    action: () => void
}

type ButtonSwitchProps = {
    items: readonly SwitchItem[]
    activeId?: string
}

export function ButtonSwitch({items, activeId}: ButtonSwitchProps) {
    return (
        <div className="flex gap-4" role="group">
            {items.map(({id, label, action}) => {
                const isActive = id === activeId

                return (
                    <button
                        key={id}
                        type="button"
                        onClick={action}
                        className={`text-sm font-light transition-colors hover:text-accent
                        ${isActive ? 'underline' : 'cursor-pointer'} 
                        `}
                    >
                        {label}
                    </button>
                )
            })
            }
        </div>
    )
}