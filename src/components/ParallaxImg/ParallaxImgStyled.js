import styled, { css } from "styled-components"

// Import components from Gatsby and plugins Gatsby

// Import Components for App
import { Parallax, Background } from "react-parallax"

// Import helpers
import { setColor } from "@helpers"

// Styled CSS
const ImgSize = css`
  width: 100%;
  min-height: 200px;
  height: 50vw;
  max-height: 1000px;
`

// Export Styles for the component
export const ParallaxContainer = styled(Parallax)`
  ${ImgSize};
  background-color: ${setColor.mainGreyL3};

  .react-parallax-background-children {
    width: 100%;
  }
`

export const BackgroundImg = styled(Background)`
  width: 100%;
`

export const ImageContainer = styled.div`
  ${ImgSize};
`
