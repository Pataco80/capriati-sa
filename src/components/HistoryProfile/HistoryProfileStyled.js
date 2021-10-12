import styled from 'styled-components'

// Import StyledElements for basic styles
import { SectionContentCenter } from '../StyledElements/SectionStyled'

// Import helpers
import { setFlex, media } from '@helpers'

// Export Styles for the component
export const HistoryProfileWrapper = styled(SectionContentCenter)`
  ${setFlex({ flDir: 'column' })};
  width: 100%;

  ${media.greaterThan('tablet')`
    ${setFlex({ flDir: 'row', y: 'flex-start' })};
  `}
`

export const ProfileItem = styled.div`
  margin-bottom: 3rem;
  width: 100%;

  ${media.greaterThan('tablet')`
    width: 33%;
    margin-bottom: 0;
    padding: 0 1rem;
  `}
`
