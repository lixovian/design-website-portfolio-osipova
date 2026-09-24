import {useTranslation} from "react-i18next";
import {BackButton} from "../../../components/buttons/BackButton.tsx";
import {
    ProjectImageGallery,
    type ProjectImageItem,
} from "../../../components/images/ProjectImageGallery.tsx";
import {TextColumns, type TextColumnItem} from "../../../components/text/TextColumns.tsx";
import image1 from "../../../assets/images/projects/objects/windows/1_full.png";
import image2 from "../../../assets/images/projects/objects/windows/2_full.png";
import image3 from "../../../assets/images/projects/objects/windows/3_left.png";
import image4 from "../../../assets/images/projects/objects/windows/4_full.png";
import image5 from "../../../assets/images/projects/objects/windows/5_full.png";
import image6 from "../../../assets/images/projects/objects/windows/6_full.png";
import image7 from "../../../assets/images/projects/objects/windows/7_full.png";
import image8 from "../../../assets/images/projects/objects/windows/8_full.png";
import image9 from "../../../assets/images/projects/objects/windows/9_full.png";

const images: readonly ProjectImageItem[] = [
    {src: image1, alt: 'Кованая оконная решётка с пиксельным орнаментом', layout: 'full'},
    {src: image2, alt: 'Оконная решётка в перспективе', layout: 'full'},
    {src: image3, alt: 'Верхняя часть кованой оконной решётки', layout: 'left'},
    {src: image4, alt: 'Первая оконная решётка сбоку', layout: 'full'},
    {src: image5, alt: 'Вторая оконная решётка', layout: 'full'},
    {src: image6, alt: 'Пиксельные элементы решётки крупным планом', layout: 'full'},
    {src: image7, alt: 'Орнамент оконной решётки крупным планом', layout: 'full'},
    {src: image8, alt: 'Вторая оконная решётка в перспективе', layout: 'full'},
    {src: image9, alt: 'Две створки кованой оконной решётки', layout: 'full'},
]

export function WindowsPage() {
    const {t} = useTranslation(['windows', 'common'])
    const textColumns: readonly TextColumnItem[] = [
        {
            title: t('about.title'),
            paragraphs: [
                t('about.paragraph_1'),
                t('about.paragraph_2'),
            ],
        },
        {
            title: t('credits.title'),
            paragraphs: [
                t('credits.technique'),
                t('credits.size'),
            ],
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
