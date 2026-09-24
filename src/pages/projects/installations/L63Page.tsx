import {useTranslation} from "react-i18next";
import {BackButton} from "../../../components/buttons/BackButton.tsx";
import {ImageFull} from "../../../components/images/ImageFull.tsx";
import {ProjectImageGallery, type ProjectImageItem} from "../../../components/images/ProjectImageGallery.tsx";
import {TextColumns, type TextColumnItem} from "../../../components/text/TextColumns.tsx";
import image1 from "../../../assets/images/projects/installations/l_63/1_full.png";
import image2 from "../../../assets/images/projects/installations/l_63/2_full.png";
import image3 from "../../../assets/images/projects/installations/l_63/3_full.png";
import image4 from "../../../assets/images/projects/installations/l_63/4_full.png";
import image5 from "../../../assets/images/projects/installations/l_63/5_full.png";
import image6 from "../../../assets/images/projects/installations/l_63/6_full.png";
import image7 from "../../../assets/images/projects/installations/l_63/7_full.png";
import image8 from "../../../assets/images/projects/installations/l_63/8_full.png";
import image9Column1 from "../../../assets/images/projects/installations/l_63/9_column_1.png";
import image9Column2 from "../../../assets/images/projects/installations/l_63/9_column_2.png";

const images: readonly ProjectImageItem[] = [
    {src: image1, alt: 'Латунные полосы в выставочном пространстве', layout: 'full'},
    {src: image2, alt: 'Инсталляция из латунных полос у дверного проёма', layout: 'full'},
    {src: image3, alt: 'Латунные полосы в перспективе', layout: 'full'},
    {src: image4, alt: 'Инсталляция в углу помещения', layout: 'full'},
    {src: image5, alt: 'Патинированные латунные ленты крупным планом', layout: 'full'},
    {src: image6, alt: 'Общий вид инсталляции Л63', layout: 'full'},
    {src: image7, alt: 'Человек рядом с латунными полосами', layout: 'full'},
    {src: image8, alt: 'Ноги человека на элементах инсталляции', layout: 'full'},
]

export function L63Page() {
    const {t} = useTranslation(['l_63', 'common'])
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
            paragraphs: [t('credits.material')],
        },
    ]

    return (
        <span className="flex flex-1 flex-col gap-16">
            <TextColumns items={textColumns}/>
            <ProjectImageGallery images={images}/>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <ImageFull src={image9Column1} alt="Фактура патинированной латуни"/>
                <ImageFull src={image9Column2} alt="Край латунной ленты крупным планом"/>
            </div>

            <BackButton className="mt-auto" label={t('common:buttons.back')}/>
        </span>
    )
}
