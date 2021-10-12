import styled from 'styled-components'

// Import components from Gatsby and plugins Gatsby
import { Link } from 'gatsby'

// Import StyledElements for basic styles
import { Section, SectionContentCenter } from '@styledElements/SectionStyled'
import { GatsbyButtonLink } from '@styledElements/ButtonsStyled'

// Import helpers
import {
  layout,
  setFlex,
  setColor,
  media,
  setRadius,
  setShadow,
} from '@helpers'

// Export Styles for the component
export const ServicesWrapper = styled(Section)`
  ${setFlex({ flDir: 'column' })};
  padding: 3rem 1rem;
`

export const ServicesContent = styled(SectionContentCenter)`
  ${setFlex({ flDir: 'column', y: 'center' })};
  flex-wrap: nowrap;

  ${media.greaterThan('tablet')`
    ${layout()};
    ${setFlex({ flDir: 'row', x: 'space-around', y: 'space-around' })};
    align-items: stretch;
  `}
`

export const ServiceItemCard = styled(Link)`
  ${setFlex({ flDir: 'column', x: 'flex-start', y: 'flex-start' })};
  flex-flow: wrap;
  align-content: flex-start;
  width: 100%;
  max-width: 400px;
  color: ${setColor.mainBlack};
  background-color: ${setColor.mainWhite};
  margin-bottom: 4rem;
  text-decoration: none;
  ${setRadius({ allPx: 12 })};
  box-shadow: ${setShadow('medium')};

  &:hover {
    box-shadow: ${setShadow('dark')};
  }

  ${media.greaterThan('tablet')`
    max-width: 45%;
  `}

  ${media.greaterThan('desktop')`
    max-width: 32%;
  `}
`

export const ServicesLink = styled(GatsbyButtonLink)`
  margin: 3rem 0 1rem;
`
