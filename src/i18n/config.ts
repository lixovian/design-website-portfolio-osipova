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
import deGraffiti from './locales/de/projects/graffiti.json'
import deObjects from './locales/de/projects/objects.json'
import deExhibitions from './locales/de/projects/exhibitions.json'
import deInstallations from './locales/de/projects/installations.json'
import deTheatre from './locales/de/projects/theatre.json'
import dePrint from './locales/de/projects/print.json'
import deBurn from './locales/de/projects/objects/burn.json'
import deAtMyHome from './locales/de/projects/print/at_my_home.json'
import deFish from './locales/de/projects/theatre/fish.json'
import deIndigestionOfReality from './locales/de/projects/theatre/indigestion_of_reality.json'
import deNewAngels from './locales/de/projects/objects/new_angels.json'
import deUndisclosed from './locales/de/projects/objects/undisclosed.json'
import deWindows from './locales/de/projects/objects/windows.json'
import deTattooedAnimals from './locales/de/projects/objects/tattooed_animals.json'
import deDichoPb from './locales/de/projects/objects/dicho_pb.json'
import deSensitiveContent from './locales/de/projects/installations/sensitive_content.json'
import deL63 from './locales/de/projects/installations/l_63.json'
import deWindowsCom from './locales/de/projects/exhibitions/windows_com.json'
import deSignals from './locales/de/projects/exhibitions/signals.json'
import deBordersTerritories from './locales/de/projects/exhibitions/borders_territories.json'
import deTruckBoy from './locales/de/projects/exhibitions/truck_boy.json'

import enCommon from './locales/en/common.json'
import enMain from './locales/en/main.json'
import enCv from './locales/en/cv.json'
import enProjects from './locales/en/projects.json'
import enStatement from './locales/en/statement.json'
import enMusic from './locales/en/music.json'
import enCollaborations from './locales/en/collaborations.json'
import enContacts from './locales/en/contacts.json'
import enGraffiti from './locales/en/projects/graffiti.json'
import enObjects from './locales/en/projects/objects.json'
import enExhibitions from './locales/en/projects/exhibitions.json'
import enInstallations from './locales/en/projects/installations.json'
import enTheatre from './locales/en/projects/theatre.json'
import enPrint from './locales/en/projects/print.json'
import enBurn from './locales/en/projects/objects/burn.json'
import enAtMyHome from './locales/en/projects/print/at_my_home.json'
import enFish from './locales/en/projects/theatre/fish.json'
import enIndigestionOfReality from './locales/en/projects/theatre/indigestion_of_reality.json'
import enNewAngels from './locales/en/projects/objects/new_angels.json'
import enUndisclosed from './locales/en/projects/objects/undisclosed.json'
import enWindows from './locales/en/projects/objects/windows.json'
import enTattooedAnimals from './locales/en/projects/objects/tattooed_animals.json'
import enDichoPb from './locales/en/projects/objects/dicho_pb.json'
import enSensitiveContent from './locales/en/projects/installations/sensitive_content.json'
import enL63 from './locales/en/projects/installations/l_63.json'
import enWindowsCom from './locales/en/projects/exhibitions/windows_com.json'
import enSignals from './locales/en/projects/exhibitions/signals.json'
import enBordersTerritories from './locales/en/projects/exhibitions/borders_territories.json'
import enTruckBoy from './locales/en/projects/exhibitions/truck_boy.json'

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
import ruBurn from './locales/ru/projects/objects/burn.json'
import ruAtMyHome from './locales/ru/projects/print/at_my_home.json'
import ruFish from './locales/ru/projects/theatre/fish.json'
import ruIndigestionOfReality from './locales/ru/projects/theatre/indigestion_of_reality.json'
import ruNewAngels from './locales/ru/projects/objects/new_angels.json'
import ruUndisclosed from './locales/ru/projects/objects/undisclosed.json'
import ruWindows from './locales/ru/projects/objects/windows.json'
import ruTattooedAnimals from './locales/ru/projects/objects/tattooed_animals.json'
import ruDichoPb from './locales/ru/projects/objects/dicho_pb.json'
import ruSensitiveContent from './locales/ru/projects/installations/sensitive_content.json'
import ruL63 from './locales/ru/projects/installations/l_63.json'
import ruWindowsCom from './locales/ru/projects/exhibitions/windows_com.json'
import ruSignals from './locales/ru/projects/exhibitions/signals.json'
import ruBordersTerritories from './locales/ru/projects/exhibitions/borders_territories.json'
import ruTruckBoy from './locales/ru/projects/exhibitions/truck_boy.json'

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
                graffiti: deGraffiti,
                objects: deObjects,
                exhibitions: deExhibitions,
                installations: deInstallations,
                theatre: deTheatre,
                print: dePrint,
                burn: deBurn,
                at_my_home: deAtMyHome,
                fish: deFish,
                indigestion_of_reality: deIndigestionOfReality,
                new_angels: deNewAngels,
                undisclosed: deUndisclosed,
                windows: deWindows,
                tattooed_animals: deTattooedAnimals,
                dicho_pb: deDichoPb,
                sensitive_content: deSensitiveContent,
                l_63: deL63,
                windows_com: deWindowsCom,
                signals: deSignals,
                borders_territories: deBordersTerritories,
                truck_boy: deTruckBoy,
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
                graffiti: enGraffiti,
                objects: enObjects,
                exhibitions: enExhibitions,
                installations: enInstallations,
                theatre: enTheatre,
                print: enPrint,
                burn: enBurn,
                at_my_home: enAtMyHome,
                fish: enFish,
                indigestion_of_reality: enIndigestionOfReality,
                new_angels: enNewAngels,
                undisclosed: enUndisclosed,
                windows: enWindows,
                tattooed_animals: enTattooedAnimals,
                dicho_pb: enDichoPb,
                sensitive_content: enSensitiveContent,
                l_63: enL63,
                windows_com: enWindowsCom,
                signals: enSignals,
                borders_territories: enBordersTerritories,
                truck_boy: enTruckBoy,
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
                burn: ruBurn,
                at_my_home: ruAtMyHome,
                fish: ruFish,
                indigestion_of_reality: ruIndigestionOfReality,
                new_angels: ruNewAngels,
                undisclosed: ruUndisclosed,
                windows: ruWindows,
                tattooed_animals: ruTattooedAnimals,
                dicho_pb: ruDichoPb,
                sensitive_content: ruSensitiveContent,
                l_63: ruL63,
                windows_com: ruWindowsCom,
                signals: ruSignals,
                borders_territories: ruBordersTerritories,
                truck_boy: ruTruckBoy,
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
