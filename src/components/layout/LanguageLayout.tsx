import {useEffect} from 'react'
import {Navigate, Outlet, useLocation, useParams} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import {isSupportedLanguage} from '../../i18n/config.ts'

function getResolvedLanguage(language: string | undefined): string {
    const normalizedLanguage = language?.split('-')[0] ?? ''

    return isSupportedLanguage(normalizedLanguage) ? normalizedLanguage : 'en'
}

export function LanguageRedirect() {
    const {i18n} = useTranslation()
    const location = useLocation()
    const activeLanguage = getResolvedLanguage(i18n.resolvedLanguage)
    const pathLanguage = location.pathname.split('/').filter(Boolean)[0] ?? null
    const pathname = pathLanguage && !isSupportedLanguage(pathLanguage)
        ? `/${activeLanguage}${location.pathname}`
        : `/${activeLanguage}`

    return <Navigate to={{pathname, search: location.search, hash: location.hash}} replace/>
}

export function LanguageLayout() {
    const {language} = useParams()
    const location = useLocation()
    const {i18n} = useTranslation()
    const activeLanguage = getResolvedLanguage(i18n.resolvedLanguage)

    useEffect(() => {
        if (isSupportedLanguage(language ?? null) && language !== activeLanguage) {
            void i18n.changeLanguage(language)
        }
    }, [activeLanguage, i18n, language])

    if (!isSupportedLanguage(language ?? null)) {
        return (
            <Navigate
                to={{
                    pathname: `/${activeLanguage}${location.pathname}`,
                    search: location.search,
                    hash: location.hash,
                }}
                replace
            />
        )
    }

    if (language !== activeLanguage) {
        return null
    }

    return <Outlet/>
}
