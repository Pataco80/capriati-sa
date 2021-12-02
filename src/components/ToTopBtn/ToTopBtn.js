/* eslint-disable react/prop-types */
import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'

// Import Components for App
import { UpArrowAlt as Arrow } from '@styled-icons/boxicons-regular/UpArrowAlt'

// Import styledElements for basic styles
import { Button } from '../StyledElements/ButtonsStyled'

// Component
const ToTopBtn = ({ className, showBelow }) => {
  // Component Variables
  const [show, setShow] = useState(showBelow ? false : true)

  // Component functions
  const handleScroll = useCallback(() => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true)
    } else {
      if (show) setShow(false)
    }
  }, [show, showBelow])

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` })
  }

  // Hooks Effects
  useEffect(() => {
    if (showBelow) {
      window.addEventListener('scroll', handleScroll)

      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [showBelow, handleScroll])

  // Render Component
  return (
    <>
      {show && (
        <Button
          type='button'
          className={
            (show ? `isShow ${className}` : `${className}`,
            showBelow ? `showBelow ${className}` : `${className}`)
          }
          showBelow={showBelow}
          onClick={handleClick}
          title='Aller en haut'
        >
          <Arrow size={48} />
        </Button>
      )}
    </>
  )
}

// React PropTypes and more...
ToTopBtn.defaultProps = {
  showBelow: 0,
}

ToTopBtn.propTypes = {
  showBelow: PropTypes.number.isRequired,
  className: PropTypes.string,
}
export default ToTopBtn
