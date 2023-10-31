import styled, { css } from "styled-components"

// Import StyledElements for basic styles
import { Section, SectionContent } from "../StyledElements/SectionStyled"
import { GatsbyButtonLink } from "../StyledElements/ButtonsStyled"

// Import helpers
import { layout, setFlex, media, setColor, spaceScale } from "@helpers"

// Styled CSS
const ArticleCSS = css`
	${setFlex()};

	${media.greaterThan("tablet")`
    width: 50%;
  `}
`

// Export Styles for the component
export const AboutWrapper = styled(Section)`
	${setFlex({ flDir: "column" })};
	background-color: ${(props) => props.background || `${setColor.white}`};
	padding: ${spaceScale.spaceXl};
`

export const AboutContent = styled(SectionContent)`
	${layout()};
	${setFlex({ flDir: "column", wrap: "nowrap" })};

	${media.greaterThan("tablet")`
    ${setFlex({ flDir: "row" })};
  `}
`

export const AboutArticle = styled.div`
	${ArticleCSS}
	margin: 0 0 2rem 0;
	color: ${setColor.mainBlack};

	${media.greaterThan("tablet")`
    margin: 0 2rem 0 0;

  `}
`

export const AboutAuthorContainer = styled.div`
	${setFlex({ flDir: "column" })};
	width: 100%;
	padding-left: 0;
	padding-top: 0;

	${media.greaterThan("tablet")`
    ${setFlex({ flDir: "row" })};
    max-width: 22rem;
    padding-left:${spaceScale.spaceM};
  `}
	& p {
		margin-top: 2rem;
	}
`

export const AuthorImgContainer = styled.div`
	${setFlex({ flDir: "column" })};
	width: 100%;
	max-width: 350px;
	padding: 2rem 0 1rem 0;
	text-align: center;

	${media.greaterThan("tablet")`
    padding: 0rem 0 1rem 0;
  `}
`

export const AuthorName = styled.h3`
	margin-bottom: 0.5rem;
	text-align: center;
`

export const AboutLink = styled(GatsbyButtonLink)`
	margin: 3rem 0 1rem;
`
