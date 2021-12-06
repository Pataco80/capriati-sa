import styled from 'styled-components'

// Import Components for App
import { Link } from 'gatsby'

// Import helpers
import {
  media,
  layout,
  setFlex,
  setPxToRem,
  setColor,
  setTransition,
  setBorder,
  setShadow,
} from '../../theme/helpers'

// Export Styles for the component
export const NavbarWrapper = styled.nav`
  padding: ${setPxToRem(8)} ${setPxToRem(16)};

  border-bottom: ${setBorder({
    size: 1,
    style: 'solid',
    color: `${setColor.primaryColor}`,
  })};
  background-color: ${setColor.mainWhite};
  width: 100vw;
  position: relative;
  top: 0;
  z-index: 1000;

  &[data-active='true'] {
    position: fixed;
    box-shadow: ${setShadow('medium')};
    top: 0;
  }
`

export const NavbarContent = styled.div`
  ${layout()};
  ${media.greaterThan('lgTablet')`
    ${setFlex({ x: 'space-between', y: 'stretch' })};
  `}
`

export const NavbarHeader = styled.div`
  ${setFlex({ x: 'space-between' })};
`
export const NavbarToggle = styled.button`
  color: ${setColor.primaryColor};
  ${setTransition()};
  border: none;
  background-color: ${setColor.mainWhite};
  padding: 0;
  margin-right: ${setPxToRem(8)};

  ${media.greaterThan('lgTablet')`
    display: none;
  `}

  &:hover {
    cursor: pointer;
  }

  ${media.greaterThan('lgTablet')`
    display:none;
  `}
`
export const NavbarNav = styled.ul`
  list-style-type: none;
  ${setTransition()};
  overflow: hidden;
  height: 0;

  &.show-nav {
    height: ${setPxToRem(300)};
    margin-bottom: 1rem;

    & a {
      opacity: 1;
    }
  }

  ${media.greaterThan('lgTablet')`
    ${setFlex()};
    height:auto;
  `}
`

export const NavbarLinks = styled(Link)`
  ${setFlex()};
  opacity: 0;
  padding: ${setPxToRem(16)} ${setPxToRem(8)};
  text-decoration: none;
  text-transform: uppercase;
  color: ${setColor.primaryColor};
  ${setTransition({ duration: 0.5 })};

  &:hover,
  &[aria-current] {
    color: ${setColor.primaryColorD1};
    span {
      border-bottom: ${setBorder({
        size: 2,
        style: 'solid',
        color: `${setColor.primaryColorD1}`,
      })};
    }
  }

  &:hover span,
  &[aria-current] span {
  }

  ${media.greaterThan('lgTablet')`
  opacity:1;
  `}
`

export const NavbarSocial = styled.ul`
  ${setFlex({ x: 'center' })};
  height: 0;
  ${media.greaterThan('lgTablet')`
  justify-content:flex-end;
  `}

  & a {
    color: ${setColor.primaryColor};
    margin: 0 ${setPxToRem(8)};
    width: 2rem;
    ${setTransition()};
    opacity: 0;

    &:hover {
      color: ${setColor.primaryColorD1};
      transform: translateY(-5px);
    }
  }
  &.show-nav {
    height: ${setPxToRem(52)};
    & a {
      opacity: 1;
    }
  }
  ${media.greaterThan('lgTablet')`
    height: auto;
    & a {
      opacity: 1;
        ${setTransition({ duration: 0 })};

    }
  `}
`

export const LogoContainer = styled(Link)`
  width: 150px;
  margin-left: ${setPxToRem(8)};
`
