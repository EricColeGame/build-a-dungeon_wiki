export interface NavigationItem {
  key: string;
  path: `/${string}`;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "mechanics", path: "/mechanics", isContentType: true },
  { key: "features", path: "/features", isContentType: true },
  { key: "platforms", path: "/platforms", isContentType: true },
  { key: "news", path: "/news", isContentType: true },
  { key: "community", path: "/community", isContentType: true },
  { key: "codes", path: "/codes", isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
