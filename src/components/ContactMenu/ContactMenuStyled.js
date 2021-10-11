import styled from 'styled-components'

// Import StyledElements for basic styles
import { Button, ButtonLink } from '../StyledElements/ButtonsStyled'

// Import helpers
import { setFlex, setColor, setTransition } from '@helpers'

// Export Styles for the component
export const ContactMenuWrapper = styled.div`
  ${setFlex({ x: 'flex-start' })};
`

export const ContactMenuLink = styled(ButtonLink)`
  padding: 0.25rem 0.5rem;
  color: white;
`

export const MapButton = styled(Button)`
  background: transparent;

  padding: 0.25rem 0.5rem;
  border: none;
  ${setTransition()};

  color: ${setColor.mainWhite};

  &:hover {
    background: ${setColor.primaryColor};
    border-radius: inherit;
  }
  &:focus,
  &:active {
    outline: none;
  }
`
