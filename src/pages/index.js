import React from "react"

// Import Components for the page
import { Layout, Seo, Hero, About, Services } from "@components"

// Import styled-components, styledElements and helpers
import { setColor } from "@helpers"
import { MainContent } from "../components/StyledElements/SectionStyled"

// Component
const IndexPage = () => {
	// Render Component
	return (
		<>
			<Seo
				title='Accueil'
				keywords="Page d'Accueil, A propos de nous, Nos Services"
				shareTitle='Bienvenue chez nous.'
			/>
			<Hero home title='Home Page' />
			<MainContent background={`${setColor.mainGreyL3}`}>
				<About home />
				<Services home background={`${setColor.mainGreyL3}`} />
			</MainContent>
		</>
	)
}

export default IndexPage
