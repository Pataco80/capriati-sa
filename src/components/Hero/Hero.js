import React from "react"
import PropTypes from "prop-types"

// Import Components for App
import { BannerHome, VideoBcg } from "@components"

// Import styles from component styled file
import * as S from "./HeroStyled"

// Component
const Hero = (props) => {
	// Component variables
	const { home, error, children } = props
	// Render Component
	return (
		<>
			{home ? (
				<S.HeroWrapper home={home}>
					<VideoBcg />
					<BannerHome />
				</S.HeroWrapper>
			) : (
				<S.HeroWrapper error={error}>{children}</S.HeroWrapper>
			)}
		</>
	)
}

// React PropTypes and more...
Hero.propTypes = {
	title: PropTypes.string.isRequired,
	imgPath: PropTypes.object.isRequired,
	altBcgImage: PropTypes.string.isRequired,
}

export default Hero
