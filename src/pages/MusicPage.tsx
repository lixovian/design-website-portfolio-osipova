import {LinkButton} from "../components/buttons/LinkButton.tsx";
import {useTranslation} from "react-i18next";
import TextFull from "../components/text/TextFull.tsx";

export function MusicPage() {
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
