import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { TextLeft } from '../components/text/TextLeft.tsx'

export function CvPage() {
    const { t } = useTranslation('cv')

    return (
        <TextLeft className="flex flex-col gap-8 font-light">
            <p>{t('intro')}</p>

            <p>{t('practice')}</p>

            <p>{t('subject')}</p>

            <p>{t('method')}</p>

            <p className="whitespace-pre-line">{t('education')}</p>

            <Link
                to="/"
                className="mt-4 transition-colors hover:text-accent"
            >
                {t('back')}
            </Link>
        </TextLeft>
    )
}
