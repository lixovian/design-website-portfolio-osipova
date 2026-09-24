import {useTranslation} from "react-i18next";
import {LinkButton} from "../../components/buttons/LinkButton.tsx";
import type {LinkImageItem} from "../../components/buttons/LinkImage.tsx";
import {LinkImageGrid} from "../../components/buttons/LinkImageGrid.tsx";
import {TextLeft} from "../../components/text/TextLeft.tsx";
import coverWindows from "../../assets/images/projects/exhibitions/cover_windows_com.png";
import coverTruckBoy from "../../assets/images/projects/exhibitions/cover_truck_boy.png";
import coverBordersTerritories from "../../assets/images/projects/exhibitions/cover_borders_territories.png";
import coverSignals from "../../assets/images/projects/exhibitions/cover_signals.png";

export function ExhibitionsPage() {
    const {t} = useTranslation(['exhibitions', 'common']);
    const exhibitions: LinkImageItem[] = [
        {label: t('covers.windows_com'), src: coverWindows, to: 'windows_com'},
        {label: t('covers.truck_boy'), src: coverTruckBoy, to: 'truck_boy'},
        {label: t('covers.borders_territories'), src: coverBordersTerritories, to: 'borders_territories'},
        {label: t('covers.signals'), src: coverSignals, to: 'signals'},
    ];

    return (
        <span className="flex flex-1 flex-col gap-16">
            <TextLeft>
                <p>{t('text.paragraph_1')}</p>
            </TextLeft>

            <LinkImageGrid items={exhibitions}/>

            <LinkButton
                to="/"
                className="mt-auto"
                label={t('common:buttons.back')}
            />
        </span>
    )
}
