import { useTranslation } from 'react-i18next'
import {useLocation, useNavigate} from 'react-router-dom'
import { ButtonSwitch } from './ButtonSwitch'
import { supportedLanguages } from '../../i18n/config.ts'
import { languageHandler } from '../../scripts/languageHandler.ts'

export function LanguageSwitch() {
    const { t, i18n } = useTranslation('common')
    const location = useLocation()
    const navigate = useNavigate()

    const languages = supportedLanguages.map((language) => ({
        id: language,
        label: t(`languages.${language}`),
        action: () => navigate({
            pathname: languageHandler(location.pathname, language),
            search: location.search,
            hash: location.hash,
        }),
    }))

    return (
        <ButtonSwitch
            items={languages}
            activeId={i18n.resolvedLanguage?.split('-')[0]}
        />
    )
}
