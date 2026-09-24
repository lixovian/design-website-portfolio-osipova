import {useTranslation} from "react-i18next";
import {BackButton} from "../../../components/buttons/BackButton.tsx";
import {ImageFull} from "../../../components/images/ImageFull.tsx";
import {TextColumns, type TextColumnItem} from "../../../components/text/TextColumns.tsx";
import {TextLeft} from "../../../components/text/TextLeft.tsx";
import image1 from "../../../assets/images/projects/theatre/indigestion_of_reality/1_full.png";
import image2 from "../../../assets/images/projects/theatre/indigestion_of_reality/2_full.png";
import image3 from "../../../assets/images/projects/theatre/indigestion_of_reality/3_full.png";
import image4 from "../../../assets/images/projects/theatre/indigestion_of_reality/4_full.png";
import image5 from "../../../assets/images/projects/theatre/indigestion_of_reality/5_full.png";
import image6 from "../../../assets/images/projects/theatre/indigestion_of_reality/6_full.png";

const topics = [
    {
        translationKey: 'implicit_attitudes',
        firstImage: image1,
        firstImageAlt: 'Две женщины в платках во дворе дома',
        secondImage: image2,
        secondImageAlt: 'Участники перформанса за праздничным столом',
    },
    {
        translationKey: 'body_biopolitics',
        firstImage: image3,
        firstImageAlt: 'Человек в ярком халате на лестничной площадке',
        secondImage: image4,
        secondImageAlt: 'Продукты и медицинские приборы на столе',
    },
    {
        translationKey: 'communication_dysfunction',
        firstImage: image5,
        firstImageAlt: 'Перформеры в масках рыбы и петуха в лифте',
        secondImage: image6,
        secondImageAlt: 'Тёмная комната с открытой дверью',
    },
] as const

export function IndigestionOfRealityPage() {
    const {t} = useTranslation(['indigestion_of_reality', 'common'])
    const textColumns: readonly TextColumnItem[] = [
        {
            title: t('about.title'),
            paragraphs: [
                t('about.paragraph_1'),
                t('about.paragraph_2'),
                t('about.paragraph_3'),
            ],
        },
        {
            title: t('credits.title'),
            paragraphs: [
                t('credits.medium'),
                t('credits.year'),
                <span key="team" className="whitespace-pre-line">
                    {t('credits.team')}
                </span>,
                <a key="video" className="underline" href="https://kinescope.io/siU5ksmXAEZkzjQLn5dHW8">
                    {t('credits.video')}
                </a>,
            ],
        },
    ]

    return (
        <span className="flex flex-1 flex-col gap-16">
            <TextColumns items={textColumns}/>

            {topics.map((topic) => (
                <section className="flex flex-col gap-8 md:gap-12" key={topic.translationKey}>
                    <h2 className="font-normal">
                        {t(`topics.${topic.translationKey}.title`)}
                    </h2>
                    <ImageFull src={topic.firstImage} alt={topic.firstImageAlt}/>
                    <TextLeft>
                        <p>{t(`topics.${topic.translationKey}.text`)}</p>
                    </TextLeft>
                    <ImageFull src={topic.secondImage} alt={topic.secondImageAlt}/>
                </section>
            ))}

            <BackButton
                className="mt-auto"
                label={t('common:buttons.back')}
            />
        </span>
    )
}
