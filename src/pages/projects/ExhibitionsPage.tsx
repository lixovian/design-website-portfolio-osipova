import {useTranslation} from "react-i18next";
import {BackButton} from "../../components/buttons/BackButton.tsx";
import type {LinkImageItem} from "../../components/buttons/LinkImage.tsx";
import {LinkImageGrid} from "../../components/buttons/LinkImageGrid.tsx";
import {TextLeft} from "../../components/text/TextLeft.tsx";
import coverWindows from "../../assets/images/projects/exhibitions/cover_windows_com.webp";
import coverTruckBoy from "../../assets/images/projects/exhibitions/cover_truck_boy.webp";
import coverBordersTerritories from "../../assets/images/projects/exhibitions/cover_borders_territories.webp";
import coverSignals from "../../assets/images/projects/exhibitions/cover_signals.webp";

export function ExhibitionsPage() {
    const {t} = useTranslation(['exhibitions', 'common']);
    const exhibitions: LinkImageItem[] = [
        {label: t('covers.windows_com'), src: coverWindows, to: 'windows_com', width: 614, height: 890},
        {label: t('covers.truck_boy'), src: coverTruckBoy, to: 'truck_boy', width: 614, height: 890},
        {label: t('covers.borders_territories'), src: coverBordersTerritories, to: 'borders_territories', width: 614, height: 890},
        {label: t('covers.signals'), src: coverSignals, to: 'signals', width: 614, height: 896},
    ];

    return (
        <span className="flex flex-1 flex-col gap-8 sm:gap-16">
            <TextLeft>
                <p>{t('text.paragraph_1')}</p>
            </TextLeft>

            <LinkImageGrid items={exhibitions}/>

            <BackButton
                className="mt-auto"
                label={t('common:buttons.back')}
            />
        </span>
    )
}
