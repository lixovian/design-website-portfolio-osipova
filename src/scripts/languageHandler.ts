import {isSupportedLanguage, type Language} from '../i18n/config'

export function languageHandler(pathname: string, language: Language): string {
    const pathSegments = pathname.split('/').filter(Boolean)

    if (isSupportedLanguage(pathSegments[0] ?? null)) {
        pathSegments[0] = language
    } else {
        pathSegments.unshift(language)
    }

    return `/${pathSegments.join('/')}`
}
