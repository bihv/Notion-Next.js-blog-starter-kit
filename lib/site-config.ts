import * as types from './types';

export interface SiteConfig {
  rootNotionPageId: string;
  rootNotionSpaceId?: string;

  name: string;
  domain: string;
  author: string;
  description?: string;
  language?: string;

  twitter?: string;
  github?: string;
  linkedin?: string;
  newsletter?: string;
  youtube?: string;
  zhihu?: string;

  defaultPageIcon?: string | null;
  defaultPageCover?: string | null;
  defaultPageCoverPosition?: number | null;

  isPreviewImageSupportEnabled?: boolean;
  isTweetEmbedSupportEnabled?: boolean;
  isRedisEnabled?: boolean;
  REDIS_HOST?: string;
  REDIS_PASSWORD?: string;
  isSearchEnabled?: boolean;

  includeNotionIdInUrls?: boolean;
  pageUrlOverrides?: types.PageUrlOverridesMap;
  pageUrlAdditions?: types.PageUrlOverridesMap;

  navigationStyle?: types.NavigationStyle;
  navigationLinks?: Array<NavigationLink>;

  // custom configs (2skydev)
  dateformat: string;
  hiddenPostProperties: string[];
  defaultTheme: 'light' | 'dark' | 'system';
  enableComment: boolean;
  contentPositionTextAlign: 'left' | 'right';
  disqusShortname?: string | null
}

export interface NavigationLink {
  title: string;
  pageId?: string;
  url?: string;
  menuPage?: boolean;
}

export const siteConfig = (config: SiteConfig): SiteConfig => {
  return config;
};
