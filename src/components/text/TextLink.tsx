type TextLinkProps = {
    className?: string,
    href: string,
    label: string,
}

export function TextLink({label, href, className}: TextLinkProps) {
    return (
        <a href={href} className={`text-link underline transition-colors hover:text-accent ${className ?? ''}`}>{label}</a>
    )
}
