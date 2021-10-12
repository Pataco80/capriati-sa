import styled from 'styled-components'

// Import StyledElements for basic styles
import { SectionContent } from '../StyledElements/SectionStyled'

// Import helpers
import { setFlex, media } from '@helpers'

// Export Styles for the component
export const GallerySection = styled(SectionContent)`
  ${setFlex({ flDir: 'column' })};

  ${media.greaterThan('smTablet')`
    ${setFlex({ flDir: 'row', x: 'space-around' })};
  `}
`

export const ButtonsContainer = styled.div`
  ${setFlex()};
  margin-bottom: 2rem;
`
