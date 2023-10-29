import React from "react"
import PropTypes from "prop-types"

// Import Components for App
import Title from "../Title/Title"

// Import styles from styled-components file
import * as S from "./BannerStyled"

// Component
const Banner = (props) => {
	// Component Variables
	const { title, children, notPadding } = props
	// Render Component
	return (
		<S.BannerWrapper>
			<Title tag='h1' title={title} notPadding={notPadding} />
			{children}
		</S.BannerWrapper>
	)
}

export default Banner

// React PropTypes and more...
Banner.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node,
}
