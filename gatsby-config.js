const path = require("path")

// Initialize dotenv
require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`, // or '.env'
})

const websiteConfig = require("./config/website-config")
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
		instagramUserName: websiteConfig.instagramUserName,
		socialMenu: websiteConfig.socialLinks,
		facebookUserName: websiteConfig.facebookUserName,
		conceptorWebSite: websiteConfig.webSiteConceptor,
		formSpreeID: websiteConfig.formSpreeID,
		formSpreeCaptcha: websiteConfig.formspreeCaptchaClientKey,
	},

	// Plugins Configuration
	plugins: [
		{
			resolve: "gatsby-plugin-google-tagmanager",
			options: {
				id: "GTM-5PF6645R",

				// Include GTM in development.
				//
				// Defaults to false meaning GTM will only be loaded in production.
				includeInDevelopment: false,
			},
		},
		/*{
			resolve: `gatsby-plugin-google-gtag`,
			options: {
				// You can add multiple tracking ids and a pageview event will be fired for all of them.
				trackingIds: [
					"G-JBPQMWXXWN", // Google Analytics / GA
				],
			},
		},*/
		// File System
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `pages`,
				path: `${__dirname}/src/pages/`,
			},
			__key: "pages",
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: `assets`,
				path: `${__dirname}/src/assets/`,
			},
			__key: "assets",
		},

		// Imports files Configuration
		{
			resolve: `gatsby-plugin-alias-imports`,
			options: {
				alias: {
					"@components": path.resolve(__dirname, "src/components"),
					"@styledElements": path.resolve(
						__dirname,
						"src/components/styledElements"
					),
					"@helpers": path.resolve(__dirname, "src/theme/helpers"),
					"@hooks": path.resolve(__dirname, "src/hooks"),
					"@utils": path.resolve(__dirname, "src/utils"),
					"@constants": path.resolve(__dirname, "src/components/constants"),
					"@assets": path.resolve(__dirname, "src/assets"),
				},
			},
		},

		// Data Configuration
		{
			resolve: `gatsby-source-airtable`,
			options: {
				apiKey: process.env.AIRTABLE_API_USER_KEY, // may instead specify via env, see below
				concurrency: 5, // default, see using markdown and attachments for more information
				tables: [
					// Liste des Employés Database
					{
						baseId: process.env.AIRTABLE_TEAM_DATABASE_ID,
						tableName: `Team`,
						mapping: { teamPhoto: `fileNode` }, // optional, e.g. "text/markdown", "fileNode"
					},

					// Données de Site Database
					{
						baseId: process.env.AIRTABLE_SITE_DATABASE_ID,
						tableName: `Services`,
						mapping: {
							serviceIcon: `fileNode`,
							serviceFeatureImg: `fileNode`,
							serviceGallery: `fileNode`,
							serviceImg1: `fileNode`,
							serviceImg2: `fileNode`,
							serviceImg3: `fileNode`,
						}, // optional, e.g. "text/markdown", "fileNode"
						tableLinks: [`serviceGallery`, `serviceWork`],
					},
					{
						baseId: process.env.AIRTABLE_SITE_DATABASE_ID,
						tableName: `Gallerie`,
						mapping: {
							galleryImage: `fileNode`,
						}, // optional, e.g. "text/markdown", "fileNode"
						tableLinks: [`galleryWork`, `galleryServicesLink`],
					},
					{
						baseId: process.env.AIRTABLE_SITE_DATABASE_ID,
						tableName: `Travaux`,
						tableLinks: [`workGallery`, `workServices`],
					},
					{
						baseId: process.env.AIRTABLE_SITE_DATABASE_ID,
						tableName: `References`,
					},
					{
						baseId: process.env.AIRTABLE_SITE_DATABASE_ID,
						tableName: `Historique`,
					},
					{
						baseId: process.env.AIRTABLE_SITE_DATABASE_ID,
						tableName: `Partenaires`,
						mapping: {
							partenaireLogo: `fileNode`,
						}, // optional, e.g. "text/markdown", "fileNode"
					},
				],
			},
		},

		// Image Configuration
		`gatsby-plugin-image`,
		{
			resolve: `gatsby-plugin-sharp`,
			options: {
				defaults: {
					formats: [`auto`, `webp`],
					placeholder: `blurred`,
				},
			},
		},
		`gatsby-transformer-sharp`,

		// Fonts Configuration
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`Noto Sans\:400,400i,700:latin`,
					`Roboto\:400,400i,700,700i:latin`,
					// you can also specify font weights and styles
				],
				display: "swap",
			},
		},

		// Styles Configuration
		{
			resolve: `gatsby-plugin-styled-components`,
			options: {
				displayName: true,
			},
		},

		// Other Plugins and Configurations
		"gatsby-plugin-sitemap",

		// Application Manifest
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: websiteConfig.siteTitle,
				short_name: websiteConfig.siteTitleShort,
				description: websiteConfig.siteDescription,
				start_url: "/",
				background_color: websiteConfig.backgroundColor,
				theme_color: websiteConfig.themeColor,
				display: "standalone",
				icon: websiteConfig.favicon,
				icons: [
					{
						src: "/favicons/android-icon-36x36.png",
						sizes: "36x36",
						type: "image/png",
					},
					{
						src: "/favicons/android-icon-48x48.png",
						sizes: "48x48",
						type: "image/png",
					},
					{
						src: "/favicons/android-icon-72x72.png",
						sizes: "72x72",
						type: "image/png",
					},
					{
						src: "/favicons/android-icon-96x96.png",
						sizes: "96x96",
						type: "image/png",
					},
					{
						src: "/favicons/android-icon-144x144.png",
						sizes: "144x144",
						type: "image/png",
					},
					{
						src: "/favicons/favicon.png",
						sizes: "512x512",
						type: "image/png",
					},
				],
				icon_options: {
					purpose: `maskable`,
				},
				crossOrigin: `use-credentials`,
				cache_busting_mode: "none",
			},
		},
		`gatsby-plugin-offline`,
	],
}
