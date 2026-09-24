import {Link} from "react-router-dom";
import type {LinkItem} from "./LinkButton.tsx";

export interface LinkImageItem extends LinkItem {
    src: string
}

export function LinkImage({label, to, src, className}: LinkImageItem) {
    return (
        <Link
            className={`group flex w-full flex-col gap-1 ${className ?? ''}`}
            to={to}
        >
            <img
                src={src}
                alt={label}
                className="h-auto w-full transition-all group-hover:brightness-110"
                loading="lazy"
            />

            <p className="w-fit text-sm font-light transition-colors group-hover:text-accent">
                {label}
            </p>
        </Link>
    )
}
