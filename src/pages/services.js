import * as React from "react"
// Import components from Gatsby and plugins Gatsby
import { StaticImage } from "gatsby-plugin-image"

// Import Components for App
import { Title, Seo, Hero, Services, Banner } from "@components"

// Import styled-components, styledElements and helpers
import { setColor } from "@helpers"
import { MainContent } from "../components/StyledElements/SectionStyled"
// Component
const ServicesPage = () => {
	// Render Component
	return (
		<>
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
					loading='eager'
				/>
				<Title tag='h1' title='Nos Services' tagClassName='page-title' />
			</Hero>
			<MainContent background={`${setColor.mainWhite}`}>
				<Services />
			</MainContent>
		</>
	)
}

export default ServicesPage
