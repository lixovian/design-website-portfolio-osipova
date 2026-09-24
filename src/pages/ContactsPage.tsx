import TextFull from "../components/text/TextFull.tsx";
import {LinkButton} from "../components/buttons/LinkButton.tsx";
import {useTranslation} from "react-i18next";
import LineCopy from "../components/text/LineCopy.tsx";

export function ContactsPage() {
    const {t} = useTranslation(['contacts', 'common']);

    return (
        <span className="flex flex-col flex-1">
        <TextFull className="flex flex-col gap-2 font-light">
            <p>{t('mail')}: <LineCopy copyingText="natalia.osipova03@icloud.com" label="natalia.osipova03@icloud.com" className="underline"/></p>
            <p>{t('instagram')}: <a href="https://www.instagram.com/pivnayakryshka/" className="underline">@pivnayakryshka</a></p>
            <p>{t('telegram')}: <a href="https://t.me/pivnayakryshka" className="underline">@pivnayakryshka</a></p>
            <p>{t('phone')}: <LineCopy copyingText="+79269468924" label="+7 926 946 89 24" className="underline"/> (whatsapp)</p>
        </TextFull>

            <LinkButton label={t('common:buttons.back')} to="/" className="mt-auto"/>
        </span>
    )
}
