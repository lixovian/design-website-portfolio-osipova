import { Outlet, useMatches } from 'react-router-dom'
import { Header, type PageHeaderProps } from './Header'
// import { Footer } from './Footer'

export type PageHandle = {
    header: PageHeaderProps
}

export function PageLayout() {
    const matches = useMatches()
    const activeHandle = matches.at(-1)?.handle as PageHandle | undefined

    return (
        <div>
            <div className="relative min-h-svh overflow-hidden px-16 pt-16 pb-8">
                {activeHandle?.header && <Header {...activeHandle.header} />}

                <main className="pt-12">
                    <Outlet />
                </main>
            </div>

            {/*<Footer />*/}
        </div>
    )
}
