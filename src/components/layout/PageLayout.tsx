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
        <div className="relative min-h-svh overflow-hidden">
            <div className="container relative isolate mx-auto flex min-h-svh flex-col px-4 pb-6 pt-6 sm:px-8 sm:pt-8 lg:px-16 lg:pb-8 lg:pt-16">
                {activeHandle?.header && (
                    <Header
                        title={t(activeHandle.header.titleKey, {
                            ns: activeHandle.header.namespace,
                        })}
                        emoji={activeHandle.header.emoji}
                    />
                )}

                <main className="flex w-full flex-1 flex-col pt-8 md:pt-12">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
