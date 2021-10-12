import styled from 'styled-components'

// Import StyledElements for basic styles
//import { BannerStyledCenter } from "../styledElements/BannerStyled"

// Import helpers
import { setFlex } from '@helpers'

// Export Styles for the component
export const BannerWrapper = styled.section`
  ${setFlex({ flDir: 'column' })};
`
