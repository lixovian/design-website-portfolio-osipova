import i18n, { type Language } from '../i18n/config'

export function languageHandler(language: Language): void {
    void i18n.changeLanguage(language)
}
