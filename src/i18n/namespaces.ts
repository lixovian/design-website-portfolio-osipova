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
] as const

export type PageNamespace = (typeof pageNamespaces)[number]
