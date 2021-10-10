import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

import { setColor, setFont, setLetterSpacing } from "./helpers"

const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: ${setFont.bodyFont};
    font-size: 1rem;
    color: ${setColor.mainBlack};
  }

  body {
    font-family: ${setFont.bodyFont};
    font-size: calc(1rem + 0.35vw); /* Responsive base font size */
    line-height: calc(1rem + 1.333vw); /* Responsive Vertical Rhythm */
    ${setLetterSpacing(1.3)}
  }

  h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6 {
    font-family: ${setFont.headingsFont};
    padding: calc(1.5rem + 1vw) 0; /* Responsive paddings */
    color: ${setColor.primaryColor};
    font-weight: 900;
    ${setLetterSpacing()};
  }

  h1, .h1 {
    font-size: 3.713rem;
    line-height: calc(3.713rem + 2.5vw); /* Responsive Vertical Rhythm */
  }

  h2, .h2 {
    font-size: 2.856rem;
    line-height: calc(2.856rem + 2.25vw); /* Responsive Vertical Rhythm */
  }

  h3, .h3 {
    font-size: 2.197rem;
    line-height: calc(2.197rem + 1.5vw); /* Responsive Vertical Rhythm */
  }

  h4, .h4 {
    font-size: 1.9rem;
    line-height: calc(1.9rem + 1vw); /* Responsive Vertical Rhythm */
  }

  h5, .h5 {
    font-size: 1.7rem;
    line-height: calc(1.7rem + 1vw); /* Responsive Vertical Rhythm */
  }

  h6, .h6 {
    font-size: 1.4rem;
    line-height: calc(1.4rem + .2vw); /* Responsive Vertical Rhythm */
  }

    h4, .h4, h5, .h5, h6, .h6 {
    padding: calc(1rem + .2vw) 0;
  }

  p {
    margin: 0 0 calc(1rem + .3vw) 0;
  }

  small, .small {
    font-size: 80%;
  }

  .gatsby-image-wrapper {
    width: 100%;
  }
`

export default GlobalStyle
