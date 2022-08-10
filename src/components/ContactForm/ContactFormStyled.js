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
} from "@helpers"

// Styled CSS
const ContactInput = css`
  font-family: ${setFont.bodyFont};
  font-size: 1rem;
  width: 100%;
  padding: 1.5rem;
  margin: 1rem 0 3rem;
  ${setRadius({ allPx: 12 })};
  border: ${setBorder({
    size: 1,
    style: "solid",
    color: setColor.primaryColor,
  })};
  background: ${setColor.mainGreyL3};
  box-shadow: ${setShadow("light")};

  &:focus {
    box-shadow: ${setShadow("light", { inset: "inset" })};
    outline: none;
  }
  &::placeholder {
    font-style: italic;
  }
`

// Export Styles for the component
export const FormContainer = styled(SectionContent)`
  ${layout({ mW: 800 })};
  ${setFlex({ flDir: "column" })};
`

export const ContactForm = styled.form`
  ${setFlex({ flDir: "column" })};
  width: 100%;
`

export const ContactInfo = styled.section`
  width: 100%;

  ${media.greaterThan("smTablet")`
    ${setFlex({ x: "space-between" })};
  `}
`

export const ContactMessage = styled.section`
  width: 100%;
`

export const InputWrapper = styled.div`
  width: 100%;

  ${media.greaterThan("smTablet")`
    width: 45%;
  `}
`

export const Label = styled.label`
  font-family: ${setFont.headingsFont};
  color: ${setColor.primaryColor};
`

export const Input = styled.input`
  ${ContactInput}
`

export const TextArea = styled.textarea`
  ${ContactInput}
  resize: none;
`

export const Captcha = styled.div`
  margin-bottom: 3rem;
`
