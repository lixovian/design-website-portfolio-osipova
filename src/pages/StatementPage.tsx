import {BackButton} from "../components/buttons/BackButton.tsx";
import {useTranslation} from "react-i18next";
import {ConnectedLine} from "../components/text/ConnectedLine.tsx";

export function StatementPage() {
    const {t} = useTranslation(['statement', 'common']);

    return (
        <span className="flex flex-col flex-1">
            <div className="flex w-full max-w-xl flex-1 flex-col gap-8">
                <div className="flex flex-col gap-1">
                    <ConnectedLine
                        left={t('associations.incompleteness.left')}
                        right={t('associations.incompleteness.right')}
                    />
                    <ConnectedLine
                        left={t('associations.veiling.left')}
                        right={t('associations.veiling.right')}
                    />
                    <ConnectedLine
                        left={t('associations.urbanBarrier.left')}
                        right={t('associations.urbanBarrier.right')}
                    />
                    <ConnectedLine
                        left={t('associations.digitalCensorship.left')}
                        right={t('associations.digitalCensorship.right')}
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <ConnectedLine
                        left={t('associations.visibility.left')}
                        right={t('associations.visibility.right')}
                    />
                    <ConnectedLine
                        left={t('associations.structure.left')}
                        right={t('associations.structure.right')}
                    />
                    <ConnectedLine
                        left={t('associations.glitch.left')}
                        right={t('associations.glitch.right')}
                    />
                    <ConnectedLine
                        left={t('associations.pause.left')}
                        right={t('associations.pause.right')}
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <ConnectedLine
                        left={t('associations.art.left')}
                        right={t('associations.art.right')}
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <ConnectedLine
                        left={t('associations.implication.left')}
                        right={t('associations.implication.right')}
                    />
                </div>
            </div>

            <BackButton label={t('common:buttons.back')} className="mt-auto"/>
        </span>
    )
}
