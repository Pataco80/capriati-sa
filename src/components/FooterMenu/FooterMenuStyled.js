import styled from "styled-components"

// Import Components for App
import { Link } from "gatsby"

// Import helpers
import {
	media,
	setFlex,
	setColor,
	setTransition,
	setPxToRem,
	setBorder,
} from "@helpers"

// Export Styles for the component
export const MainNavLink = styled(Link)`
	${setFlex()};
	align-content: center;
	position: relative;
	padding: ${setPxToRem(6)} ${setPxToRem(16)} ${setPxToRem(4)} ${setPxToRem(16)};
	width: 100%;
	${setTransition({ delay: 0.2, duration: 0.8 })};
	height: 50px;
	color: ${setColor.primaryColor};
	text-transform: uppercase;
	text-decoration: underline;

	${media.greaterThan("lgTablet")`
    padding: ${setPxToRem(0)} ${setPxToRem(16)} ${setPxToRem(0)} ${setPxToRem(
		16
	)};
    opacity: 1;
    transition: none;
    height: 40px;
  `}
`

export const FooterMenu = styled.ul`
	display: flex;
	flex: auto;
	justify-content: center;
	align-items: center;
	flex-flow: row wrap;

	${media.greaterThan("lgTablet")`
  height: auto;
  position: relative;
  top: 0px;
  transition: none 0s ease 0s;
  `}

	& li {
		width: auto;
		height: 50px;
	}
`

export const FooterMenuLink = styled(Link)`
	width: auto;
	height: 50px;
	transition: none;
	color: ${setColor.mainWhite};
	text-decoration: none;
	padding: ${setPxToRem(6)} ${setPxToRem(16)} ${setPxToRem(4)} ${setPxToRem(16)};
	text-transform: uppercase;

	& :hover span,
	&[aria-current] span {
		border-bottom: ${setBorder({
			size: 2,
			style: "solid",
			color: `${setColor.mainWhite}`,
		})};
	}

	${media.greaterThan("lgTablet")`
    padding: ${setPxToRem(0)} ${setPxToRem(16)} ${setPxToRem(0)} ${setPxToRem(
		16
	)};
  `}
`

export const FooterSocialMenu = styled.ul`
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: center;
	height: 50px;
	& li {
		margin: 0 1rem;
		width: 2.5rem;
		& a {
			color: ${setColor.mainWhite};
		}
	}
`
