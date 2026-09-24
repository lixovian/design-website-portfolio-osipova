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
import {ObjectsPage} from "../pages/projects/ObjectsPage.tsx";
import {ExhibitionsPage} from "../pages/projects/ExhibitionsPage.tsx";
import {InstallationsPage} from "../pages/projects/InstallationsPage.tsx";
import {TheatrePage} from "../pages/projects/TheatrePage.tsx";
import {PrintPage} from "../pages/projects/PrintPage.tsx";
import {BurnPage} from "../pages/projects/objects/BurnPage.tsx";
import {AtMyHomePage} from "../pages/projects/print/AtMyHomePage.tsx";
import {FishPage} from "../pages/projects/theatre/FishPage.tsx";
import {IndigestionOfRealityPage} from "../pages/projects/theatre/IndigestionOfRealityPage.tsx";
import {NewAngelsPage} from "../pages/projects/objects/NewAngelsPage.tsx";
import {UndisclosedPage} from "../pages/projects/objects/UndisclosedPage.tsx";
import {WindowsPage} from "../pages/projects/objects/WindowsPage.tsx";
import {TattoedAnimalsPage} from "../pages/projects/objects/TattoedAnimalsPage.tsx";
import {DichoPbPage} from "../pages/projects/objects/DichoPbPage.tsx";
import {SensitiveContentPage} from "../pages/projects/installations/SensitiveContentPage.tsx";
import {L63Page} from "../pages/projects/installations/L63Page.tsx";
import {WindowsComPage} from "../pages/projects/exhibitions/WindowsComPage.tsx";
import {SignalsPage} from "../pages/projects/exhibitions/SignalsPage.tsx";
import {BordersTerritoriesPage} from "../pages/projects/exhibitions/BordersTerritoriesPage.tsx";
import {TruckBoyPage} from "../pages/projects/exhibitions/TruckBoyPage.tsx";

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
            {
                path: '/projects/objects',
                element: <ObjectsPage />,
                handle: {
                    header: {
                        namespace: 'objects',
                        titleKey: 'header.title',
                        emoji: 'flying',
                    },
                } satisfies PageHandle,
            },
            {
                path: '/projects/objects/burn',
                element: <BurnPage />,
                handle: {
                    header: {
                        namespace: 'burn',
                        titleKey: 'header.title',
                        emoji: 'flying',
                    },
                } satisfies PageHandle,
            },
            {
                path: '/projects/objects/new_angels',
                element: <NewAngelsPage />,
                handle: {
                    header: {
                        namespace: 'new_angels',
                        titleKey: 'header.title',
                        emoji: 'flying',
                    },
                } satisfies PageHandle,
            },
            {
                path: '/projects/objects/undisclosed',
                element: <UndisclosedPage />,
                handle: {
                    header: {
                        namespace: 'undisclosed',
                        titleKey: 'header.title',
                        emoji: 'flying',
                    },
                } satisfies PageHandle,
            },
            {
                path: '/projects/objects/windows',
                element: <WindowsPage />,
                handle: {
                    header: {
                        namespace: 'windows',
                        titleKey: 'header.title',
                        emoji: 'flying',
                    },
                } satisfies PageHandle,
            },
            {
                path: '/projects/objects/tattoed_animals',
                element: <TattoedAnimalsPage />,
                handle: {
                    header: {
                        namespace: 'tattooed_animals',
                        titleKey: 'header.title',
                        emoji: 'flying',
                    },
                } satisfies PageHandle,
            },
            {
                path: '/projects/objects/dicho_pb',
                element: <DichoPbPage />,
                handle: {
                    header: {
                        namespace: 'dicho_pb',
                        titleKey: 'header.title',
                        emoji: 'flying',
                    },
                } satisfies PageHandle,
            },
            {
                path: '/projects/print/at_my_home',
                element: <AtMyHomePage />,
                handle: {
                    header: {
                        namespace: 'at_my_home',
                        titleKey: 'header.title',
                        emoji: 'flying',
                    },
                } satisfies PageHandle,
            },
            {
                path: '/projects/theatre/fish',
                element: <FishPage />,
                handle: {
                    header: {
                        namespace: 'fish',
                        titleKey: 'header.title',
                        emoji: 'flying',
                    },
                } satisfies PageHandle,
            },
            {
                path: '/projects/theatre/indigestion_of_reality',
                element: <IndigestionOfRealityPage />,
                handle: {
                    header: {
                        namespace: 'indigestion_of_reality',
                        titleKey: 'header.title',
                        emoji: 'flying',
                    },
                } satisfies PageHandle,
            },
            {
                path: '/projects/exhibitions',
                element: <ExhibitionsPage />,
                handle: {
                    header: {
                        namespace: 'exhibitions',
                        titleKey: 'header.title',
                        emoji: 'flying',
                    },
                } satisfies PageHandle,
            },
            {
                path: '/projects/exhibitions/windows_com',
                element: <WindowsComPage />,
                handle: {
                    header: {
                        namespace: 'windows_com',
                        titleKey: 'header.title',
                        emoji: 'flying',
                    },
                } satisfies PageHandle,
            },
            {
                path: '/projects/exhibitions/signals',
                element: <SignalsPage />,
                handle: {
                    header: {
                        namespace: 'signals',
                        titleKey: 'header.title',
                        emoji: 'flying',
                    },
                } satisfies PageHandle,
            },
            {
                path: '/projects/exhibitions/borders_territories',
                element: <BordersTerritoriesPage />,
                handle: {
                    header: {
                        namespace: 'borders_territories',
                        titleKey: 'header.title',
                        emoji: 'flying',
                    },
                } satisfies PageHandle,
            },
            {
                path: '/projects/exhibitions/truck_boy',
                element: <TruckBoyPage />,
                handle: {
                    header: {
                        namespace: 'truck_boy',
                        titleKey: 'header.title',
                        emoji: 'flying',
                    },
                } satisfies PageHandle,
            },
            {
                path: '/projects/installations',
                element: <InstallationsPage />,
                handle: {
                    header: {
                        namespace: 'installations',
                        titleKey: 'header.title',
                        emoji: 'flying',
                    },
                } satisfies PageHandle,
            },
            {
                path: '/projects/installations/sensitive_content',
                element: <SensitiveContentPage />,
                handle: {
                    header: {
                        namespace: 'sensitive_content',
                        titleKey: 'header.title',
                        emoji: 'flying',
                    },
                } satisfies PageHandle,
            },
            {
                path: '/projects/installations/l_63',
                element: <L63Page />,
                handle: {
                    header: {
                        namespace: 'l_63',
                        titleKey: 'header.title',
                        emoji: 'flying',
                    },
                } satisfies PageHandle,
            },
            {
                path: '/projects/theatre',
                element: <TheatrePage />,
                handle: {
                    header: {
                        namespace: 'theatre',
                        titleKey: 'header.title',
                        emoji: 'flying',
                    },
                } satisfies PageHandle,
            },
            {
                path: '/projects/print',
                element: <PrintPage />,
                handle: {
                    header: {
                        namespace: 'print',
                        titleKey: 'header.title',
                        emoji: 'flying',
                    },
                } satisfies PageHandle,
            },
        ],
    },
])
