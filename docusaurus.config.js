// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Navidium Engineering Handbook',
  tagline: 'Why Navidium is cool',
  url: 'https://navidium-group.github.io',
  baseUrl: '/handbook/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Navidium-Group', // Usually your GitHub org/user name.
  projectName: 'handbook', // Usually your repo name.
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
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/Navidium-Group/handbook/tree/main/docs',
        },
//        blog: {
//          showReadingTime: true,
//          editUrl:
//            'https://github.com/Navidium-Group/handbook/tree/main/blog',
//        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Navidium Product & Engineering',
        logo: {
          alt: 'Navidium Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Handbook',
          },
//          {to: '/blog', label: 'Blog', position: 'left'},
//          {
//            href: 'https://github.com/Navidium-Group/handbook',
//            label: 'GitHub',
//            position: 'right',
//          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Handbook',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Website',
                href: 'http://www.navidium.com',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/navidium/',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/Navidium2022',
              },
            ],
          },
          {
            title: 'More',
            items: [
//              {
//                label: 'Blog',
//                to: '/blog',
//             },
              {
                label: 'GitHub',
                href: 'https://github.com/Navidium-Group',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Navidium AS`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
