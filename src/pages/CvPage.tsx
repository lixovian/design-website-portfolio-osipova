import { useTranslation } from 'react-i18next'
import { TextLeft } from '../components/text/TextLeft.tsx'
import {BackButton} from "../components/buttons/BackButton.tsx";

export function CvPage() {
    const {t} = useTranslation(['cv', 'common'])

    return (
        <TextLeft>
            <p>{t('intro')}</p>

            <p>{t('practice')}</p>

            <p>{t('subject')}</p>

            <p>{t('method')}</p>

            <p className="whitespace-pre-line">{t('education')}</p>

            <BackButton
                label={t('common:buttons.back')}
            />
        </TextLeft>
    )
}
