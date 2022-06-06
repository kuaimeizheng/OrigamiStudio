// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

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
    defaultLocale: 'en',
    locales: ['en'],
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
          editUrl:
            'https://github.com/kuaimeizheng/OrigamiStudio/tree/main/',
          showLastUpdateAuthor: true, // 显示最后编辑作者
          showLastUpdateTime: true, // 显示最后编辑时间
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/kuaimeizheng/OrigamiStudio/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'patches',
        path: 'patches',
        routeBasePath: 'patches',
        sidebarPath: require.resolve('./sidebars.js'),
        // ... other options
      },
    ],

  

  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'OrigamiStudio',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },

        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Origami 中文文档',
          },

          {
            to: '/patches/intro', // To highlight the navbar item, you must link to a document, not a top-level directory
            //type: 'doc',
            //docId: 'intro',
            position: 'left',
            label: '个人模块',
            activeBaseRegex: `docs/dev`,
          },

      

          {
          to: '/blog', 
          label: '关于作者', 
          position: 'left'
          },
          {
            href: 'https://github.com/kuaimeizheng/OrigamiStudio',
            label: 'GitHub',
            position: 'right',
          },
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