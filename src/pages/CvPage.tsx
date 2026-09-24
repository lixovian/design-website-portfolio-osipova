import { useTranslation } from 'react-i18next'
import { TextLeft } from '../components/text/TextLeft.tsx'
import {LinkButton} from "../components/buttons/LinkButton.tsx";

export function CvPage() {
    const {t} = useTranslation(['cv', 'common'])

    return (
        <TextLeft>
            <p>{t('intro')}</p>

            <p>{t('practice')}</p>

            <p>{t('subject')}</p>

            <p>{t('method')}</p>

            <p className="whitespace-pre-line">{t('education')}</p>

            <LinkButton
                to="/"
                label={t('common:buttons.back')}
            />
        </TextLeft>
    )
}
