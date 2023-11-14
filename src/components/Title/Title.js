import React from "react"
import PropTypes from "prop-types"

// Import styles from styled-components file and helpers
import * as S from "./TitleStyled"

// Component
const Title = (props) => {
	const {
		title,
		tag: Tag,
		hidden,
		children,
		tagClassName,
		pageTitle,
		mBtm,
	} = props
	// Render Component
	return (
		<S.TitleWrapper>
			<Tag
				pageTitle={pageTitle}
				className={tagClassName}
				mBtm={mBtm}
				hidden={hidden}>
				{title}
			</Tag>
			{children}
		</S.TitleWrapper>
	)
}

// React PropTypes and more...
Title.defaultProps = {
	tag: "h1",
	title: "Mon titre",
}

Title.propTypes = {
	tag: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
}

export default Title
