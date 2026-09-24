import {Link} from "react-router-dom";

export type LinkItem = {
    label: string
    to: string
    className?: string
}

export function LinkButton({to, label, className}: LinkItem) {
    return (
        <Link className={`text-sm w-fit font-light transition-colors hover:text-accent ${className}`}
            to={to}>{label}</Link>
    )
}