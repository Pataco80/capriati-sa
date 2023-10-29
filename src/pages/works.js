import * as React from "react"
// Import React Hooks
import { StaticImage } from "gatsby-plugin-image"
// Import Components for App
import { Layout, Seo, Hero, References, Works, Banner } from "@components"

// Component
const WorksPage = () => {
	// Component variables

	// Render Component
	return (
		<Layout>
			<Seo
				pathname='/works/'
				title='Nos Travaux'
				description='Nos travaux éféctués au fil des années'
				keywords='nos travaux, nos références, gallerie'
				image='work'
				shareTitle='Nos réalisations... pour vos inspirations.'
			/>
			<Hero>
				<StaticImage
					src='../assets/images/banners/work-page-banner.jpg'
					alt='Bannière A Propos'
					placeholder='blurred'
					layout='fullWidth'
				/>
				<Banner title='Nos Travaux' notPadding />
			</Hero>
			<Works />
			<References />
		</Layout>
	)
}

export default WorksPage
