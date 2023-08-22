// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
//
const path = require('path');
const math = require('remark-math');
const npm2yarn = require('@docusaurus/remark-plugin-npm2yarn');
//
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Origami 研习社',
  tagline: 'Origami 中文文档&使用手册&教程',
  url: 'https://kuaimeizheng.github.io',
  baseUrl: '/OrigamiStudio/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kuaimeizheng', // Usually your GitHub org/user name.
  projectName: 'OrigamiStudio', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
    // localeConfigs: {
    //   en: {
    //     htmlLang: 'en-GB',
    //   },
    // },
  },


  presets: [
    [
      '@docusaurus/preset-classic',
      ({
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/kuaimeizheng/OrigamiStudio/tree/main/',
          showLastUpdateAuthor: true, // 显示最后编辑作者
          showLastUpdateTime: true, // 显示最后编辑时间
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
          ],

        },
        //remarkPlugins: [math, [npm2yarn, {sync: true}]],
        pages: {
          remarkPlugins: [require('@docusaurus/remark-plugin-npm2yarn')],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/kuaimeizheng/OrigamiStudio/tree/main/',
        },
        theme: {
          //customCss: require.resolve('./src/css/custom.css',),
          customCss: [require.resolve('./src/css/custom.scss')]
        },
      }),
    ],
  ],

  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      },
    ],
  ],

  plugins: [
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{
        name: 'keywords',
        content: 'origami, origami studio, prototype, 交互, 动效, 原型'
      }],
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      navbar: {
        title: 'OrigamiStudio',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'documentation/intro',
            position: 'left',
            label: '中文文档',
          },
          {
            type: 'doc',
            docId: 'patches/intro',
            position: 'left',
            label: '个人模块',
          },
          {
            type: 'doc',
            docId: 'tutorial/intro',
            position: 'left',
            label: '学习教程',
          },
          // {
          //   to: 'showcase',
          //   label: '例子(待完善)',
          //   position: 'left'
          // },
          {
            type: 'doc',
            docId: 'system/intro',
            position: 'left',
            label: '组件系统',
          },
          {
            type: 'doc',
            docId: 'special/intro',
            position: 'left',
            label: '专题练习',
          },

          {
            type: 'doc',
            docId: 'device/intro',
            position: 'left',
            label: '设备展示',
          },
          {
            type: 'doc',
            docId: 'research/intro',
            position: 'left',
            label: '技术探索',
          },
          {
            type: 'doc',
            docId: 'motion/intro',
            position: 'left',
            label: '动画模块',
          },

          {
            type: 'doc',
            docId: 'shortcuts/shortcuts',
            position: 'left',
            label: '键盘快捷键',
          },

          {
            to: '/blog',
            label: '关于作者',
            position: 'right'
          },
            {
              type: 'localeDropdown',
              position: 'right',
            },
            {
              href: 'https://origami.design/documentation/',
              label: '官方文档',
              position: 'right',
            },
          // {
          //   href: 'https://github.com/kuaimeizheng/OrigamiStudio',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },

      footer: {
        style: 'dark',
        /*links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/kuaimeizheng/OrigamiStudio',
              },
            ],
          },
        ],*/
        copyright: `Copyright © ${new Date().getFullYear()} Origami Studio, Personal. Built with kuaimeizheng.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
