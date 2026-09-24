import {useTranslation} from "react-i18next";
import {BackButton} from "../../components/buttons/BackButton.tsx";
import type {LinkImageItem} from "../../components/buttons/LinkImage.tsx";
import {LinkImageGrid} from "../../components/buttons/LinkImageGrid.tsx";
import coverL63 from "../../assets/images/projects/installations/cover_l_63.png";
import coverSensitiveContent from "../../assets/images/projects/installations/cover_sensitive_content.png";

export function InstallationsPage() {
    const {t} = useTranslation(['installations', 'common']);
    const installations: LinkImageItem[] = [
        {label: t('covers.l_63'), src: coverL63, to: 'l_63'},
        {label: t('covers.sensitive_content'), src: coverSensitiveContent, to: 'sensitive_content'},
    ];

    return (
        <span className="flex flex-1 flex-col gap-16">
            <LinkImageGrid items={installations} size="large"/>

            <BackButton
                className="mt-auto"
                label={t('common:buttons.back')}
            />
        </span>
    )
}
