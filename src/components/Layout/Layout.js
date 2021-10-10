import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

// Import Components for App

// Import GlobalStyles and styles from styled-components files
import GlobalStyles from '../../theme/globalStyles'
import * as S from './LayoutStyled'

// Component
const Layout = (props) => {
  // Component Variables
  const { children } = props
  // Component Variables
  const [scrolled, setScrolled] = useState(false)

  // Hooks Effects
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 5
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled)
      }
    }
    document.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  console.log(scrolled)
  // Render Component

  return (
    <>
      <GlobalStyles />
      <S.AppWrapper>
        <S.PageContainer className={scrolled ? `isScroll` : ``}>
          <h1>Is Layout</h1>
          {children}
        </S.PageContainer>
      </S.AppWrapper>
    </>
  )
}

// React PropTypes and more...
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
