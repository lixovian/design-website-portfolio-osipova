import {LanguageSwitch} from "../components/buttons/LanguageSwitch.tsx";
import {LinkList} from "../components/buttons/LinkList.tsx";
import type {LinkItem} from "../components/buttons/LinkButton.tsx";
import backgroundImage from "../assets/images/main/background.png";
import {useTranslation} from "react-i18next";

const navigation = [
    {labelKey: 'navigation.cv', to: '/cv'},
    {labelKey: 'navigation.projects', to: '/projects'},
    {labelKey: 'navigation.statement', to: '/statement'},
    {labelKey: 'navigation.music', to: '/music'},
    {labelKey: 'navigation.collaborations', to: '/collaborations'},
    {labelKey: 'navigation.contacts', to: '/contacts'},
] as const

export function MainPage() {
    const {t} = useTranslation('main')
    const translatedNavigation: LinkItem[] = navigation.map(({labelKey, to}) => ({
        label: t(labelKey),
        to,
    }))

    return (
        <>
            <div className="relative z-10">
                <LinkList items={translatedNavigation}/>
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen max-w-none -translate-x-1/2 overflow-hidden">
                <img
                    src={backgroundImage}
                    alt=""
                    aria-hidden="true"
                    loading="eager"
                    fetchPriority="high"
                    className="absolute bottom-0 right-0 h-full w-[70vw] max-w-none object-contain object-right-bottom select-none sm:h-[80%] sm:w-auto"
                />
            </div>

            <div className="relative z-10 mt-auto">
                <LanguageSwitch/>
            </div>
        </>
    )
}
