import { useTranslation } from 'react-i18next'
import { ButtonSwitch } from './ButtonSwitch'

export function LanguageSwitch() {
    const { i18n } = useTranslation()

    const languages = [
        {
            id: 'de',
            label: 'de',
            action: () => void i18n.changeLanguage('de'),
        },
        {
            id: 'en',
            label: 'en',
            action: () => void i18n.changeLanguage('en'),
        },
        {
            id: 'ru',
            label: 'ru',
            action: () => void i18n.changeLanguage('ru'),
        },
    ]

    return (
        <ButtonSwitch
            items={languages}
            activeId={i18n.resolvedLanguage}
        />
    )
}