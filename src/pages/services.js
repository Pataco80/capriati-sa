import * as React from "react"
// Import components from Gatsby and plugins Gatsby
import { StaticImage } from "gatsby-plugin-image"

// Import Components for App
import { Layout, Seo, Hero, Services, Banner } from "@components"

// Import styled-components, styledElements and helpers
import { setColor } from "@helpers"

// Component
const ServicesPage = () => {
	// Render Component
	return (
		<Layout background={`${setColor.mainWhite}`}>
			<Seo
				pathname='/services/'
				title='Nos Services'
				description='Liste de nos services en plâtrerie, peinture, papier-peint, giclage et fresques décoratives'
				keywords='Plâtre, crépi, papiers-peints, giclage, fresques décoratives'
				image='services'
				shareTitle='Notre expérience et qualités à votre service.'
			/>
			<Hero>
				<StaticImage
					src='../assets/images/banners/services-page-banner.jpg'
					alt='Bannière A Propos'
					placeholder='blurred'
					layout='fullWidth'
				/>
				<Banner title='Nos Services' notPadding />
			</Hero>
			<Services />
		</Layout>
	)
}

export default ServicesPage
