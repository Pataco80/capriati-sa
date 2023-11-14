import React from "react"

// Import Components for App
import { Layout, Seo, Hero } from "@components"

// Import components from Gatsby and plugins Gatsby
import { graphql } from "gatsby"
import { StaticImage, getImage } from "gatsby-plugin-image"

// Import styled-components, styledElements and helpers
import styled from "styled-components"
import { GatsbyButtonLink } from "../components/StyledElements/ButtonsStyled"
import { setFlex, setColor, media, setShadow } from "@helpers"
import { SectionCenter } from "../components/StyledElements/SectionStyled"

// Component
const NotFoundPage = () => {
	// Render Component
	return (
		<>
			<Seo title='404' />
			<ErrorHero error title="Page d'erreur 404">
				<StaticImage
					src='../assets/images/banners/contact-page-banner.jpg'
					alt='Bannière A Propos'
					placeholder='blurred'
					layout='fullWidth'
					className='hero-full-image'
				/>
				<Text className='h3'>
					La page que vous demandez n'éxiste pas, ou l'url que vous avez taper
					n'est pas valide
				</Text>
				<CallActionBtn primary to='/' title="Retour à la page d'Accueil">
					Retour à la page d'accueil
				</CallActionBtn>
			</ErrorHero>
		</>
	)
}

// Styles from styled-components
const ErrorHero = styled(Hero)`
	${setFlex({ flDir: "column", x: "space-around" })};
	background-color: rgba(0, 0, 0, 0.5);

	&.hero-full-image {
		position: absolute;
		top: 0;
		bottom: 0;
		z-index: -1;
	}
`

const Text = styled.p`
	margin: 0 0 3rem;
	text-align: center;

	${media.greaterThan("tablet")`
    margin: 0 0 3rem !important;
  `}

	${media.greaterThan("desktop")`
    font-size: 2.197rem;
    line-height: calc(2.197rem + 1vw);
    margin: calc(1.5rem + 1vw) 0;
  `}
`

const CallActionBtn = styled(GatsbyButtonLink)`
	${setShadow("light")};
	text-align: center;

	&:hover {
		${setShadow("dark")};
	}
`

export default NotFoundPage
