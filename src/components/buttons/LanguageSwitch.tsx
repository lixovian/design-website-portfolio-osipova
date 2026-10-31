import { useTranslation } from 'react-i18next'
import { ButtonSwitch } from './ButtonSwitch'
import { supportedLanguages } from '../../i18n/config.ts'

export function LanguageSwitch() {
    const { t, i18n } = useTranslation('common')

    const languages = supportedLanguages.map((language) => ({
        id: language,
        label: t(`languages.${language}`),
        action: () => {
            void i18n.changeLanguage(language)
        },
    }))

    return (
        <ButtonSwitch
            items={languages}
            activeId={i18n.resolvedLanguage?.split('-')[0]}
        />
    )
}
