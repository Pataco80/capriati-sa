import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"
import { setColor, setLetterSpacing, spaceScale } from "./helpers"
import { globalTypography, typeScale, fontFamilly } from "./typography"
const GlobalStyle = createGlobalStyle`
  ${reset}
  ${globalTypography}
  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: ${fontFamilly.defaultFonts};
    font-size: 1rem;
    color: ${setColor.mainBlack};
  }

  body {
    font-family: ${fontFamilly.bodyFont};
		font-size: ${typeScale.fontSizeS};
		line-height: ${typeScale.lineS};
    ${setLetterSpacing(1.3)}
  }

  h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6 {
    font-family: ${fontFamilly.titleFont};
    color: ${setColor.primaryColor};
    font-weight: 900;
    ${setLetterSpacing()};
  }

	h1,
	.h1 {
		font-size: ${typeScale.fontSize3Xl};
		line-height: ${typeScale.line3Xl};
	}
	h2,
	.h2 {
		font-size: ${typeScale.fontSize2Xl};
		line-height: ${typeScale.line2Xl};
    margin-bottom: ${spaceScale.spaceXlUp2xl};
	}
	h3,
	.h3 {
		font-size: ${typeScale.fontSizeXl};
		line-height: ${typeScale.lineXl};
    margin-bottom: ${spaceScale.spaceLupXl};
	}
	h4,
	.h4 {
		font-size: ${typeScale.fontSizeL};
		line-height: ${typeScale.lineL};
    margin-bottom: ${spaceScale.spaceMupL};
	}
	h5,
	.h5 {
		font-size: ${typeScale.fontSizeM};
		line-height: ${typeScale.lineM};
        margin-bottom: ${spaceScale.spaceSupM};

	}
	h6,
	.h6 {
		font-size: ${typeScale.fontSizeS};
		line-height: ${typeScale.lineS};
    margin-bottom: ${spaceScale.spaceXsUpS};
	}

	p {
		font-size: ${typeScale.fontSizeS};
		line-height: ${typeScale.lineS};
    margin-bottom: ${spaceScale.spaceXsUpS};
	}

	small,.small {
		font-size: ${typeScale.ftzXs};
		line-height: ${typeScale.lineXs};
    margin-bottom: ${spaceScale.spaceXsUpS};
	}

  .gatsby-image-wrapper {
    width: 100%;
  }
`

export default GlobalStyle
