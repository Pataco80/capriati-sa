import React from "react"

// Import React Hooks
import useSiteMetadata from "@hooks/useSiteMetadata"

// Import components from Gatsby and plugins Gatsby
import { StaticImage } from "gatsby-plugin-image"

// Import Components for App
import Title from "../Title/Title"

// Import styles from styled-components file and helpers
import * as S from "./BannerHomeStyled"

// GraphQl Queries

// Component
const Bannerhome = () => {
	// Component Variables
	const { siteTitle } = useSiteMetadata()

	// Render Component
	return (
		<S.BannerWrapper>
			<S.LogoWrapper>
				<StaticImage
					src='../../assets/images/logos/logoCapriati.png'
					alt={`Logo ${siteTitle}`}
					layout='fullWidth'
					placeholder='blurred'
					loading='eager'
				/>
			</S.LogoWrapper>
			<S.LayoutSection>
				<Title tag='h1' title={`Bienvenue chez ${siteTitle}`} hidden />
				<S.Description>
					<S.Text className='h4'>
						Entreprise de peinture familiale depuis 1979
					</S.Text>
				</S.Description>
				<S.CallActionBtn secondary to='/services/' title='Voir nos Services'>
					Nos Services
				</S.CallActionBtn>
				<S.CallActionBtn primary to='/contact/' title='Nous contacter'>
					Nous Contacter
				</S.CallActionBtn>
			</S.LayoutSection>
		</S.BannerWrapper>
	)
}

export default Bannerhome
