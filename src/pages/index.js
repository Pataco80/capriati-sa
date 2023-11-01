import React from "react"

// Import Components for the page
import { Layout, Seo, Hero, About, Services } from "@components"

// Import styled-components, styledElements and helpers
import { setColor } from "@helpers"

// Component
const IndexPage = () => {
	// Render Component
	return (
		<Layout home background={`${setColor.mainGreyL3}`}>
			<Seo
				title='Accueil'
				keywords="Page d'Accueil, A propos de nous, Nos Services"
				shareTitle='Bienvenue chez nous.'
			/>
			<Hero home title='Home Page' />
			<About home />
			<Services home background={`${setColor.mainGreyL3}`} />
		</Layout>
	)
}

export default IndexPage
