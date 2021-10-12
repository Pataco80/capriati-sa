import styled from 'styled-components'

// Import StyledElements for basic styles
import { Button } from '../StyledElements/ButtonsStyled'

// Import helpers
import { setFlex, setColor, setBorder } from '@helpers'

// Export Styles for the component
export const ButtonsWrapper = styled.div`
  ${setFlex()};
`

export const ButtonService = styled(Button)`
  padding-bottom: 0.2rem;
  margin-bottom: 1rem;
  &.active {
    color: ${setColor.primaryColorD1};
    border-bottom: ${setBorder({ color: setColor.primaryColorD1 })};
  }
`
