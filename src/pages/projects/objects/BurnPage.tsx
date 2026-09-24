import {useTranslation} from "react-i18next";
import {BackButton} from "../../../components/buttons/BackButton.tsx";
import {
    ProjectImageGallery,
    type ProjectImageItem,
} from "../../../components/images/ProjectImageGallery.tsx";
import {TextColumns, type TextColumnItem} from "../../../components/text/TextColumns.tsx";
import image1 from "../../../assets/images/projects/objects/burn/1_full.png";
import image2 from "../../../assets/images/projects/objects/burn/2_full.png";
import image3 from "../../../assets/images/projects/objects/burn/3_full.png";
import image4 from "../../../assets/images/projects/objects/burn/4_left.png";
import image5 from "../../../assets/images/projects/objects/burn/5_full.png";
import image6 from "../../../assets/images/projects/objects/burn/6_right.png";

const images: readonly ProjectImageItem[] = [
    {src: image1, alt: 'Обожжённая деревянная стена', layout: 'full'},
    {src: image2, alt: 'Фрагмент инсталляции у стены дома', layout: 'full'},
    {src: image3, alt: 'Инсталляция в архитектурном пространстве', layout: 'full'},
    {src: image4, alt: 'Левый фрагмент обожжённой стены', layout: 'left'},
    {src: image5, alt: 'Фактура обожжённых деревянных балок', layout: 'full'},
    {src: image6, alt: 'Правый фрагмент обожжённой стены', layout: 'right'},
]

export function BurnPage() {
    const {t} = useTranslation(['burn', 'common'])
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

            <BackButton
                className="mt-auto"
                label={t('common:buttons.back')}
            />
        </span>
    )
}
