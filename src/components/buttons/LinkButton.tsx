import {Link} from "react-router-dom";

export type LinkItem = {
    label: string
    to: string
}

export function LinkButton({to, label}: LinkItem) {
    return (
        <Link className="text-sm font-light transition-colors hover:text-accent"
            key={to} to={to}>{label}</Link>
    )
}