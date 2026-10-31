import {Link} from "react-router-dom";
import type {LinkItem} from "./LinkButton.tsx";

export interface LinkImageItem extends LinkItem {
    src: string
    width: number
    height: number
}

export function LinkImage({label, to, src, width, height, className}: LinkImageItem) {
    return (
        <Link
            className={`group flex w-full flex-col gap-1 ${className ?? ''}`}
            to={to}
            aria-label={label}
        >
            <span
                className="block w-full"
                style={{aspectRatio: `${width} / ${height}`}}
            >
                <img
                    src={src}
                    alt=""
                    width={width}
                    height={height}
                    className="block h-full w-full object-contain transition-all group-hover:brightness-110"
                    loading="lazy"
                    decoding="async"
                />
            </span>

            <p className="w-fit text-sm font-light transition-colors group-hover:text-accent">
                {label}
            </p>
        </Link>
    )
}
