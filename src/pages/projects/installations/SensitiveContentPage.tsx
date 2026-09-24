import {useTranslation} from "react-i18next";
import {BackButton} from "../../../components/buttons/BackButton.tsx";
import {ImageFull} from "../../../components/images/ImageFull.tsx";
import {TextColumns, type TextColumnItem} from "../../../components/text/TextColumns.tsx";
import {TextLeft} from "../../../components/text/TextLeft.tsx";
import image1 from "../../../assets/images/projects/installations/sensitive_content/1_full.png";
import image2 from "../../../assets/images/projects/installations/sensitive_content/2_full.png";
import image3 from "../../../assets/images/projects/installations/sensitive_content/3_full.png";
import image4 from "../../../assets/images/projects/installations/sensitive_content/4_full.png";
import image5 from "../../../assets/images/projects/installations/sensitive_content/5_full.png";
import image6 from "../../../assets/images/projects/installations/sensitive_content/6_full.png";

export function SensitiveContentPage() {
    const {t} = useTranslation(['sensitive_content', 'common'])
    const textColumns: readonly TextColumnItem[] = [
        {
            title: t('about.title'),
            paragraphs: [t('about.paragraph_1')],
        },
        {
            title: t('credits.title'),
            paragraphs: [
                t('credits.material'),
                t('credits.medium'),
                t('credits.sizes'),
                t('credits.year'),
            ],
        },
    ]

    return (
        <span className="flex flex-1 flex-col gap-16">
            <TextColumns items={textColumns}/>

            <div className="flex flex-col gap-8 md:gap-12">
                <ImageFull src={image1} alt="Баннер со знаками скрытого контента"/>
                <ImageFull src={image2} alt="Комната, покрытая баннером со знаками"/>
                <ImageFull src={image3} alt="Инсталляция в комнате с окном"/>
                <TextLeft>
                    <p>{t('about.paragraph_2')}</p>
                    <p>{t('about.paragraph_3')}</p>
                </TextLeft>
                <ImageFull src={image4} alt="Угол комнаты со знаками скрытого контента"/>
                <ImageFull src={image5} alt="Стена инсталляции рядом с окном"/>
                <ImageFull src={image6} alt="Баннер со знаками крупным планом"/>
            </div>

            <BackButton className="mt-auto" label={t('common:buttons.back')}/>
        </span>
    )
}
