import {useLocation} from "react-router-dom";
import {LinkButton} from "./LinkButton.tsx";

type BackButtonProps = {
    label: string
    className?: string
}

function getParentPath(pathname: string): string {
    const pathSegments = pathname.split('/').filter(Boolean)

    if (pathSegments.length <= 1) {
        return '/'
    }

    return `/${pathSegments.slice(0, -1).join('/')}`
}

export function BackButton({label, className}: BackButtonProps) {
    const {pathname} = useLocation()

    return (
        <LinkButton
            to={getParentPath(pathname)}
            label={label}
            className={className}
        />
    )
}
