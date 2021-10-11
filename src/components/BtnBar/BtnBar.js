import React from 'react'

// Import Hooks
import useDeviceDetect from '@hooks/useDeviceDetect'

// Import Components for App
import { ContactMenu, ToTopBtn } from '@components'

// Import styles from styled-components file
import * as S from './BtnBarStyled'

// Component
const BtnBar = () => {
  // component variables
  const { isMobile } = useDeviceDetect()

  // Render Componentv
  return (
    <>
      {isMobile && (
        <S.BtnBarWrapper>
          <S.MobileWrapper>
            <S.ButtonsContainer>
              <ContactMenu />
              <ToTopBtn className='btnIconBar' />
            </S.ButtonsContainer>
          </S.MobileWrapper>
        </S.BtnBarWrapper>
      )}
      {!isMobile && (
        <S.BtnBarWrapper className='desktop'>
          <S.DesktopWrapper>
            <S.MenuDesktopCantainer>
              <S.ButtonsContainer className='desktop'>
                <ToTopBtn showBelow={500} className='btnIconBar to-top' />
              </S.ButtonsContainer>
            </S.MenuDesktopCantainer>
          </S.DesktopWrapper>
        </S.BtnBarWrapper>
      )}
    </>
  )
}

export default BtnBar
