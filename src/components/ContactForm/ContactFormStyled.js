import styled, { css } from "styled-components"

// Import StyledElements for basic styles
import { SectionContent } from "../StyledElements/SectionStyled"

// Import helpers
import {
	setFlex,
	layout,
	media,
	setRadius,
	setBorder,
	setColor,
	setShadow,
	setFont,
	spaceScale,
} from "@helpers"
import { typeScale } from "../../theme/typography"
import { setGrid } from "../../theme/helpers"

// Styled CSS
const ContactInput = css`
	font-family: ${setFont.bodyFont};
	font-size: ${typeScale.fontSizeS};
	width: 100%;
	padding: ${spaceScale.spaceS};
	${setRadius({ allPx: 12 })};
	border: ${setBorder({
		size: 1,
		style: "solid",
		color: setColor.primaryColor,
	})};
	background: ${setColor.mainGreyL3};

	&:focus {
		outline: none;
	}
	&::placeholder {
		font-style: italic;
	}
`

// Export Styles for the component
export const FormContainer = styled(SectionContent)`
	${layout({ mW: 800 })};
`

export const ContactForm = styled.form`
	${setGrid({ xgap: `${spaceScale.spaceL}` })};
	width: 100%;
`

export const InputsContent = styled.section`
	${setGrid({ y: "1fr", xgap: `${spaceScale.spaceL}` })};
	justify-items: center;
	align-items: start;
	${media.greaterThan("smTablet")`
	${setGrid({ y: "1fr 1fr", ygap: `${spaceScale.spaceL}` })};

  `}
`

export const ContactMessage = styled.section`
	width: 100%;
`

export const InputWrapper = styled.div`
	${setGrid({ xgap: `${spaceScale.spaceS}` })}
	display: grid;
	width: 100%;

	${media.greaterThan("smTablet")`
		&.radio-input,
		&.message {
			grid-column: 1/3;
		}
		&.radio-input{
			grid-row-gap:${spaceScale.space2xs};
		}
	`}
`

export const Label = styled.label`
	font-family: ${setFont.headingsFont};
	color: ${setColor.primaryColor};

	&.radio-input-label {
		display: block;
	}
`

export const subjectLabel = styled.p`
	color: ${setColor.primaryColor};
	font-weight: bold;
	margin-bottom: 0;
`

export const Input = styled.input`
	${ContactInput}
`

export const TextArea = styled.textarea`
	${ContactInput}
	resize: none;
`

export const Captcha = styled.div`
	display: inline-grid;
	justify-content: center;
	width: 100%;
`

export const RadioInput = styled.input`
	margin-right: 1rem;
`

export const SelectInput = styled.select`
	${ContactInput}
	appearance: none;
	font-style: italic;
	color: #757575;
`
