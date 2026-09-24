import {useTranslation} from "react-i18next";
import {BackButton} from "../../../components/buttons/BackButton.tsx";
import {
    ProjectImageGallery,
    type ProjectImageItem,
} from "../../../components/images/ProjectImageGallery.tsx";
import {TextColumns, type TextColumnItem} from "../../../components/text/TextColumns.tsx";
import image1 from "../../../assets/images/projects/objects/tattoed_animals/1_full.png";
import image2 from "../../../assets/images/projects/objects/tattoed_animals/2_full.png";
import image3 from "../../../assets/images/projects/objects/tattoed_animals/3_full.png";
import image4 from "../../../assets/images/projects/objects/tattoed_animals/4_left.png";
import image5 from "../../../assets/images/projects/objects/tattoed_animals/5_full.png";
import image6 from "../../../assets/images/projects/objects/tattoed_animals/6_full.png";
import image7 from "../../../assets/images/projects/objects/tattoed_animals/7_right.png";
import image8 from "../../../assets/images/projects/objects/tattoed_animals/8_full.png";
import image9 from "../../../assets/images/projects/objects/tattoed_animals/9_left.png";
import image10 from "../../../assets/images/projects/objects/tattoed_animals/10_full.png";
import image11 from "../../../assets/images/projects/objects/tattoed_animals/11_full.png";
import image12 from "../../../assets/images/projects/objects/tattoed_animals/12_full.png";
import image13 from "../../../assets/images/projects/objects/tattoed_animals/13_left.png";
import image14 from "../../../assets/images/projects/objects/tattoed_animals/14_full.png";

const images: readonly ProjectImageItem[] = [
    {src: image1, alt: 'Фарфоровые животные с орнаментами', layout: 'full'},
    {src: image2, alt: 'Две фарфоровые лошади', layout: 'full'},
    {src: image3, alt: 'Фарфоровые лошади с татуировками', layout: 'full'},
    {src: image4, alt: 'Фрагмент орнамента на лошади', layout: 'left'},
    {src: image5, alt: 'Четыре фарфоровых снегиря', layout: 'full'},
    {src: image6, alt: 'Фарфоровые снегири с орнаментами', layout: 'full'},
    {src: image7, alt: 'Два фарфоровых снегиря', layout: 'right'},
    {src: image8, alt: 'Фарфоровый снегирь крупным планом', layout: 'full'},
    {src: image9, alt: 'Два снегиря с татуировками', layout: 'left'},
    {src: image10, alt: 'Четыре фарфоровые лягушки', layout: 'full'},
    {src: image11, alt: 'Фарфоровые лягушки с обратной стороны', layout: 'full'},
    {src: image12, alt: 'Фарфоровые голуби с орнаментами', layout: 'full'},
    {src: image13, alt: 'Два фарфоровых голубя', layout: 'left'},
    {src: image14, alt: 'Четыре фарфоровых голубя', layout: 'full'},
]

export function TattoedAnimalsPage() {
    const {t} = useTranslation(['tattooed_animals', 'common'])
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
