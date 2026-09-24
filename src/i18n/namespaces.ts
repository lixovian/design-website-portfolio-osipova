export const pageNamespaces = [
    'main',
    'cv',
    'projects',
    'statement',
    'music',
    'collaborations',
    'contacts',
    'graffiti',
] as const

export type PageNamespace = (typeof pageNamespaces)[number]
