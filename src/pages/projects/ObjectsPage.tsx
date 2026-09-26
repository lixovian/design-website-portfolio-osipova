import {BackButton} from "../../components/buttons/BackButton.tsx";
import {useTranslation} from "react-i18next";
import {TextLeft} from "../../components/text/TextLeft.tsx";
import type {LinkImageItem} from "../../components/buttons/LinkImage.tsx";
import {LinkImageGrid} from "../../components/buttons/LinkImageGrid.tsx";
import coverWindows from "../../assets/images/projects/objects/cover_windows_com.png";
import coverUndisclosed from "../../assets/images/projects/objects/cover_undisclosed.png";
import coverTattoedAnimals from "../../assets/images/projects/objects/cover_tattoed_animals.png";
import coverBurn from "../../assets/images/projects/objects/cover_burn.png";
import coverDichoPb from "../../assets/images/projects/objects/cover_dicho_pb.png";
import coverNewAngels from "../../assets/images/projects/objects/cover_new_angels.png";

export function ObjectsPage() {
    const {t} = useTranslation(['objects', 'common']);
    const objects: LinkImageItem[] = [
        {label: t('covers.windows_com'), src: coverWindows, to: 'windows'},
        {label: t('covers.undisclosed'), src: coverUndisclosed, to: 'undisclosed'},
        {label: t('covers.tattoed_animals'), src: coverTattoedAnimals, to: 'tattoed_animals'},
        {label: t('covers.burn'), src: coverBurn, to: 'burn'},
        {label: t('covers.dicho_pb'), src: coverDichoPb, to: 'dicho_pb'},
        {label: t('covers.new_angels'), src: coverNewAngels, to: 'new_angels'},
    ];

    return (
        <span className="flex flex-1 flex-col gap-8 sm:gap-16">
            <TextLeft>
                <p>{t('text.paragraph_1')}</p>
            </TextLeft>

            <LinkImageGrid items={objects}/>

            <BackButton
                className="mt-auto"
                label={t('common:buttons.back')}
            />
        </span>
    )
}
