import styled from 'styled-components'

// Import helpers
import { setFlex, setColor, media } from '@helpers'

// Export Styles for the component
export const CadreItemWrapper = styled.div`
  ${setFlex({ flDir: 'column', y: 'center' })};
  margin-bottom: 2rem;
  width: 100%;
  max-width: 25rem;
  text-align: center;
  color: ${setColor.mainBlack};

  ${media.greaterThan('tablet')`
    width: 50%;
    padding: 0 1.5rem;
  `}

  ${media.greaterThan('desktop')`
    width: 30%;
    padding: 0 1.5rem;
    margin-bottom:3rem;
  `}
`

export const CadreInfo = styled.div`
  ${setFlex({ flDir: 'column', x: 'flex-start' })};
`

export const InfoList = styled.ul`
  list-style: none;
  margin-bottom: 2rem;
`
