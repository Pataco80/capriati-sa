import styled from "styled-components"

// Import components from Gatsby and plugins Gatsby
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

// Import Components for App
import { BcgImage } from "@components"

// Import StyledElements for basic styles
import { BannerStyled } from "@styledElements/BannerStyled"
import { SectionContentCenter } from "@styledElements/SectionStyled"

// Import helpers
import { setFlex, setColor, setRadius, setShadow, media } from "@helpers"

// Export Styles for the component
export const ServiceHeader = styled.header`
  ${setFlex({ flDir: "column" })};
  position: relative;
  width: 100%;
  min-height: 32rem;
`

export const ServiceBanner = styled.div`
  ${setFlex({ flDir: "column" })};
  width: 100%;
  align-content: flex-end;
  align-self: flex-end;

  h3 {
    margin: 0 0 0.5rem 0;
    align-self: flex-end;

    ${media.lessThan("smTablet")`
        font-size: larger;

  `}
  }

  ${media.greaterThan("smTablet")`
    ${setFlex({ x: "flex-end" })};
    align-self: flex-end;
  `}
`

export const ServiceSmallBanner = styled.div`
  ${setFlex({ flDir: "column" })};
  width: 100%;
`

export const BannerContent = styled(BannerStyled)`
  ${setFlex({ x: "flex-end" })};
  background-color: rgba(255, 255, 255, 0.8);
  width: 80%;
  max-width: 600px;
  border-top-left-radius: 100%;
  min-height: 150px;
  align-content: flex-end;
  padding: 1rem;

  ${media.greaterThan("smTablet")`
    padding: 2rem;
  `}
`

export const ServiceBcgImage = styled(BcgImage)`
  margin-bottom: 3rem;
  width: 100%;
`

export const IconContainerCard = styled.div`
  width: 200px;
  height: 200px;
`

export const IconContainer = styled.div`
  margin-right: 1rem;
  width: 50px;
  height: 50px;

  ${media.greaterThan("smTablet")`
    width: 80px;
    height: 80px;
  `}

  ${media.greaterThan("tablet")`
    width: 100px;
    height: 100px;
  `}
`

export const ServiceIcon = styled(GatsbyImage)`
  height: inherit;
  max-width: 200px;
`

export const ServiceBody = styled(SectionContentCenter)`
  flex-grow: 2000;
`

export const ServiceWrapper = styled.article`
  ${setFlex({ flDir: "column" })};
  flex-flow: wrap;
  padding: 1rem;
  width: 100%;
`

export const ServiceCardItem = styled.article`
  padding: 2rem;

  ${ServiceBanner} {
    ${setFlex({ flDir: "column" })};
  }
`
export const ServiceCardWrapper = styled(Link)`
  ${setFlex({ flDir: "column", x: "flex-start", y: "flex-start" })};
  flex-flow: wrap;
  align-content: flex-start;
  width: 100%;
  max-width: 400px;
  color: ${setColor.mainBlack};
  background-color: ${setColor.mainWhite};
  margin-bottom: 4rem;
  text-decoration: none;
  ${setRadius({ allPx: 12 })};
  box-shadow: ${setShadow("medium")};

  &:hover {
    box-shadow: ${setShadow("dark")};
  }

  ${media.greaterThan("tablet")`
    max-width: 45%;
  `}

  ${media.greaterThan("desktop")`
    max-width: 32%;
  `}
`

export const GallerySection = styled(SectionContentCenter)`
  ${setFlex({ flDir: "column" })};
  margin-bottom: 1rem;

  ${media.greaterThan("smTablet")`
    ${setFlex({ flDir: "row", x: "space-around" })};
    margin-bottom:2rem;
  `}
`

export const serviceCardHeader = styled.header`
  height: auto;
`
