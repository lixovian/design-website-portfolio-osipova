import {useTranslation} from "react-i18next";
import {BackButton} from "../../../components/buttons/BackButton.tsx";
import {
    ProjectImageGallery,
    type ProjectImageItem,
} from "../../../components/images/ProjectImageGallery.tsx";
import {TextColumns, type TextColumnItem} from "../../../components/text/TextColumns.tsx";
import image1 from "../../../assets/images/projects/theatre/fish/1_full.png";
import image2 from "../../../assets/images/projects/theatre/fish/2_full.png";
import image3 from "../../../assets/images/projects/theatre/fish/3_right.png";
import image4 from "../../../assets/images/projects/theatre/fish/4_full.png";

const images: readonly ProjectImageItem[] = [
    {src: image1, alt: 'Перформер в маске рыбы', layout: 'full'},
    {src: image2, alt: 'Перформер протягивает руки вверх', layout: 'full'},
    {src: image3, alt: 'Зелёные сапоги и красные колготки перформера', layout: 'right'},
    {src: image4, alt: 'Перформер в маске рыбы и чёрном костюме', layout: 'full'},
]

export function FishPage() {
    const {t} = useTranslation(['fish', 'common'])
    const textColumns: readonly TextColumnItem[] = [
        {
            title: t('about.title'),
            paragraphs: [
                t('about.intro'),
                <strong key="section_1_title" className="font-bold">
                    {t('about.section_1.title')}
                </strong>,
                t('about.section_1.text'),
                <strong key="section_2_title" className="font-bold">
                    {t('about.section_2.title')}
                </strong>,
                t('about.section_2.text'),
                <strong key="section_3_title" className="font-bold">
                    {t('about.section_3.title')}
                </strong>,
                t('about.section_3.text'),
            ],
        },
        {
            title: t('credits.title'),
            variant: 'credits',
            paragraphs: [
                t('credits.medium'),
                t('credits.year'),
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
