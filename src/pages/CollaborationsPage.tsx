import {useTranslation} from "react-i18next";
import TextFull from "../components/text/TextFull.tsx";
import {BackButton} from "../components/buttons/BackButton.tsx";

export function CollaborationsPage() {
    const {t} = useTranslation('common');

    return (
        <span className="flex flex-col flex-1">
            <TextFull>
                <p>{t('mock.soon')}</p>
            </TextFull>

            <BackButton label={t('buttons.back')} className="mt-auto"/>
        </span>
    )
}
