import {useTranslation} from "react-i18next";
import TextFull from "../components/text/TextFull.tsx";
import {LinkButton} from "../components/buttons/LinkButton.tsx";

export function CollaborationsPage() {
    const {t} = useTranslation('common');

    return (
        <span className="flex flex-col flex-1">
            <TextFull>
                <p>{t('mock.soon')}</p>
            </TextFull>

            <LinkButton label={t('buttons.back')} to='/' className="mt-auto"/>
        </span>
    )
}
