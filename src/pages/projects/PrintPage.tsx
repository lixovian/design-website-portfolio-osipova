import {useTranslation} from "react-i18next";
import {BackButton} from "../../components/buttons/BackButton.tsx";
import type {LinkImageItem} from "../../components/buttons/LinkImage.tsx";
import {LinkImageGrid} from "../../components/buttons/LinkImageGrid.tsx";
import coverAtMyHome from "../../assets/images/projects/print/cover_at_my_home.png";

export function PrintPage() {
    const {t} = useTranslation(['print', 'common']);
    const prints: LinkImageItem[] = [
        {label: t('covers.at_my_home'), src: coverAtMyHome, to: 'at_my_home'},
    ];

    return (
        <span className="flex flex-1 flex-col gap-16">
            <LinkImageGrid items={prints} align="start"/>

            <BackButton
                className="mt-auto"
                label={t('common:buttons.back')}
            />
        </span>
    )
}
