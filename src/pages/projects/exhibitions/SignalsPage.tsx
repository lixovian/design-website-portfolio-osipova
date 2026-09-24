import {useTranslation} from "react-i18next";
import {BackButton} from "../../../components/buttons/BackButton.tsx";
import {ImageFull} from "../../../components/images/ImageFull.tsx";
import {ProjectImageGallery, type ProjectImageItem} from "../../../components/images/ProjectImageGallery.tsx";
import {TextColumns, type TextColumnItem} from "../../../components/text/TextColumns.tsx";
import {TextLeft} from "../../../components/text/TextLeft.tsx";
import image1 from "../../../assets/images/projects/exhibitions/signals/1_full.png";
import image2 from "../../../assets/images/projects/exhibitions/signals/2_full.png";
import image3 from "../../../assets/images/projects/exhibitions/signals/3_left.png";
import image4 from "../../../assets/images/projects/exhibitions/signals/4_full.png";
import image5 from "../../../assets/images/projects/exhibitions/signals/5_full.png";
import image6 from "../../../assets/images/projects/exhibitions/signals/6_right.png";
import image7 from "../../../assets/images/projects/exhibitions/signals/7_full.png";
import image8 from "../../../assets/images/projects/exhibitions/signals/8_full.png";
import image9 from "../../../assets/images/projects/exhibitions/signals/9_full.png";
import image10 from "../../../assets/images/projects/exhibitions/signals/10_full.png";

const openingImages: readonly ProjectImageItem[] = [
    {src: image1, alt: 'Выставочное пространство с инсталляциями', layout: 'full'},
    {src: image2, alt: 'Пространство, застеленное сеном', layout: 'full'},
    {src: image3, alt: 'Детская игрушка в сене', layout: 'left'},
    {src: image4, alt: 'Зеркало с металлической решёткой', layout: 'full'},
    {src: image5, alt: 'Посетители перед зеркальной инсталляцией', layout: 'full'},
    {src: image6, alt: 'Детская игрушка под зеркалом', layout: 'right'},
    {src: image7, alt: 'Три закрытых холодильника', layout: 'full'},
]

const closingImages: readonly ProjectImageItem[] = [
    {src: image8, alt: 'Три открытых холодильника', layout: 'full'},
    {src: image9, alt: 'Холодильники в выставочном пространстве', layout: 'full'},
]

export function SignalsPage() {
    const {t} = useTranslation(['signals', 'common'])
    const textColumns: readonly TextColumnItem[] = [
        {
            title: t('about.title'),
            paragraphs: [t('about.paragraph_1'), t('about.paragraph_2')],
        },
        {
            title: t('credits.title'),
            paragraphs: [t('credits.city'), t('credits.year')],
        },
    ]

    return (
        <span className="flex flex-1 flex-col gap-16">
            <TextColumns items={textColumns}/>
            <ProjectImageGallery images={openingImages}/>

            <TextLeft className="flex flex-col gap-4 font-light">
                <p>{t('works.mirror')}</p>
            </TextLeft>

            <ProjectImageGallery images={closingImages}/>

            <TextLeft className="flex flex-col gap-4 font-light">
                <p>{t('works.fridges')}</p>
            </TextLeft>

            <ImageFull src={image10} alt="Ряд детских игрушек и молоток"/>

            <TextLeft className="flex flex-col gap-4 font-light">
                <p>{t('works.hammer_1')}</p>
                <p>{t('works.hammer_2')}</p>
            </TextLeft>

            <BackButton className="mt-auto" label={t('common:buttons.back')}/>
        </span>
    )
}
