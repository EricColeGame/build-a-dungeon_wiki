export const NAVIGATION_CONFIG = [] as const;

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => (item as { isContentType?: boolean }).isContentType).map((item) => (item as { path: string }).path.replace(/^\//, ""));
