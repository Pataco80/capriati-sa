import styled from 'styled-components'

// Import helpers
import { setColor, media } from '@helpers'

// Export Styles for the component

export const FooterWrapper = styled.footer`
  background-color: ${setColor.primaryColor};
  padding-bottom: ${(props) =>
    props.paddingBottom ? props.paddingBottom : `3rem`};

  .bcgImage {
    position: relative;
    bottom: -5px;
  }

  ${media.greaterThan('desktop')`
      padding-bottom: ${(props) =>
        props.paddingBottom ? props.paddingBottom : `1rem`}
  `}
`

export const Text = styled.p`
  margin: 2rem 0 0 0;
  color: ${setColor.mainWhite};
  text-align: center;
`
