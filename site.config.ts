import { ExtendedRecordMap } from 'notion-types';

// Define the site config interface and function locally
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
  pageUrlOverrides?: Record<string, string>;
  pageUrlAdditions?: Record<string, string>;

  navigationStyle?: 'default' | 'custom';
  navigationLinks?: Array<{
    title: string;
    pageId?: string;
    url?: string;
    menuPage?: boolean;
  }>;

  // custom configs (2skydev)
  dateformat: string;
  hiddenPostProperties: string[];
  defaultTheme: 'light' | 'dark' | 'system';
  enableComment: boolean;
  contentPositionTextAlign: 'left' | 'right';
  disqusShortname?: string | null;
}

const siteConfig = (config: SiteConfig): SiteConfig => {
  return config;
};

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '55a46a4885ec4a7cac1685af269959c9',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Paste',
  domain: 'paste.io.vn',
  author: 'Admin',

  // open graph metadata (optional)
  description:
    'Optimizing code efficiency: Essential tips for software engineers to enhance performance and productivity.',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  github: 'bihv',
  // linkedin: 'fisch2',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon:
    'https://img.notionusercontent.com/ext/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fpublic.notion-static.com%2Ff7e1657e-0471-4989-8e55-acd02563d1f6%2Fdefault-avatar.webp/size/w=240?exp=1731662941&sig=xzQmIjoqa8OsWCm_9hZ3unju2ykPqMqYwSB03secNi0',
  defaultPageCover: '/page-cover.jpg',
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: 'd64b9f0dec354a18996ff303ef805894',
    },
    {
      title: 'Contact',
      pageId: 'b6261f21028149599642dba77cf9d7b0',
    },
  ],

  // -------- custom configs (2skydev) -------------

  // date-fns format string
  dateformat: 'MMMM dd, yyyy',

  // post page - hidden properties
  hiddenPostProperties: ['설명', '상태', '최하위 정렬'],

  // contentPosition (table of contents) text align
  contentPositionTextAlign: 'left',

  // default theme color
  defaultTheme: 'system',

  // enable comment
  enableComment: true,

  // To enable Disqsus Comments, include your Disqus Shortname here
  disqusShortname: 'stackdev-1',
});
