export const pageNamespaces = [
    'main',
    'cv',
    'projects',
    'statement',
    'music',
    'collaborations',
    'contacts',
] as const

export type PageNamespace = (typeof pageNamespaces)[number]
