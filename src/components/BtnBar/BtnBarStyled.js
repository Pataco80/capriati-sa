import styled from 'styled-components'

// Import helpers
import {
  setFlex,
  setRadius,
  setPxToRem,
  setColor,
  setTransition,
  media,
} from '@helpers'

// Export Styles for the component
export const BtnBarWrapper = styled.section`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 4rem;
  background-color: ${setColor.primaryColor};
  z-index: 200;
  color: ${setColor.mainWhite};

  &.desktop {
    position: relative;
    height: 0;
  }
`
// Mobile
export const MobileWrapper = styled.div`
  ${setFlex({ flDir: 'column' })};
  position: relative;
  ${setTransition()};
`

export const MenuMobileCantainer = styled.div`
  height: 0rem;
  width: 100%;
  padding: 1rem;
  position: absolute;
  bottom: 1.5rem;
  z-index: -10;
  ${setTransition()};
  background-color: ${setColor.primaryColor};

  &.show-nav {
    height: 7rem;
  }
`

// Desktop
export const DesktopWrapper = styled.div`
  ${setFlex({ flDir: 'column' })};
  position: fixed;
  bottom: 70vw;
  height: auto;
  width: auto;
  padding: ${setPxToRem(16)} ${setPxToRem(4)};
  z-index: 200;
  right: 1rem;

  ${media.greaterThan('tablet')`
    right:1rem;
    bottom:30vw;
  `}

  ${media.greaterThan('desktop')`
    bottom:20vw;
  `}
`

export const MenuDesktopCantainer = styled.div`
  ${setFlex({ flDir: 'column' })};
  width: auto;
  position: relative;
  right: inherit;

  &.show-nav {
    height: auto;
  }
`

// Global Mobile and Desktop
export const ButtonsContainer = styled.div`
  ${setFlex({ flDir: 'row' })};
  width: 100%;
  background-color: ${setColor.primaryColor};

  &.desktop {
    ${setFlex({ flDir: 'column' })};
    opacity: 0.8;
    ${setRadius({ allPx: 8 })};
    position: absolute;
    bottom: 0;
    right: 0;

    &:hover {
      opacity: 1;
    }

    .btnIconBar {
      background-color: ${setColor.primaryColor};

      &:hover {
        background: ${setColor.primaryColorD1};
        ${setRadius({ allPx: 8 })};
        z-index: 20;
      }
    }

    .to-top {
      position: absolute;
      top: 36px;
    }

    .btnIconBar.isShow {
      position: relative;
    }
  }
`
