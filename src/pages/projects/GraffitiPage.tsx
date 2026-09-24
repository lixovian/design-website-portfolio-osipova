import {useTranslation} from "react-i18next";
import {BackButton} from "../../components/buttons/BackButton.tsx";
import {TextLeft} from "../../components/text/TextLeft.tsx";
import {ImageGrid} from "../../components/images/ImageGrid.tsx";
import image_1 from "../../assets/images/projects/graffiti/1_grid.png";
import image_2 from "../../assets/images/projects/graffiti/2_grid.png";
import image_3 from "../../assets/images/projects/graffiti/3_grid.png";
import image_4 from "../../assets/images/projects/graffiti/4_grid.png";
import image_5 from "../../assets/images/projects/graffiti/5_grid.png";
import image_6 from "../../assets/images/projects/graffiti/6_grid.png";
import image_7 from "../../assets/images/projects/graffiti/7_grid.png";
import image_8 from "../../assets/images/projects/graffiti/8_grid.png";
import image_9 from "../../assets/images/projects/graffiti/9_grid.png";
import image_10 from "../../assets/images/projects/graffiti/10_grid.png";
import image_11 from "../../assets/images/projects/graffiti/11_grid.png";
import image_12 from "../../assets/images/projects/graffiti/12_grid.png";
import image_13 from "../../assets/images/projects/graffiti/13_grid.png";
import image_14 from "../../assets/images/projects/graffiti/14_grid.png";
import image_15 from "../../assets/images/projects/graffiti/15_grid.png";
import image_16 from "../../assets/images/projects/graffiti/16_grid.png";
import image_17 from "../../assets/images/projects/graffiti/17_grid.png";
import image_18 from "../../assets/images/projects/graffiti/18_grid.png";
import image_19 from "../../assets/images/projects/graffiti/19_grid.png";
import image_20 from "../../assets/images/projects/graffiti/20_grid.png";
import image_21 from "../../assets/images/projects/graffiti/21_grid.png";
import image_22 from "../../assets/images/projects/graffiti/22_grid.png";
import image_23 from "../../assets/images/projects/graffiti/23_grid.png";
import image_24 from "../../assets/images/projects/graffiti/24_grid.png";
import image_25 from "../../assets/images/projects/graffiti/25_grid.png";
import image_26 from "../../assets/images/projects/graffiti/26_grid.png";

const images = [
    image_1,
    image_2,
    image_3,
    image_4,
    image_5,
    image_6,
    image_7,
    image_8,
    image_9,
    image_10,
    image_11,
    image_12,
    image_13,
    image_14,
    image_15,
    image_16,
    image_17,
    image_18,
    image_19,
    image_20,
    image_21,
    image_22,
    image_23,
    image_24,
    image_25,
    image_26,
];

export function GraffitiPage() {
    const {t} = useTranslation(['graffiti', 'common'])

    return (
        <span className="flex flex-1 flex-col gap-16">
            <TextLeft>
                <p>{t('text.paragraph_1')}</p>
                <p>{t('text.paragraph_2')}</p>
                <p>{t('text.paragraph_3')}</p>
            </TextLeft>

            <ImageGrid images={images}/>

            <BackButton
                className="mt-auto"
                label={t('common:buttons.back')}
            />
        </span>
    )
}
