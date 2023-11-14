import { css } from "styled-components"
import { setColor } from "./helpers"
import { setLetterSpacing } from "./helpers"

export const fontFamilly = {
	titleFont: "Noto Sans",
	bodyFont: "Roboto",
	defaultFonts: `"system",
  "-apple-system",
  ".SFNSText-Regular",
  "San Francisco",
  "Roboto",
  "Segoe UI",
  "Helvetica",
  "Arial",
  "sans-serif"`,
}
/* @link https://utopia.fyi/type/calculator?c=375,18,1.2,1240,22,1.25,5,2,&s=0.75|0.5|0.25|0.2,1.5|2|3|4|6,s-l&g=s,l,xl,12 */

export const typeScale1822 = {
	/* Step -2: 12.50px → 14.08px */
	fontSize2xs: `clamp(0.78rem, calc(0.75rem + 0.17vw), 0.88rem)`,
	line2xs: `clamp(0.938rem, 0.283vw + 0.881rem, 1.1rem)`,

	/* Step -1: 15.00px → 17.60px */
	fontSizeXs: `clamp(0.94rem, calc(0.88rem + 0.28vw), 1.10rem)`,
	lineXs: `clamp(1.125rem, 0.435vw + 1.038rem, 1.375rem)`,

	/* Step 0: 18.00px → 22.00px */
	fontSizeS: `clamp(1.13rem, calc(1.02rem + 0.46vw), 1.38rem)`,
	lineS: `clamp(1.35rem, 0.641vw + 1.222rem, 1.719rem)`,

	/* Step 1: 21.60px → 27.50px */
	fontSizeM: `clamp(1.35rem, calc(1.28rem + 0.37vw), 1.56rem);`,
	lineM: `clamp(1.62rem, 0.579vw + 1.504rem, 1.953rem)`,

	/* Step 2: 25.92px → 34.38px */
	fontSizeL: `clamp(1.62rem, calc(1.5rem + 0.58vw), 1.95rem);`,
	lineL: `clamp(1.944rem, 0.865vw + 1.771rem, 2.441rem)`,

	/* Step 3: 31.10px → 42.97px */
	fontSizeXl: `clamp(1.94rem, calc(1.77rem + 0.87vw), 2.44rem);`,
	lineXl: `clamp(2.333rem, 1.251vw + 2.082rem, 3.052rem)`,

	/* Step 4: 37.32px → 53.71px */
	fontSize2Xl: `clamp(2.33rem, calc(2.08rem + 1.26vw), 3.05rem);`,
	line2Xl: `clamp(2.799rem, 1.767vw + 2.446rem, 3.815rem)`,

	/* Step 5: 44.79px → 67.14px */
	fontSize3Xl: `clamp(2.80rem, calc(2.31rem + 2.43vw), 4.20rem)`,
	line3Xl: `clamp(3.359rem, 3.28vw + 2.703rem, 5.245rem)`,
}

export const typeScale = {
	/* Step -2: 11.11px → 12.80px */
	fontSize2xs: `clamp(0.6944rem, 0.6486rem + 0.1954vw, 0.8rem)`,
	line2xs: `clamp(0.833rem, 0.308vw + 0.761rem, 1rem)`,

	/* Step -1: 13.33px → 16.00px */
	fontSizeXs: `clamp(0.8331rem, 0.7608rem + 0.3087vw, 1rem)`,
	lineXs: `clamp(1rem, 0.463vw + 0.891rem, 1.25rem)`,

	/* Step 0: 16.00px → 20.00px */
	fontSizeS: `clamp(1rem, 0.8916rem + 0.4624vw, 1.25rem)`,
	lineS: `clamp(1.2rem, 0.671vw + 1.043rem, 1.563rem)`,

	/* Step 1: 19.20px → 25.00px */
	fontSizeM: `clamp(1.2rem, 1.0428rem + 0.6705vw, 1.5625rem)`,
	lineM: `clamp(1.44rem, 0.949vw + 1.218rem, 1.953rem)`,

	/* Step 2: 23.04px → 31.25px */
	fontSizeL: `clamp(1.44rem, 1.2175rem + 0.9491vw, 1.9531rem)`,
	lineL: `clamp(1.728rem, 1.32vw + 1.419rem, 2.441rem)`,

	/* Step 3: 27.65px → 39.06px */
	fontSizeXl: `clamp(1.7281rem, 1.419rem + 1.3191vw, 2.4413rem)`,
	lineXl: `clamp(2.074rem, 1.809vw + 1.65rem, 3.052rem)`,

	/* Step 4: 33.18px → 48.83px */
	fontSize2Xl: `clamp(2.0738rem, 1.6497rem + 1.8092vw, 3.0519rem)`,
	line2Xl: `clamp(2.488rem, 2.453vw + 1.913rem, 3.815rem)`,

	/* Step 5: 39.81px → 61.04px */
	fontSize3Xl: `clamp(2.4881rem, 1.9129rem + 2.4543vw, 3.815rem)`,
	line3Xl: `clamp(2.986rem, 3.298vw + 2.213rem, 4.769rem)`,
}

export const globalTypography = css`
	h1,
	.h1,
	h2,
	.h2,
	h3,
	.h3,
	h4,
	.h4,
	h5,
	.h5,
	h6,
	.h6 {
		color: ${setColor.mainBlue};
		font-family: ${fontFamilly.titleFont};
		${setLetterSpacing()};
	}

	h1,
	.h1 {
		font-size: ${typeScale.fontSize3Xl};
		line-height: ${typeScale.line3Xl};
	}
	h2,
	.h2 {
		font-size: ${typeScale.fontSize2XL};
		line-height: ${typeScale.line2Xl};
	}
	h3,
	.h3 {
		font-size: ${typeScale.fontSizeXl};
		line-height: ${typeScale.lineXl};
	}
	h4,
	.h4 {
		font-size: ${typeScale.fontSizeL};
		line-height: ${typeScale.lineL};
	}
	h5,
	.h5 {
		font-size: ${typeScale.fontSizeM};
		line-height: ${typeScale.lineM};
	}
	h6,
	.h6 {
		font-size: ${typeScale.fontSizeS};
		line-height: ${typeScale.lineS};
	}

	p {
		font-size: ${typeScale.fontSizeS};
		line-height: ${typeScale.lineS};
	}

	small {
		font-size: ${typeScale.ftzXs};
		line-height: ${typeScale.lineXs};
	}

	*.notMargin {
		margin-bottom: 0 !important;
	}
`
