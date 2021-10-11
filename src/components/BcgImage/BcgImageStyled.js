import styled from 'styled-components'

// Import components from Gatsby and plugins Gatsby
import { BgImage } from 'gbimage-bridge'
// Import helpers
import { setFlex, setLinearBcg } from '@helpers'

// Export Styles for the component
export const BcgImageWrapper = styled(BgImage)`
  min-height: ${(props) =>
    props.home || props.error ? 'calc(100vh - 62px)' : '50vh'};
  background-position: center;
  background-size: cover;
  ${setFlex()};
  align-self: stretch;
  justify-content: center;
  align-items: center;
  margin-bottom: ${(props) => (props.services || props.services ? '2rem' : 0)};
`

export const BcgImageOverlay = styled.span`
  display: block;
  width: 100%;
  height: 100vh;
  ${setLinearBcg({
    colStart: 'rgba(0,0,0,0.8)',
    colEtart: 'rgba(0,0,0,0.2)',
  })};
  opacity: 0.3;
  z-index: -10;
  position: absolute;

  &.notOverlay {
    ${setLinearBcg()};
  }
`
