import {useTranslation} from "react-i18next";
import {BackButton} from "../../../components/buttons/BackButton.tsx";
import {ProjectImageGallery, type ProjectImageItem} from "../../../components/images/ProjectImageGallery.tsx";
import {TextColumns, type TextColumnItem} from "../../../components/text/TextColumns.tsx";
import image1 from "../../../assets/images/projects/exhibitions/truck_boy/1_full.png";
import image2 from "../../../assets/images/projects/exhibitions/truck_boy/2_left.png";
import image3 from "../../../assets/images/projects/exhibitions/truck_boy/3_full.png";
import image4 from "../../../assets/images/projects/exhibitions/truck_boy/4_right.png";
import image5 from "../../../assets/images/projects/exhibitions/truck_boy/5_full.png";
import image6 from "../../../assets/images/projects/exhibitions/truck_boy/6_full.png";
import image7 from "../../../assets/images/projects/exhibitions/truck_boy/7_right.png";
import image8 from "../../../assets/images/projects/exhibitions/truck_boy/8_full.png";
import image9 from "../../../assets/images/projects/exhibitions/truck_boy/9_full.png";
import image10 from "../../../assets/images/projects/exhibitions/truck_boy/10_full.png";
import image11 from "../../../assets/images/projects/exhibitions/truck_boy/11_left.png";
import image12 from "../../../assets/images/projects/exhibitions/truck_boy/12_full.png";
import image13 from "../../../assets/images/projects/exhibitions/truck_boy/13_right.png";
import image14 from "../../../assets/images/projects/exhibitions/truck_boy/14_full.png";
import image15 from "../../../assets/images/projects/exhibitions/truck_boy/15_full.png";
import image16 from "../../../assets/images/projects/exhibitions/truck_boy/16_left.png";
import image17 from "../../../assets/images/projects/exhibitions/truck_boy/17_right.png";
import image18 from "../../../assets/images/projects/exhibitions/truck_boy/18_full.png";
import image19 from "../../../assets/images/projects/exhibitions/truck_boy/19_full.png";
import image20 from "../../../assets/images/projects/exhibitions/truck_boy/20_full.png";
import image21 from "../../../assets/images/projects/exhibitions/truck_boy/21_full.png";

const images: readonly ProjectImageItem[] = [
    {src: image1, alt: 'Три выставочных контейнера', layout: 'full'},
    {src: image2, alt: 'Ряд грузовых контейнеров', layout: 'left'},
    {src: image3, alt: 'Экспозиция внутри контейнера', layout: 'full'},
    {src: image4, alt: 'Посетители в контейнере', layout: 'right'},
    {src: image5, alt: 'Посетители рассматривают работы', layout: 'full'},
    {src: image6, alt: 'Тёмный выставочный коридор', layout: 'full'},
    {src: image7, alt: 'Посетители у входа в контейнер', layout: 'right'},
    {src: image8, alt: 'Работы в пространстве контейнера', layout: 'full'},
    {src: image9, alt: 'Гости выставки между контейнерами', layout: 'full'},
    {src: image10, alt: 'Экспозиция в длинном контейнере', layout: 'full'},
    {src: image11, alt: 'Посетители выставки в проходе', layout: 'left'},
    {src: image12, alt: 'Портретная работа в контейнере', layout: 'full'},
    {src: image13, alt: 'Гости в выставочном пространстве', layout: 'right'},
    {src: image14, alt: 'Живописная работа в контейнере', layout: 'full'},
    {src: image15, alt: 'Графические работы на металлической стене', layout: 'full'},
    {src: image16, alt: 'Объекты в нише контейнера', layout: 'left'},
    {src: image17, alt: 'Работы и одежда в экспозиции', layout: 'right'},
    {src: image18, alt: 'Инсталляция в контейнере', layout: 'full'},
    {src: image19, alt: 'Проекция в конце контейнера', layout: 'full'},
    {src: image20, alt: 'Детали проекционной инсталляции', layout: 'full'},
    {src: image21, alt: 'Внешняя стена выставочного контейнера', layout: 'full'},
]

export function TruckBoyPage() {
    const {t} = useTranslation(['truck_boy', 'common'])
    const textColumns: readonly TextColumnItem[] = [
        {
            title: t('about.title'),
            paragraphs: [
                t('about.paragraph_1'),
                t('about.paragraph_2'),
                t('about.section_1'),
                t('about.section_2'),
                t('about.paragraph_3'),
                t('about.section_3'),
            ],
        },
        {
            title: t('credits.title'),
            paragraphs: [t('credits.city'), t('credits.year')],
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
