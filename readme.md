# Notion + Next.js blog starter kit

This repository is a startup kit that allows you to create a blog using `notion` and `next.js`.<br/>

<br />

## 🔗 Preview and Link

The photos below are resources taken from my blog. [StackDev](https://stackdev.top)

## 🤔 How did you create Next.js + Notion?

When you write a post in Notion, a static page is automatically created using next.js' ISR method.

### Open sources used

Based on `transitive-bullshit/nextjs-notion-starter-kit` and `2skydev/Notion-Next.js-blog-starter-kit`, I customized it and decorated it as I wanted.<br/>
There were many functions supported by default, but there were many parts that were left to be desired, so I customized them myself.

[GitHub - transitive-bullshit/nextjs-notion-starter-kit](https://github.com/transitive-bullshit/nextjs-notion-starter-kit)
[Github - 2skydev/Notion-Next.js-blog-starter-kit](https://github.com/2skydev/Notion-Next.js-blog-starter-kit)

### Omniscient Notion point of view

Since a blog is created based on the contents of Notion, are you curious about how Notion is actually structured?<br/>
You can check the Notion structure of this blog through the link below!

**Currently running blog Notion page (template duplication allowed)**

[2skydev blog Notion link](https://www.notion.so/2skydev-blog-d1e89e9e42eb4ebf9486ae0374039efc)

<br/>

## 🔎 I want to know more about how it works

The basic operation is to create a page using the `ISR` method of next.js.

Even after deployment (build), if you create or modify a page in Notion, it will be automatically reflected.

### Notion API?

The API for retrieving Notion information was not the official API, but the API requested from the actual Notion page.

Oh, of course, the comment function uses the Notion official API :)

### What happens if I create a new page in Notion after deployment (build)?

1. When accessing a newly created page, since no static page has been created, `router.isFallback` is activated and the loading effect is displayed.
2. In the `getStaticProps` function, retrieve all pages based on the Notion root page id.
3. Operation 2 creates a Notion site map object and checks whether the accessed address is in the site map (if not, 404 is processed)
4. If it is in the sitemap, page information is retrieved based on the Notion page ID that matches the address.
5. If the page information has been loaded, `router.isFallback` becomes false, the loading effect disappears, and a new static page is displayed.

### What happens if I modify the page in Notion after deployment (build)?

1. When accessing a modified page, the `getStaticProps` function returns `revalidate: 10`, and if 10 seconds have passed based on the last user accessing the page, the `getStaticProps` function is executed in the background (connected users will see the previous version of the page) )
2. In the `getStaticProps` function, retrieve all pages based on the Notion root page id.
3. Operation 2 creates a Notion site map object and checks whether the accessed address is in the site map (if not, 404 is processed)
4. If it is in the sitemap, page information is retrieved based on the Notion page ID that matches the address (latest version information)
5. If the page information is loaded, a static page is created, and users who have already connected will see the previous version of the page, but users who have connected later (including the refresh action of users who have already connected) will see the latest version of the created static page. displayed

<br/>

## 🚀 I want to use this configuration too

After cloning the repo, [`Issue Notion API key`](https://github.com/2skydev/Notion-Next.js-blog-starter-kit/wiki/Notion-API-%ED%82%A4-%EB% B0%9C%EA%B8%89-&-%ED%99%98%EA%B2%BD-%EB%B3%80%EC%88%98-%EC%84%A4%EC%A0%95 ) and [`site.config.ts`](https://github.com/2skydev/Notion-Next.js-blog-starter-kit/wiki/site.config.ts) to use it immediately. <br/>
Please follow the steps below :)

### 1. Get a customized blog template

After downloading the repo using `Fork` or `Use this template`, you can use it without problem by following all the steps below.

[GitHub - 2skydev/blog](https://github.com/2skydev/blog)

### 2. Basic usage

The customized blog template is based on the open source below, so please check how to use it in the GitHub README.md.

[GitHub - transitive-bullshit/nextjs-notion-starter-kit - setup](https://github.com/transitive-bullshit/nextjs-notion-starter-kit#setup)

### 3. Matching Notion database view format

In order for the post list to appear according to the design, the database view form must have the same form and attribute order as mine.<br/>
If possible, please make the order of the form and properties match as shown in the link below.

[Notion - blog template](https://2skydev.notion.site/2skydev-blog-d1e89e9e42eb4ebf9486ae0374039efc)

> ❗️ There is a strange loading phenomenon when using Notion’s ‘duplicate’ function.<br/>
> Notion pages used as blogs must be created directly, not ‘duplicated’ pages.

### 4. Replacement and removal of default files

The code you downloaded is already the blog source I am using, so there are unnecessary files and image files that need to be replaced.
The items are as follows.

1. Remove naver-site-verification file: `/public/naverXXXXXXXXXXX.html`
2. Change profile picture: `public/favicon-128x128.png`, `public/favicon-192x192.png`, `public/favicon.ico`, `public/favicon.png`
3. Change loading effect: `public/loading.gif`, `components/PageLoading.tsx`
4. Change site.config.ts: `rootNotionPageId`, `name`, `domain`, `author`, `description`, `defaultPageIcon`, `navigationLinks`, `enableComment`

### 5. Issuing Notion API key & setting environment variables

OG Image (social-image) and comment functions use the Notion API. Please go to the document link below and proceed to issue the key.

[2skydev wiki - Notion API key issuance & environment variable settings](https://github.com/2skydev/Notion-Next.js-blog-starter-kit/wiki/Notion-API-%ED%82%A4-% EB%B0%9C%EA%B8%89-&-%ED%99%98%EA%B2%BD-%EB%B3%80%EC%88%98-%EC%84%A4%EC%A0 %95)

### 6. Read the document [Optional]
Please check the link below for more detailed documents.

[2skydev/blog - Wiki](https://github.com/2skydev/Notion-Next.js-blog-starter-kit/wiki)

> 💡 The document in the link above explains various things such as getting started, precautions, Draft & Published functions, etc.<br/>
> Please read this carefully before using.

<br/>

## 🚧 Additional customization is required

Using the `yarn workspace` function, the module has been configured to be customized down to the smallest detail.

### Items already customized based on open source standards

- Configure `yarn workspace` to modify modules
- Date format
- Database properties (styles, non-working properties, etc.)
- Modified parts where database filters cannot be applied
- Table of contents style displayed on the right
- Automatically reflected when changing the device's dark mode (there was a bug, so I configured it myself)
- Modification of the part where Korean is not included in the address (called Slug)
- Fixed some style errors in dark mode.
- Notion's block style modifications
- Handle background color change for callout specific icons (⚠️, 🚧, 🔴, 🛑, 💡)
- Add comment function
- Added GA configuration
- Modification of insufficient responsive processing
- a Link method -> Use Next.js Link component
- Added loading effect
- Animation between page movements
- Draft function added (draft, published)
- Customize how OG Image (social-image) works
- Fixed various errors (newly created page 404, hydration error due to timezone difference between server and client, etc.)

### Style Custom

If you need additional customization other than the items below, you can proceed by editing or adding the desired files.

- Page size and color variables: `styles/custom/vars.scss`
- Notion basic blocks: `styles/custom/notion-blocks.scss`

### Custom settings

Additional settings have been configured in the `site.config.ts` file.<br/>
Please check the table below for additional configuration information.

| key | default | Description |
| -------------------- | ---------- | -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------------------------------ |
| dateformat | yyyy.MM.dd | Set the date format. Valid values ​​are the date-fns format string. |
| defaultTheme | system | Set a default theme. Valid values ​​are `light`, `dark`, `system` |
| hiddenPostProperties | [] | These are the attribute names to be hidden on the post detail page. |
| enableComment | false | Whether to activate the comment function on the post detail page. When using the Notion comment function, setting the `NOTION_API_KEY` environment variable is required.|
| contentPositionTextAlign | left | Set the character alignment of the table of contents displayed on the right side of the article detail page. Valid values ​​are `left`, `right` |