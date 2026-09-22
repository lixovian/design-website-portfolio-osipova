import { createBrowserRouter } from 'react-router-dom'
import { PageLayout, type PageHandle } from '../components/layout/PageLayout.tsx'
import { MainPage } from '../pages/MainPage.tsx'

export const router = createBrowserRouter([
    {
        element: <PageLayout />,
        children: [
            {
                path: '/',
                element: <MainPage />,
                handle: {
                    header: {
                        title: 'NATALIA_OSIPOVA',
                        emoji: 'kiss',
                    },
                } satisfies PageHandle,
            },
        ],
    },
])
