import {LanguageSwitch} from "../components/buttons/LanguageSwitch.tsx";
import {LinkList} from "../components/buttons/LinkList.tsx";
import type {LinkItem} from "../components/buttons/LinkButton.tsx";
import backgroundImage from "../assets/images/main/background.png";

const navigation: LinkItem[] = [
    {label: 'cv', to: '/cv'},
    {label: 'projects', to: '/projects'},
    {label: 'statement', to: '/statement'},
    {label: 'music', to: '/music'},
    {label: 'collaborations', to: '/collaborations'},
    {label: 'contacts', to: '/contacts'},
]

export function MainPage() {
    return (
        <>
            <div className="relative z-10">
                <LinkList items={navigation}/>
            </div>

            <img
                src={backgroundImage}
                alt=""
                aria-hidden="true"
                loading="eager"
                fetchPriority="high"
                className="pointer-events-none absolute bottom-0 right-0 z-0 h-auto w-[55%] max-w-none select-none"
            />

            <div className="absolute bottom-8 left-20">
                <LanguageSwitch/>
            </div>
        </>
    )
}
