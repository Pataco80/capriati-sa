import styled from 'styled-components'

// Import StyledElements for basic styles
import { Section, SectionContent } from '../StyledElements/SectionStyled'

// Import helpers
import { layout, setFlex, setColor, media } from '@helpers'

// Export Styles for the component
export const WorksWrapper = styled(Section)`
  ${setFlex({ flDir: 'column' })};
  padding-bottom: 3rem;
  background: ${setColor.mainWhite};
`

export const WorksContent = styled(SectionContent)`
  ${setFlex({ flDir: 'column', y: 'center', wrap: 'nowrap' })};

  ${media.greaterThan('tablet')`
    ${layout()};
    ${setFlex({ flDir: 'row', x: 'space-around', y: 'space-around' })};
    align-items: stretch;
  `}
`

export const SectionInfo = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`
