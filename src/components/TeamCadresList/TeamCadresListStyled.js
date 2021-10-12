import styled from 'styled-components'

// Import helpers
import { setFlex, media } from '@helpers'

// Export Styles for the component
export const TeamCadresWrapper = styled.div`
  ${setFlex({ flDir: 'column' })};
  width: 100%;

  ${media.greaterThan('tablet')`
    ${setFlex({ flDir: 'row', x: 'space-around', y: 'flex-start' })};
  `}
`
