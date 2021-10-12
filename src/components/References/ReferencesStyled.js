import styled from 'styled-components'

// Import StyledElements for basic styles
import { Section } from '../StyledElements/SectionStyled'

// Import helpers
import { setFlex } from '@helpers'

// Export Styles for the component
export const ReferencesWrapper = styled(Section)`
  ${setFlex({ flDir: 'column' })};
  padding-bottom: 3rem;
`

export const ReferenceItem = styled.li`
  margin-bottom: 1rem;
`
