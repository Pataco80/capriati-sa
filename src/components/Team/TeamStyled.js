import styled from 'styled-components'

// Import StyledElements for basic styles
import { Section, SectionContentCenter } from '../StyledElements/SectionStyled'

// Import helpers
import { layout, setFlex, setColor, media } from '@helpers'

// Export Styles for the component
export const TeamWrapper = styled(Section)`
  ${setFlex({ flDir: 'column' })};
  background: ${setColor.mainGreyL3};
`

export const TeamContent = styled(SectionContentCenter)`
  ${setFlex({ flDir: 'column', y: 'center', wrap: 'nowrap' })};

  ${media.greaterThan('tablet')`
    ${layout()};
    ${setFlex({ flDir: 'row', x: 'space-around', y: 'space-around' })};
    align-items: stretch;
  `}
`
