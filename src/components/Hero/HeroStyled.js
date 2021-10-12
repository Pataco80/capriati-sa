import styled from 'styled-components'

// Import helpers
import { setFlex } from '@helpers'

// Export Styles for the component
export const HeroWrapper = styled.section`
  min-height: ${(props) =>
    props.home || props.error ? 'calc(100vh - 56px)' : '50vh'};
  position: relative;
  ${setFlex({ flDir: 'column', wrap: 'nowrap' })};
  width: 100vw;
  overflow: hidden;
`
