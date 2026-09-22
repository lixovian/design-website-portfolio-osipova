import {LinkButton, type LinkItem} from "./LinkButton.tsx";

type LinkListProps = {
    items: LinkItem[]
}

export function LinkList({items}: LinkListProps) {
    return (
        <nav className="flex flex-col items-start leading-none">
            {items.map((item) => (
                <LinkButton key={item.to} to={item.to} label={item.label}/>
            ))}
        </nav>
    )
}
