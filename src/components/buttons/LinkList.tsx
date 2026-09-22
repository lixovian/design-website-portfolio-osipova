import {LinkButton, type LinkItem} from "./LinkButton.tsx";

type LinkListProps = {
    items: LinkItem[]
}

export function LinkList({items}: LinkListProps) {
    return (
        <nav className="flex flex-col gap-0 items-start">
            {items.map((item) => (
                <LinkButton key={item.to} to={item.to} label={item.label}/>
            ))}
        </nav>
    )
}
