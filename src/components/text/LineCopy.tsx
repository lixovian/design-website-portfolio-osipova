import { useState } from 'react'
import {useTranslation} from "react-i18next";

type LineCopyProps = {
    label: string
    copyingText: string
    className?: string
};

export default function LineCopy({
                                     label,
                                     copyingText,
                                     className = '',
                                 }: LineCopyProps) {
    const {t} = useTranslation('common');

    const [copied, setCopied] = useState(false);

    async function handleCopy() {
        try {
            await navigator.clipboard.writeText(copyingText);

            setCopied(true);
            window.setTimeout(() => setCopied(false), 1500);
        } catch (error) {
            console.error('Failed to copy text:', error);
        }
    }

    return (
        <button
            type="button"
            onClick={handleCopy}
            className={`cursor-pointer text-left transition-colors hover:text-accent ${className}`}
        >
            {copied ? t("buttons.copied") : label}
        </button>
    )
}