import {useTranslation} from "react-i18next";
import {BackButton} from "../../../components/buttons/BackButton.tsx";
import {
    ProjectImageGallery,
    type ProjectImageItem,
} from "../../../components/images/ProjectImageGallery.tsx";
import {TextColumns, type TextColumnItem} from "../../../components/text/TextColumns.tsx";
import image1 from "../../../assets/images/projects/print/at_my_home/1_full.png";
import image2 from "../../../assets/images/projects/print/at_my_home/2_full.png";
import image3 from "../../../assets/images/projects/print/at_my_home/3_full.png";

const images: readonly ProjectImageItem[] = [
    {src: image1, alt: 'Размытые фигуры людей на фоне берёзового леса', layout: 'full'},
    {src: image2, alt: 'Презентация работы на выставке', layout: 'full'},
    {src: image3, alt: 'Чёрно-белая работа с размытыми фигурами', layout: 'full'},
]

export function AtMyHomePage() {
    const {t} = useTranslation(['at_my_home', 'common'])
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
                t('credits.material'),
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
