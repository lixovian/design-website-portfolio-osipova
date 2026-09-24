import TextFull from "../components/text/TextFull.tsx";
import {BackButton} from "../components/buttons/BackButton.tsx";
import {useTranslation} from "react-i18next";
import LineCopy from "../components/text/LineCopy.tsx";
import {TextLink} from "../components/text/TextLink.tsx";

export function ContactsPage() {
    const {t} = useTranslation(['contacts', 'common']);

    return (
        <span className="flex flex-col flex-1">
        <TextFull className="flex flex-col gap-2 font-light">
            <p>{t('mail')}: <LineCopy copyingText="natalia.osipova03@icloud.com" label="natalia.osipova03@icloud.com" className="underline"/></p>
            <p>{t('instagram')}: <TextLink href="https://www.instagram.com/pivnayakryshka/" label="@pivnayakryshka"/></p>
            <p>{t('telegram')}: <TextLink href="https://t.me/pivnayakryshka" label="@pivnayakryshka"/></p>
            <p>{t('phone')}: <LineCopy copyingText="+79269468924" label="+7 926 946 89 24" className="underline"/> (whatsapp)</p>
        </TextFull>

            <BackButton label={t('common:buttons.back')} className="mt-auto"/>
        </span>
    )
}
