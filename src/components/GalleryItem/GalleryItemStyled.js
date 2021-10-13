import styled, { css } from 'styled-components'

// Import components from Gatsby and plugins Gatsby
import { GatsbyImage } from 'gatsby-plugin-image'

// Import helpers
import { media, setRadius, setShadow } from '@helpers'

// Create reusable CSS
const WrapperCSS = css`
  width: 100%;
  ${setRadius({ allPx: 12 })};
  box-shadow: ${setShadow('medium')};
  margin-bottom: 2rem;
  max-width: 30rem;
  height: auto;
  overflow: hidden;

  ${media.greaterThan('tablet')`
    width: 30%;
    `}
`

// Export Styles for the component
export const ImgWrapper = styled.div`
  ${WrapperCSS}
`
export const SRLLinkWrapper = styled.a`
  ${WrapperCSS}
`

export const Image = styled(GatsbyImage)`
  ${setRadius({ allPx: 12 })};
  img {
    ${setRadius({ allPx: 12 })};
  }
  &.gatsby-image-wrapper {
    aspect-ratio: 1.3;
  }
`
