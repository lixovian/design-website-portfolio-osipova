import {useTranslation} from "react-i18next";
import {BackButton} from "../../components/buttons/BackButton.tsx";
import type {LinkImageItem} from "../../components/buttons/LinkImage.tsx";
import {LinkImageGrid} from "../../components/buttons/LinkImageGrid.tsx";
import {TextLeft} from "../../components/text/TextLeft.tsx";
import coverIndigestionOfReality from "../../assets/images/projects/theatre/cover_indigestion_of_reality.webp";
import coverFish from "../../assets/images/projects/theatre/cover_fish.webp";

export function TheatrePage() {
    const {t} = useTranslation(['theatre', 'common']);
    const performances: LinkImageItem[] = [
        {
            label: t('covers.indigestion_of_reality'),
            src: coverIndigestionOfReality,
            to: 'indigestion_of_reality',
            width: 614,
            height: 890,
        },
        {label: t('covers.fish'), src: coverFish, to: 'fish', width: 614, height: 890},
    ];

    return (
        <span className="flex flex-1 flex-col gap-8 sm:gap-16">
            <TextLeft>
                <p>{t('text.paragraph_1')}</p>
            </TextLeft>

            <LinkImageGrid items={performances} align="start"/>

            <BackButton
                className="mt-auto"
                label={t('common:buttons.back')}
            />
        </span>
    )
}
