import styled from 'styled-components'
import { Button } from '../StyledElements/ButtonsStyled'
import { setFlex, media } from '@helpers'

export const ButtonList = styled.ul`
  ${setFlex({ flDir: 'column' })};
  margin-bottom: 2rem;

  ${media.greaterThan('smTablet')`
      ${setFlex({ flDir: 'row', x: 'space-around' })};
        margin-bottom:3rem;

  `}
`

export const TabButton = styled(Button)`
  margin: 0 1rem 1rem;

  ${media.greaterThan('smTablet')`
    margin: 0 2rem 1rem;
  `}

  ${media.greaterThan('tablet')`
    margin: 0 5rem 1rem;
  `}
`
