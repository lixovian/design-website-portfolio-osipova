import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import deCommon from './locales/de/common.json'
import deMain from './locales/de/main.json'
import deCv from './locales/de/cv.json'
import deProjects from './locales/de/projects.json'
import deStatement from './locales/de/statement.json'
import deMusic from './locales/de/music.json'
import deCollaborations from './locales/de/collaborations.json'
import deContacts from './locales/de/contacts.json'

import enCommon from './locales/en/common.json'
import enMain from './locales/en/main.json'
import enCv from './locales/en/cv.json'
import enProjects from './locales/en/projects.json'
import enStatement from './locales/en/statement.json'
import enMusic from './locales/en/music.json'
import enCollaborations from './locales/en/collaborations.json'
import enContacts from './locales/en/contacts.json'

import ruCommon from './locales/ru/common.json'
import ruMain from './locales/ru/main.json'
import ruCv from './locales/ru/cv.json'
import ruProjects from './locales/ru/projects.json'
import ruStatement from './locales/ru/statement.json'
import ruMusic from './locales/ru/music.json'
import ruCollaborations from './locales/ru/collaborations.json'
import ruContacts from './locales/ru/contacts.json'
import ruGraffiti from './locales/ru/projects/graffiti.json'
import ruObjects from './locales/ru/projects/objects.json'
import ruExhibitions from './locales/ru/projects/exhibitions.json'
import ruInstallations from './locales/ru/projects/installations.json'
import ruTheatre from './locales/ru/projects/theatre.json'
import ruPrint from './locales/ru/projects/print.json'

export const supportedLanguages = ['de', 'en', 'ru'] as const
export type Language = (typeof supportedLanguages)[number]

function isSupportedLanguage(language: string | null): language is Language {
    return supportedLanguages.includes(language as Language)
}

const savedLanguage = localStorage.getItem('language')
const initialLanguage = isSupportedLanguage(savedLanguage) ? savedLanguage : 'en'

void i18n
    .use(initReactI18next)
    .init({
        resources: {
            de: {
                common: deCommon,
                main: deMain,
                cv: deCv,
                projects: deProjects,
                statement: deStatement,
                music: deMusic,
                collaborations: deCollaborations,
                contacts: deContacts,
            },
            en: {
                common: enCommon,
                main: enMain,
                cv: enCv,
                projects: enProjects,
                statement: enStatement,
                music: enMusic,
                collaborations: enCollaborations,
                contacts: enContacts,
            },
            ru: {
                common: ruCommon,
                main: ruMain,
                cv: ruCv,
                projects: ruProjects,
                statement: ruStatement,
                music: ruMusic,
                collaborations: ruCollaborations,
                contacts: ruContacts,
                graffiti: ruGraffiti,
                objects: ruObjects,
                exhibitions: ruExhibitions,
                installations: ruInstallations,
                theatre: ruTheatre,
                print: ruPrint,
            },
        },
        lng: initialLanguage,
        fallbackLng: 'en',
        defaultNS: 'common',
        supportedLngs: supportedLanguages,
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,
        },
    })

i18n.on('languageChanged', (language) => {
    const normalizedLanguage = language.split('-')[0]

    if (isSupportedLanguage(normalizedLanguage)) {
        localStorage.setItem('language', normalizedLanguage)
        document.documentElement.lang = normalizedLanguage
    }
})

document.documentElement.lang = initialLanguage

export default i18n
