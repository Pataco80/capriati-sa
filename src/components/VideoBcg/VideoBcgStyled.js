import styled from 'styled-components'

// Import helpers
import { setLinearBcg, setFlex } from '@helpers'

// Export Styles for the component
export const VideoWrapper = styled.div`
  width: 100%;
  ${setFlex({ flDir: 'column' })};
  min-height: 100vh;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
`

export const VideoOverlay = styled.span`
  display: block;
  width: 100%;
  height: 100%;
  ${setLinearBcg({
    colStart: 'rgba(0,0,0,0.7)',
    colEtart: 'rgba(0,0,0,0.2)',
  })};
  opacity: 0.3;
  z-index: 1;
`
export const VideoComponent = styled.video`
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  height: 100%;
  object-fit: cover;
`
