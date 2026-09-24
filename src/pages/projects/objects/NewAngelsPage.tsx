import {useTranslation} from "react-i18next";
import {BackButton} from "../../../components/buttons/BackButton.tsx";
import {ImageFull} from "../../../components/images/ImageFull.tsx";
import {ImageLeft} from "../../../components/images/ImageLeft.tsx";
import {TextColumns, type TextColumnItem} from "../../../components/text/TextColumns.tsx";
import {TextLeft} from "../../../components/text/TextLeft.tsx";
import image1 from "../../../assets/images/projects/objects/new_angels/1_full.png";
import image2 from "../../../assets/images/projects/objects/new_angels/2_full.png";
import image3 from "../../../assets/images/projects/objects/new_angels/3_full.png";
import image4 from "../../../assets/images/projects/objects/new_angels/4_full.png";
import image5 from "../../../assets/images/projects/objects/new_angels/5_left.png";
import image6 from "../../../assets/images/projects/objects/new_angels/6_full.png";
import image7 from "../../../assets/images/projects/objects/new_angels/7_full.png";
import image8 from "../../../assets/images/projects/objects/new_angels/8_full.png";
import image9 from "../../../assets/images/projects/objects/new_angels/9_full.png";

export function NewAngelsPage() {
    const {t} = useTranslation(['new_angels', 'common'])
    const textColumns: readonly TextColumnItem[] = [
        {
            title: t('about.title'),
            paragraphs: [t('about.paragraph_1')],
        },
        {
            title: t('credits.title'),
            variant: 'credits',
            paragraphs: [
                t('credits.technique'),
                t('credits.sizes'),
            ],
        },
    ]

    return (
        <span className="flex flex-1 flex-col gap-16">
            <TextColumns items={textColumns}/>

            <div className="flex flex-col gap-8 md:gap-12">
                <ImageFull src={image1} alt="Кованый орнамент в форме ангела"/>
                <ImageFull src={image2} alt="Кованый ангел в перспективе"/>
                <TextLeft>
                    <p>{t('about.paragraph_2')}</p>
                </TextLeft>
                <ImageFull src={image3} alt="Кованый ангел крупным планом"/>
                <ImageFull src={image4} alt="Кованый ангел сбоку"/>
                <ImageLeft src={image5} alt="Фрагмент кованого орнамента"/>
                <ImageFull src={image6} alt="Крыло кованого ангела крупным планом"/>
                <ImageFull src={image7} alt="Вторая кованая фигура ангела"/>
                <ImageFull src={image8} alt="Вторая фигура ангела в перспективе"/>
                <ImageFull src={image9} alt="Фрагмент второй фигуры ангела"/>
            </div>

            <BackButton className="mt-auto" label={t('common:buttons.back')}/>
        </span>
    )
}
