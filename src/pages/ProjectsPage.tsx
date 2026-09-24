import {useTranslation} from "react-i18next";
import {LinkList} from "../components/buttons/LinkList.tsx";
import {LinkButton, type LinkItem} from "../components/buttons/LinkButton.tsx";

const navigation = [
    {labelKey: 'projects.total_projects_exhibitions', to: 'exhibitions'},
    {labelKey: 'projects.installations', to: 'installations'},
    {labelKey: 'projects.objects', to: 'objects'},
    {labelKey: 'projects.print', to: 'print'},
    {labelKey: 'projects.theatre', to: 'theatre'},
    {labelKey: 'projects.graffiti_gallery', to: 'graffiti'}
]

export function ProjectsPage() {
    const {t} = useTranslation(['projects', 'common'])
    const translatedNavigation: LinkItem[] = navigation.map(({labelKey, to}) => ({
        label: t(labelKey),
        to,
    }))

    return (
            <span className="flex flex-1 flex-col">
            <LinkList items={translatedNavigation}/>

            <LinkButton
                to="/"
                className="mt-auto"
                label={t('common:buttons.back')}
            />
                </span>
    )
}
