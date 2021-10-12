import styled from 'styled-components'

// Import StyledElements for basic styles
import { Section } from '../StyledElements/SectionStyled'

// Import helpers
import { setFlex, setColor } from '@helpers'

// Export Styles for the component
export const HistoryWrapper = styled(Section)`
  ${setFlex({ flDir: 'column' })};
  background: ${setColor.mainGreyL3};
`
