export const pageNamespaces = [
    'main',
    'cv',
    'projects',
    'statement',
    'music',
    'collaborations',
    'contacts',
    'graffiti',
    'objects',
    'exhibitions',
    'installations',
    'theatre',
    'print',
    'burn',
] as const

export type PageNamespace = (typeof pageNamespaces)[number]
