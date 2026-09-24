import { Outlet, useMatches } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Header } from './Header'
import type { EmojiId } from '../../scripts/emojiHandler.ts'
import type { PageNamespace } from '../../i18n/namespaces.ts'
// import { Footer } from './Footer'

export type PageHandle = {
    header: {
        namespace: PageNamespace
        titleKey: string
        emoji: EmojiId
    }
}

export function PageLayout() {
    const matches = useMatches()
    const activeHandle = matches.at(-1)?.handle as PageHandle | undefined
    const { t } = useTranslation()

    return (
        <div>
            <div className="flex flex-col relative min-h-svh overflow-hidden px-16 pt-16 pb-8">
                {activeHandle?.header && (
                    <Header
                        title={t(activeHandle.header.titleKey, {
                            ns: activeHandle.header.namespace,
                        })}
                        emoji={activeHandle.header.emoji}
                    />
                )}

                <main className="pt-12 flex w-full flex-1 flex-col">
                    <Outlet />
                </main>
            </div>

            {/*<Footer />*/}
        </div>
    )
}
