import {useTranslation} from "react-i18next";
import {BackButton} from "../../../components/buttons/BackButton.tsx";
import {ProjectImageGallery, type ProjectImageItem} from "../../../components/images/ProjectImageGallery.tsx";
import {TextColumns, type TextColumnItem} from "../../../components/text/TextColumns.tsx";
import image1 from "../../../assets/images/projects/exhibitions/borders_territories/1_full.png";
import image2 from "../../../assets/images/projects/exhibitions/borders_territories/2_full.png";
import image3 from "../../../assets/images/projects/exhibitions/borders_territories/3_full.png";
import image4 from "../../../assets/images/projects/exhibitions/borders_territories/4_full.png";
import image5 from "../../../assets/images/projects/exhibitions/borders_territories/5_full.png";
import image6 from "../../../assets/images/projects/exhibitions/borders_territories/6_full.png";
import image7 from "../../../assets/images/projects/exhibitions/borders_territories/7_full.png";
import image8 from "../../../assets/images/projects/exhibitions/borders_territories/8_full.png";
import image9 from "../../../assets/images/projects/exhibitions/borders_territories/9_full.png";
import image10 from "../../../assets/images/projects/exhibitions/borders_territories/10_full.png";
import image11 from "../../../assets/images/projects/exhibitions/borders_territories/11_full.png";
import image12 from "../../../assets/images/projects/exhibitions/borders_territories/12_full.png";
import image13 from "../../../assets/images/projects/exhibitions/borders_territories/13_full.png";
import image14 from "../../../assets/images/projects/exhibitions/borders_territories/14_left.png";
import image15 from "../../../assets/images/projects/exhibitions/borders_territories/15_full.png";
import image16 from "../../../assets/images/projects/exhibitions/borders_territories/16_full.png";
import image17 from "../../../assets/images/projects/exhibitions/borders_territories/17_right.png";

const images: readonly ProjectImageItem[] = [
    {src: image1, alt: 'Общий вид выставки', layout: 'full'},
    {src: image2, alt: 'Работы в светлом выставочном зале', layout: 'full'},
    {src: image3, alt: 'Текстильная инсталляция в центре зала', layout: 'full'},
    {src: image4, alt: 'Выставочный зал с окнами', layout: 'full'},
    {src: image5, alt: 'Объекты на постаментах', layout: 'full'},
    {src: image6, alt: 'Текстильная работа с металлическими нитями', layout: 'full'},
    {src: image7, alt: 'Фактура нитей и волокон', layout: 'full'},
    {src: image8, alt: 'Серия работ на стене', layout: 'full'},
    {src: image9, alt: 'Экспозиция с текстильными объектами', layout: 'full'},
    {src: image10, alt: 'Посетители рассматривают работу', layout: 'full'},
    {src: image11, alt: 'Фактура красного текстильного объекта', layout: 'full'},
    {src: image12, alt: 'Четыре работы в экспозиции', layout: 'full'},
    {src: image13, alt: 'Фрагменты разноцветных материалов', layout: 'full'},
    {src: image14, alt: 'Посетители выставки', layout: 'left'},
    {src: image15, alt: 'Экскурсия в выставочном зале', layout: 'full'},
    {src: image16, alt: 'Работы на стене и скульптурный объект', layout: 'full'},
    {src: image17, alt: 'Участники выставки', layout: 'right'},
]

export function BordersTerritoriesPage() {
    const {t} = useTranslation(['borders_territories', 'common'])
    const textColumns: readonly TextColumnItem[] = [
        {
            title: t('about.title'),
            paragraphs: [
                t('about.paragraph_1'),
                t('about.paragraph_2'),
                t('about.paragraph_3'),
                t('about.paragraph_4'),
            ],
        },
        {
            title: t('credits.title'),
            variant: 'credits',
            paragraphs: [t('credits.city'), t('credits.year'), t('credits.authors')],
        },
    ]

    return (
        <span className="flex flex-1 flex-col gap-16">
            <TextColumns items={textColumns}/>
            <ProjectImageGallery images={images}/>
            <BackButton className="mt-auto" label={t('common:buttons.back')}/>
        </span>
    )
}
