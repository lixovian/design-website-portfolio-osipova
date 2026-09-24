import {useTranslation} from "react-i18next";
import {BackButton} from "../../../components/buttons/BackButton.tsx";
import {
    ProjectImageGallery,
    type ProjectImageItem,
} from "../../../components/images/ProjectImageGallery.tsx";
import {TextColumns, type TextColumnItem} from "../../../components/text/TextColumns.tsx";
import image1 from "../../../assets/images/projects/objects/dicho_pb/1_full.png";
import image2 from "../../../assets/images/projects/objects/dicho_pb/2_full.png";
import image3 from "../../../assets/images/projects/objects/dicho_pb/3_full.png";
import image4 from "../../../assets/images/projects/objects/dicho_pb/4_right.png";
import image5 from "../../../assets/images/projects/objects/dicho_pb/5_full.png";
import image6 from "../../../assets/images/projects/objects/dicho_pb/6_full.png";
import image7 from "../../../assets/images/projects/objects/dicho_pb/7_full.png";
import image8 from "../../../assets/images/projects/objects/dicho_pb/8_full.png";
import image9 from "../../../assets/images/projects/objects/dicho_pb/9_full.png";
import image10 from "../../../assets/images/projects/objects/dicho_pb/10_left.png";
import image11 from "../../../assets/images/projects/objects/dicho_pb/11_full.png";
import image12 from "../../../assets/images/projects/objects/dicho_pb/12_right.png";
import image13 from "../../../assets/images/projects/objects/dicho_pb/13_full.png";

const images: readonly ProjectImageItem[] = [
    {src: image1, alt: 'Серия чёрных керамических фигур', layout: 'full'},
    {src: image2, alt: 'Двуглавые керамические лошади', layout: 'full'},
    {src: image3, alt: 'Двуглавая керамическая лошадь', layout: 'full'},
    {src: image4, alt: 'Фрагмент двуглавой лошади', layout: 'right'},
    {src: image5, alt: 'Двуглавая лошадь крупным планом', layout: 'full'},
    {src: image6, alt: 'Двуглавые керамические снегири', layout: 'full'},
    {src: image7, alt: 'Двуглавый снегирь', layout: 'full'},
    {src: image8, alt: 'Керамический снегирь в профиль', layout: 'full'},
    {src: image9, alt: 'Двуглавые керамические лягушки', layout: 'full'},
    {src: image10, alt: 'Двуглавая керамическая лягушка', layout: 'left'},
    {src: image11, alt: 'Двуглавый керамический голубь', layout: 'full'},
    {src: image12, alt: 'Фрагмент двуглавого голубя', layout: 'right'},
    {src: image13, alt: 'Серия керамических фигур крупным планом', layout: 'full'},
]

export function DichoPbPage() {
    const {t} = useTranslation(['dicho_pb', 'common'])
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
            variant: 'credits',
            paragraphs: [
                t('credits.edition'),
                t('credits.materials'),
                t('credits.sizes'),
                t('credits.year'),
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
