import styled from 'styled-components'

// Import StyledElements for basic styles
import { Section, SectionContentCenter } from '../StyledElements/SectionStyled'

// Import helpers
import { media, setFlex, setColor } from '@helpers'

// Export Styles for the component
export const PartenersWrapper = styled(Section)`
  ${setFlex({ flDir: 'column' })};
  background: ${setColor.mainWhite};
`

export const PartenersLogosContainer = styled(SectionContentCenter)`
  ${setFlex({ flDir: 'column' })};

  ${media.greaterThan('tablet')`
    ${setFlex({ flDir: 'row', x: 'space-around' })};
  `}
`

export const PartenersItemWrapper = styled.a`
  ${setFlex({ y: 'flex-start' })};
  width: 70%;
  max-width: 20rem;
  margin-bottom: 3rem;
  text-align: center;

  ${media.greaterThan('tablet')`
    max-width: 45%;
  `}

  ${media.greaterThan('lgTablet')`
    max-width: 30%;
  `}

  &:nth-child(2) {
    ${media.greaterThan('lgTablet')`
      order: 1;
    `}
  }

  &:last-child {
    margin-bottom: 0;
  }
`
