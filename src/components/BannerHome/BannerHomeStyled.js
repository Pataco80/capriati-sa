import styled from 'styled-components'

// Import StyledElements for basic styles
import { BannerStyled } from '../StyledElements/BannerStyled'
import { GatsbyButtonLink } from '../StyledElements/ButtonsStyled'

// Import helpers
import { layout, setFlex, media, setShadow } from '@helpers'

// Export Styles for the component
export const BannerWrapper = styled(BannerStyled)`
  ${setFlex({ flDir: 'column' })};
  align-self: stretch;
  background-color: silver;

  ${media.greaterThan('smTablet')`
    ${setFlex({ flDir: 'column', x: 'flex-start', y: 'space-around' })};
    flex-direction: column;
  `}

  ${media.greaterThan('lgTablet')`
    padding: 2rem 4rem;
  `}

  ${media.greaterThan('desktop')`
    padding: 6rem;
  `}
`

export const LayoutSection = styled.div`
  ${layout()};
  ${setFlex({ flDir: 'column', x: 'center', y: 'center' })};
  align-content: flex-end;
  position: relative;
  padding-bottom: 4rem;
  width: 100%;
  z-index: 2;

  ${media.greaterThan('mobile')`
    padding-bottom: 6rem;
  `}

  ${media.greaterThan('smTablet')`
    ${setFlex({ x: 'space-around', y: 'space-around' })};
    padding-bottom: 8rem;
    align-self: flex-end;
  `}
`

export const CallActionBtn = styled(GatsbyButtonLink)`
  box-shadow: ${setShadow('medium')};
  text-align: center;
  margin: 2rem 0.5rem 0 0.5rem;

  &:hover {
    box-shadow: ${setShadow('dark')};
  }

  ${media.greaterThan('mobile')`
    margin: 3rem 0.5rem 0 0.5rem;
  `}
`

export const Description = styled.div`
  ${setFlex({ x: 'flex-end', y: 'flex-end' })};
  width: 100%;
  margin-bottom: 1rem;

  ${media.greaterThan('tablet')`
    margin-bottom: 4rem;
  `}
`

export const Text = styled.p`
  text-align: right;
  padding: 0 1rem;
  text-shadow: ${setShadow('medium')};
`

export const LogoWrapper = styled.div`
  ${setFlex({ x: 'flex-start' })};
  align-self: flex-start;
  width: 100%;
  max-width: 500px;
  z-index: 2;
`
