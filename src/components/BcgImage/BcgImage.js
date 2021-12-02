import React from 'react'
import PropTypes from 'prop-types'

// Import Helpers
import { setColor } from '@helpers'

// Import styles from component styled file
import * as S from './BcgImageStyled'

// Component
const BcgImage = (props) => {
  // Component Variables
  const { imgPath, altBcgImage, children, error, notOverlay } = props
  const textAltImg = altBcgImage.replace(/-/g, ' ')

  // Render Component
  return (
    <S.BcgImageWrapper
      image={imgPath}
      alt={textAltImg}
      backgroundColor={setColor.mainWhite}
      error={error}
      className='coucou'
    >
      {error ? (
        <S.BcgImageOverlay className={notOverlay ? `notOverlay` : ``} />
      ) : (
        ''
      )}
      {children}
    </S.BcgImageWrapper>
  )
}

// React PropTypes and more...
BcgImage.propTypes = {
  image: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
}

export default BcgImage
