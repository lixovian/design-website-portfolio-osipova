import {useTranslation} from "react-i18next";
import {BackButton} from "../../../components/buttons/BackButton.tsx";
import {ImageFull} from "../../../components/images/ImageFull.tsx";
import {TextColumns, type TextColumnItem} from "../../../components/text/TextColumns.tsx";
import {TextLeft} from "../../../components/text/TextLeft.tsx";
import image1 from "../../../assets/images/projects/exhibitions/windows_com/1_full.png";
import image2 from "../../../assets/images/projects/exhibitions/windows_com/2_full.png";
import image3 from "../../../assets/images/projects/exhibitions/windows_com/3_full.png";
import image4 from "../../../assets/images/projects/exhibitions/windows_com/4_full.png";
import image5 from "../../../assets/images/projects/exhibitions/windows_com/5_full.png";
import image6Left from "../../../assets/images/projects/exhibitions/windows_com/6_left.png";
import image6Right from "../../../assets/images/projects/exhibitions/windows_com/6_right.png";
import image7 from "../../../assets/images/projects/exhibitions/windows_com/7_full.png";
import image8 from "../../../assets/images/projects/exhibitions/windows_com/8_full.png";
import image9 from "../../../assets/images/projects/exhibitions/windows_com/9_full.png";
import image10 from "../../../assets/images/projects/exhibitions/windows_com/10_full.png";
import image11 from "../../../assets/images/projects/exhibitions/windows_com/11_full.png";
import image12 from "../../../assets/images/projects/exhibitions/windows_com/12_full.png";
import image13 from "../../../assets/images/projects/exhibitions/windows_com/13_full.png";
import image14 from "../../../assets/images/projects/exhibitions/windows_com/14_left.png";
import image15 from "../../../assets/images/projects/exhibitions/windows_com/15_right.png";
import image16 from "../../../assets/images/projects/exhibitions/windows_com/16_full.png";
import image17 from "../../../assets/images/projects/exhibitions/windows_com/17_full.png";
import {TextLink} from "../../../components/text/TextLink.tsx";

export function WindowsComPage() {
    const {t} = useTranslation(['windows_com', 'common'])
    const textColumns: readonly TextColumnItem[] = [
        {
            title: t('about.title'),
            paragraphs: [t('about.paragraph_1')],
        },
        {
            title: t('credits.title'),
            variant: 'credits',
            paragraphs: [
                t('credits.platform'),
                t('credits.engine'),
                t('credits.language'),
                t('credits.design'),
                t('credits.development'),
                <TextLink href="https://portfolioosipovanatalya.tilda.ws/" label={t('credits.site')}/>,
            ],
        },
    ]

    return (
        <span className="flex flex-1 flex-col gap-8 sm:gap-16">
            <TextColumns items={textColumns}/>

            <div className="flex flex-col gap-4 sm:gap-8 md:gap-12">
                <ImageFull src={image1} alt="Виртуальный лабиринт с оконными решётками"/>
                <ImageFull src={image2} alt="Окно в пространстве виртуального лабиринта"/>

                <div className="grid grid-cols-1 gap-4 sm:gap-8 md:grid-cols-2 md:gap-16">
                    <TextLeft className="flex flex-col gap-2 font-light sm:gap-4 md:w-full">
                        <p>{t('about.paragraph_2')}</p>
                    </TextLeft>
                    <TextLeft className="flex flex-col gap-2 font-light sm:gap-4 md:w-full">
                        <p>{t('about.paragraph_3')}</p>
                        <p>{t('about.paragraph_4')}</p>
                    </TextLeft>
                </div>

                <ImageFull src={image3} alt="Решётка со знаком восклицания"/>
                <TextLeft>
                    <strong className="font-bold">{t('signs.exclamation.title')}</strong>
                    <p>{t('signs.exclamation.text')}</p>
                </TextLeft>
                <ImageFull src={image4} alt="Решётка со знаком восклицания сбоку"/>
                <ImageFull src={image5} alt="Коридор виртуального лабиринта"/>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <ImageFull src={image6Left} alt="Глухой проход лабиринта"/>
                    <ImageFull src={image6Right} alt="Свет от оконной решётки"/>
                </div>

                <ImageFull src={image7} alt="Комната с несколькими оконными решётками"/>
                <ImageFull src={image8} alt="Стены и окно виртуального лабиринта"/>
                <ImageFull src={image9} alt="Решётка со знаком вопроса"/>
                <TextLeft>
                    <strong className="font-bold">{t('signs.question.title')}</strong>
                    <p>{t('signs.question.text')}</p>
                </TextLeft>
                <ImageFull src={image10} alt="Знак вопроса на оконной решётке крупным планом"/>
                <TextLeft>
                    <p>{t('about.paragraph_5')}</p>
                </TextLeft>
                <ImageFull src={image11} alt="Окно с пиктограммой меча сбоку"/>
                <ImageFull src={image12} alt="Решётка с пиктограммой меча"/>
                <TextLeft>
                    <strong className="font-bold">{t('signs.sword.title')}</strong>
                    <p>{t('signs.sword.text')}</p>
                </TextLeft>
                <ImageFull src={image13} alt="Тень решётки с мечом"/>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <ImageFull src={image14} alt="Тень пиктограммы меча"/>
                    <ImageFull src={image15} alt="Пиксельный меч крупным планом"/>
                </div>

                <ImageFull src={image16} alt="Решётка с пиктограммой информации"/>
                <TextLeft>
                    <strong className="font-bold">{t('signs.information.title')}</strong>
                    <p>{t('signs.information.text')}</p>
                </TextLeft>
                <ImageFull src={image17} alt="Пиктограмма информации в оконной решётке"/>
            </div>

            <BackButton className="mt-auto" label={t('common:buttons.back')}/>
        </span>
    )
}
