const path = require('path')

// Initialize dotenv
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`, // or '.env'
})

const websiteConfig = require('./config/website-config')
// And then you can use the config in gatsby-config.js
const pathPrefix = websiteConfig.pathPrefix
const siteUrl = websiteConfig.siteUrl + pathPrefix

module.exports = {
  /* General Information */
  pathPrefix: websiteConfig.pathPrefix,
  siteMetadata: {
    siteUrl: siteUrl, // For gatsby-plugin-sitemap
    pathPrefix,
    siteTitle: websiteConfig.siteTitle,
    siteDescription: websiteConfig.siteDescription,
    logo: websiteConfig.siteLogo,
    siteLanguage: websiteConfig.siteLanguage,
    siteKeywords: websiteConfig.siteKeywords,
    bossName: websiteConfig.bossFullName,
    bossPosition: websiteConfig.bossPosition,
    bossDescription: websiteConfig.bossDescription,
    bossSlogan: websiteConfig.bossSlogan,
    businessRoad: websiteConfig.businessAdressRoad,
    businessRoadNumber: websiteConfig.businessAdressRoadNumber,
    businessZipCode: websiteConfig.businessAdressZipCode,
    businessCity: websiteConfig.businessAdressCity,
    businessCanton: websiteConfig.businessAdressCanton,
    businessShortCanton: websiteConfig.businessAdressShortCanton,
    businessContry: websiteConfig.businessAdressCountry,
    businessShortCountry: websiteConfig.businessAdressShortCountry,
    businessPhone: websiteConfig.businessPhone,
    businessFax: websiteConfig.businessFax,
    businessEmail: websiteConfig.businessEmail,
    copyright: websiteConfig.copyright,
    twitterUserName: websiteConfig.twitterUserName,
    socialMenu: websiteConfig.socialLinks,
    facebookUserName: websiteConfig.facebookUserName,
    conceptorWebSite: websiteConfig.webSiteConceptor,
    formSpree: websiteConfig.formSpree,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    `gatsby-plugin-netlify`,
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/icons/favicon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
      __key: 'assets',
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
          '@styledElements': path.resolve(
            __dirname,
            'src/components/styledElements'
          ),
          '@helpers': path.resolve(__dirname, 'src/theme/helpers'),
          '@hooks': path.resolve(__dirname, 'src/hooks'),
          '@utils': path.resolve(__dirname, 'src/utils'),
          '@constants': path.resolve(__dirname, 'src/components/constants'),
          '@assets': path.resolve(__dirname, 'src/assets'),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: websiteConfig.siteTitle,
        short_name: websiteConfig.siteTitleShort,
        description: websiteConfig.siteDescription,
        start_url: '/',
        background_color: websiteConfig.backgroundColor,
        theme_color: websiteConfig.themeColor,
        display: 'standalone',
        icon: websiteConfig.favicon,
        icons: [
          {
            src: '/favicons/android-icon-36x36.png',
            sizes: '36x36',
            type: 'image/png',
          },
          {
            src: '/favicons/android-icon-48x48.png',
            sizes: '48x48',
            type: 'image/png',
          },
          {
            src: '/favicons/android-icon-72x72.png',
            sizes: '72x72',
            type: 'image/png',
          },
          {
            src: '/favicons/android-icon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
          },
          {
            src: '/favicons/android-icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: '/favicons/favicon.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        icon_options: {
          purpose: `maskable`,
        },
        crossOrigin: `use-credentials`,
        cache_busting_mode: 'none',
      },
    },
    `gatsby-plugin-offline`,
  ],
}
