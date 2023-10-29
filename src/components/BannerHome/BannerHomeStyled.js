import styled from "styled-components"

// Import StyledElements for basic styles
import { BannerStyled } from "../StyledElements/BannerStyled"
import { GatsbyButtonLink } from "../StyledElements/ButtonsStyled"

// Import helpers
import { layout, setFlex, media, setShadow, spaceScale } from "@helpers"

// Export Styles for the component
export const BannerWrapper = styled(BannerStyled)`
	${setFlex({ flDir: "column" })};
	align-self: stretch;
	background-color: silver;
	padding-bottom: ${spaceScale.space2xlUp3xl};

	${media.greaterThan("smTablet")`
    ${setFlex({ flDir: "column", x: "flex-start", y: "space-around" })};
    margin-bottom: ${spaceScale.space2xlUp3xl};

  `}
`

export const LayoutSection = styled.div`
	${layout()};
	${setFlex({ flDir: "column", x: "center", y: "center" })};
	align-content: flex-end;
	position: relative;
	width: 100%;
	z-index: 2;

	${media.greaterThan("smTablet")`
    ${setFlex({ x: "space-around", y: "space-around" })};
    align-self: flex-end;
  `}
`

export const CallActionBtn = styled(GatsbyButtonLink)`
	box-shadow: ${setShadow("light")};
	text-align: center;
	margin: ${spaceScale.spaceSupM} ${spaceScale.spaceSupM} 0
		${spaceScale.spaceSupM};

	&:hover {
		box-shadow: ${setShadow("medium")};
	}
`

export const Description = styled.div`
	${setFlex({ y: "flex-end" })};
	width: 100%;
	margin-bottom: ${spaceScale.spaceXlUp2xl};

	${media.lessThan("smTablet")`
    margin-bottom: ${spaceScale.spaceXs};
  `}
`

export const Text = styled.p`
	text-align: center;
	${media.lessThan("smTablet")`
	margin-bottom: 0;
  `}
`

export const LogoWrapper = styled.div`
	${setFlex({ x: "flex-start" })};
	width: 100%;
	max-width: 500px;
	z-index: 2;
	align-content: flex-end;
`
