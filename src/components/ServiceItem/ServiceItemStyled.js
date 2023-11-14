import styled from "styled-components"

// Import components from Gatsby and plugins Gatsby
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

// Import Components for App
import { BcgImage } from "@components"

// Import StyledElements for basic styles
import { BannerStyled } from "../StyledElements/BannerStyled"
import { SectionContentCenter } from "../StyledElements/SectionStyled"
import { GatsbyButtonLink } from "../StyledElements/ButtonsStyled"

// Import helpers
import {
	setFlex,
	setColor,
	setRadius,
	setShadow,
	media,
	spaceScale,
} from "@helpers"

// Export Styles for the component
export const ServiceWrapper = styled.article`
	${setFlex({ flDir: "column" })};
	width: 100%;
	position: relative;
	margin-bottom: ${spaceScale.space2xl};

	${media.greaterThan("desktop")`
		${setFlex({ flDir: "row", wrap: "nowrap" })};
		&.is-revert {
			${setFlex({ flDir: "row-reverse", wrap: "nowrap" })};
		}
  `}
	&:last-child {
		margin-bottom: 0;
	}
`

export const ServiceHeader = styled.header`
	${setFlex({ flDir: "row", y: "flex-end" })};
	position: relative;
	width: 100%;
	margin-bottom: ${spaceScale.spaceL};
`

export const IconContainer = styled.div`
	margin-right: 1rem;
	width: 50px;
	height: 50px;

	${media.greaterThan("tablet")`
    width: 80px;
    height: 80px;
  `}

	${media.greaterThan("desktop")`
    width: 100px;
    height: 100px;
  `}
`

export const ServiceIcon = styled(GatsbyImage)`
	height: inherit;
	max-width: 200px;
`

export const ServiceBody = styled(SectionContentCenter)``

export const ServiceFeatureSection = styled.div`
	${setFlex()};
	width: 100%;
	position: relative;
	margin-bottom: ${spaceScale.spaceM};
	${media.greaterThan("desktop")`
  flex-shrink:2;
  `}
`

export const ServiceFeatureContainer = styled.div`
	width: 100%;
	max-width: 500px;
	position: relative;

	${media.greaterThan("desktop")`
  	&:before {
		  content: "";
		  display: block;
		  width: 100%;
		  height: 100%;
		  position: absolute;
		  border: 6px solid ${setColor.primaryColor};
		  box-sizing: border-box;
		  top: -16px;
		  left: -16px;
	  }
    &.is-revert::before {
      left:16px;
    }
  `}
`
export const FeatureImage = styled(GatsbyImage)`
	box-shadow: ${setShadow("light")};
`

export const ServiceContent = styled.div`
	${setFlex({ flDir: "column" })};
	${media.greaterThan("desktop")`
	margin: 0 0 0 ${spaceScale.spaceM};
  &.is-revert {
	margin: 0 ${spaceScale.spaceM} 0 0;
	}
  `}
`
export const ServicesLink = styled(GatsbyButtonLink)`
	${media.greaterThan("desktop")`
	align-self: flex-start;
	`}
`
