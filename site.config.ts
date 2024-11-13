import { siteConfig } from './lib/site-config';

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '55a46a4885ec4a7cac1685af269959c9',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Stackdev',
  domain: 'stackdev.top',
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
  defaultPageIcon: '/default-avatar.webp',
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
