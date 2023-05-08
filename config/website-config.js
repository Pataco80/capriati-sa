// Fichier de configuration des données du site et de l'entreprise
require("dotenv").config()

// Données de l'entreprise
const businessInfo = {
	businessName: "Capriati SA",
	businessShortName: "Capriati",
	businessAltName: "Capriati Peinture",
	address: {
		road: "Z.A. La Pièce",
		roadNumber: "20",
		zipCode: "1180",
		city: "Rolle",
		canton: "Vaud",
		shortCanton: "VD",
		country: "Suisse",
		shortCountry: "CH",
	},
	email: "info@capriati.ch", // Email used for RSS feed"s author segment
	phone: "021 825 40 17",
	userTwitter: "@CapriatiSA",
	userFacebook: "Capriati Peinture",
	userInstagram: "capriati.sa",

	// Données sur le patron de l'entreprise
	bossInfo: {
		firstName: "Vincent",
		lastName: "Capriati",
		fullName: "Vincent Capriati", // Username to display in the author segment.
		birthday: "13 January 1985",
		position: "Directeur Administratif",
		bossDescription:
			"Entré en tant qu'apprentis peintre au sein de l'entreprise familiale, j'ai effectué ma formation CFC et suivi par l'obtention d'une Maîtrise fédérale de Chef d'Entreprise. Depuis mars 2020, j'ai repris la succession de l'entreprise.",
		bossSlogan: "Notre qualité au service des couleurs de votre lieu de vie.",
	},
}
const conceptorSiteInfo = {
	conceptorBusiness: "DWDevlopment",
}

// Données du site
const websiteConfig = {
	siteUrl: "https://capriati.ch", // Domain of your website without pathPrefix.
	pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
	// Website description used for RSS feeds/meta description tag.
	siteTitle: `${businessInfo.businessName}`, // Site title.
	siteTitleShort: `${businessInfo.shortName}`, // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
	siteTitleAlt: `${businessInfo.altName}`, // Alternative site title for SEO.
	siteDescription:
		'Société de peinture en bâtiments de la famille Capriati. Entreprise familiale basée à Rolle et travaillant sur la région de "La Côte" dans le canton de Vaud (CH)',
	// Logo used for SEO and manifest.
	siteLogo: "/assets/images/logoCapriati.png",
	favicon: "src/assets/images/icons/favicon.png",
	siteLanguage: "fr",

	siteKeywords: [
		"Entreprise de peinture",
		"Entreprise familiale",
		"Peinture à Rolle",
		"Peinture",
		"Plâtre",
		"Décoration",
		"Papier-peint",
		"Giclage",
	],
	bossFullName: `${businessInfo.bossInfo.fullName}`,
	bossDescription: `${businessInfo.bossInfo.bossDescription}`,
	bossSlogan: `${businessInfo.bossInfo.bossSlogan}`,
	bossPosition: `${businessInfo.bossInfo.position}`,
	twitterUserName: `${businessInfo.userTwitter}`,
	facebookUserName: `${businessInfo.userFacebook}`,
	instagramUserName: `${businessInfo.userInstagram}`,
	businessAdressRoad: `${businessInfo.address.road}`,
	businessAdressRoadNumber: `${businessInfo.address.roadNumber}`,
	businessAdressZipCode: `${businessInfo.address.zipCode}`,
	businessAdressCity: `${businessInfo.address.city}`,
	businessAdressCanton: `${businessInfo.address.canton}`,
	businessAdressShortCanton: `${businessInfo.address.shortCanton}`,
	businessAdressCountry: `${businessInfo.address.country}`,
	businessAdressShortCountry: `${businessInfo.address.shortCountry}`,
	businessPhone: `${businessInfo.phone}`,
	businessEmail: `${businessInfo.email}`,

	// Links to social profiles/projects you want to display in the author segment/navigation bar.
	twitterUserName: `${businessInfo.userTwitter}`,
	facebookUserName: `${businessInfo.userFacebook}`,
	instagramUserName: `${businessInfo.userInstagram}`,

	socialLinks: [
		{
			label: "Facebook",
			url: "https://www.facebook.com/Capriati-SA-102996874605584/",
			iconClassName: "fa fa-facebook",
		},
		{
			label: "Instagram",
			url: "https://www.instagram.com/capriati.sa/",
			iconClassName: "fa fa-instagram",
		},
		// twitter pret à sa demande
		{
			label: "Twitter",
			url: "https://twitter.com/Capriati-Peinture",
			iconClassName: "fa fa-twitter",
		},
		{
			label: "Email",
			url: `mailto:${businessInfo.email}`,
			iconClassName: "fa fa-envelope",
		},
	],
	copyright: `Copyright © ${
		businessInfo.businessName
	} ${new Date().getFullYear()}`, // Copyright string for the footer of the website and RSS feed.
	themeColor: "#EE332D", // Used for setting manifest and progress theme colors.
	backgroundColor: "#fff", // Used for setting manifest background color.
	webSiteConceptor: conceptorSiteInfo.conceptorBusiness,

	// Access API
	formSpreeID: process.env.GATSBY_FORMSPREE_ID,
	formspreeCaptchaClientKey: "6LfP_14hAAAAAL6y38SP80hWh0gZAx3v1j4tk425",
}

// Validate

// Make sure pathPrefix is empty if not needed
if (websiteConfig.pathPrefix === "/") {
	websiteConfig.pathPrefix = ""
} else {
	// Make sure pathPrefix only contains the first forward slash
	websiteConfig.pathPrefix = `/${websiteConfig.pathPrefix.replace(
		/^\/|\/$/g,
		""
	)}`
}

// Make sure siteUrl doesn"t have an ending forward slash
if (websiteConfig.siteUrl.substr(-1) === "/")
	websiteConfig.siteUrl = config.siteUrl.slice(0, -1)

module.exports = websiteConfig
