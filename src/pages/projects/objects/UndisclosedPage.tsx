import {useTranslation} from "react-i18next";
import {BackButton} from "../../../components/buttons/BackButton.tsx";
import {
    ProjectImageGallery,
    type ProjectImageItem,
} from "../../../components/images/ProjectImageGallery.tsx";
import {TextColumns, type TextColumnItem} from "../../../components/text/TextColumns.tsx";
import image1 from "../../../assets/images/projects/objects/undisclosed/1_full.png";
import image2 from "../../../assets/images/projects/objects/undisclosed/2_full.png";
import image3 from "../../../assets/images/projects/objects/undisclosed/3_full.png";
import image4 from "../../../assets/images/projects/objects/undisclosed/4_full.png";
import image5 from "../../../assets/images/projects/objects/undisclosed/5_full.png";
import image6 from "../../../assets/images/projects/objects/undisclosed/6_full.png";
import image7 from "../../../assets/images/projects/objects/undisclosed/7_full.png";
import image8 from "../../../assets/images/projects/objects/undisclosed/8_full.png";

const images: readonly ProjectImageItem[] = [
    {src: image1, alt: 'Две бетонные книги', layout: 'full'},
    {src: image2, alt: 'Пятнадцать бетонных книг на стене', layout: 'full'},
    {src: image3, alt: 'Бетонные книги, разложенные рядами', layout: 'full'},
    {src: image4, alt: 'Фрагмент композиции из бетонных книг', layout: 'full'},
    {src: image5, alt: 'Бетонные книги крупным планом', layout: 'full'},
    {src: image6, alt: 'Фактура бетонной книги', layout: 'full'},
    {src: image7, alt: 'Бетонная книга на фоне композиции', layout: 'full'},
    {src: image8, alt: 'Бетонные книги в профиль', layout: 'full'},
]

export function UndisclosedPage() {
    const {t} = useTranslation(['undisclosed', 'common'])
    const textColumns: readonly TextColumnItem[] = [
        {
            title: t('about.title'),
            paragraphs: [t('about.paragraph_1')],
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
