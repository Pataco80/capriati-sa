import * as React from "react"

// Import React Hooks
import useSiteMetadata from "@hooks/useSiteMetadata"

// Import Components for App
import {
	Layout,
	Seo,
	Hero,
	Banner,
	About,
	History,
	ParallaxImg,
	Team,
	Parteners,
} from "@components"
// Import components from Gatsby and plugins Gatsby
import { StaticImage } from "gatsby-plugin-image"
// Import styled-components, styledElements and helpers
import { setColor } from "@helpers"

// Component
const AboutPage = () => {
	// Component variables
	const { siteTitle } = useSiteMetadata()

	// Render Component
	return (
		<Layout background={`${setColor.mainWhite}`}>
			<Seo
				pathname='/about/'
				title='A Propos de Nous'
				description="A Propos de l'entrerise Capriati S.A., son histoire, son équipe et ces partenaires"
				keywords={[
					"A Propos",
					"entreprise peinture",
					"entreprise familiale",
					"entretien",
					"rénovation peinture",
					"historique",
				]}
				image='about'
				shareHashTag={`#${siteTitle}`}
				shareTitle='Notre entreprise'
			/>

			<Hero>
				<StaticImage
					src='../assets/images/banners/about-page-banner.jpg'
					alt='Bannière A Propos'
					placeholder='blurred'
					layout='fullWidth'
				/>
				<Banner title='A Propos de nous' notPadding />
			</Hero>
			<About about />
			<History />
			<ParallaxImg />
			<Team />
			<Parteners />
		</Layout>
	)
}

export default AboutPage
