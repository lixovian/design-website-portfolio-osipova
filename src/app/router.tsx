import { createBrowserRouter } from 'react-router-dom'
import { PageLayout, type PageHandle } from '../components/layout/PageLayout.tsx'
import { MainPage } from '../pages/MainPage.tsx'
import { CvPage } from '../pages/CvPage.tsx'
import { ProjectsPage } from '../pages/ProjectsPage.tsx'
import { StatementPage } from '../pages/StatementPage.tsx'
import { MusicPage } from '../pages/MusicPage.tsx'
import { CollaborationsPage } from '../pages/CollaborationsPage.tsx'
import { ContactsPage } from '../pages/ContactsPage.tsx'
import {GraffitiPage} from "../pages/projects/GraffitiPage.tsx";

export const router = createBrowserRouter([
    {
        element: <PageLayout />,
        children: [
            {
                path: '/',
                element: <MainPage />,
                handle: {
                    header: {
                        namespace: 'main',
                        titleKey: 'header.title',
                        emoji: 'kiss',
                    },
                } satisfies PageHandle,
            },
            {
                path: '/cv',
                element: <CvPage />,
                handle: {
                    header: {
                        namespace: 'cv',
                        titleKey: 'header.title',
                        emoji: 'laugh',
                    },
                } satisfies PageHandle,
            },
            {
                path: '/projects',
                element: <ProjectsPage />,
                handle: {
                    header: {
                        namespace: 'projects',
                        titleKey: 'header.title',
                        emoji: 'flying',
                    },
                } satisfies PageHandle,
            },
            {
                path: '/statement',
                element: <StatementPage />,
                handle: {
                    header: {
                        namespace: 'statement',
                        titleKey: 'header.title',
                        emoji: 'heart_away_opened_eyes',
                    },
                } satisfies PageHandle,
            },
            {
                path: '/music',
                element: <MusicPage />,
                handle: {
                    header: {
                        namespace: 'music',
                        titleKey: 'header.title',
                        emoji: 'boom',
                    },
                } satisfies PageHandle,
            },
            {
                path: '/collaborations',
                element: <CollaborationsPage />,
                handle: {
                    header: {
                        namespace: 'collaborations',
                        titleKey: 'header.title',
                        emoji: 'heart_away_closed_eyes',
                    },
                } satisfies PageHandle,
            },
            {
                path: '/contacts',
                element: <ContactsPage />,
                handle: {
                    header: {
                        namespace: 'contacts',
                        titleKey: 'header.title',
                        emoji: 'kiss',
                    },
                } satisfies PageHandle,
            },
            {
                path: '/projects/graffiti',
                element: <GraffitiPage />,
                handle: {
                    header: {
                        namespace: 'graffiti',
                        titleKey: 'header.title',
                        emoji: 'flying',
                    },
                } satisfies PageHandle,
            },
        ],
    },
])
