import { Outlet, useMatches } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Header } from './Header'
import type { EmojiId } from '../../scripts/emojiHandler.ts'
import type { PageNamespace } from '../../i18n/namespaces.ts'
import { useDocumentTitle } from '../../hooks/useDocumentTitle.ts'
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
    const pageTitle = activeHandle?.header
        ? t(activeHandle.header.titleKey, {ns: activeHandle.header.namespace})
        : undefined

    useDocumentTitle(pageTitle)

    return (
        <div className="relative min-h-svh overflow-hidden">
            <div className="relative isolate flex min-h-svh w-full flex-col px-4 pb-4 pt-4 sm:px-16 sm:pb-8 sm:pt-16">
                {activeHandle?.header && (
                    <Header
                        title={pageTitle ?? ''}
                        emoji={activeHandle.header.emoji}
                    />
                )}

                <main className="flex w-full flex-1 flex-col pt-4 sm:pt-8 md:pt-12">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
