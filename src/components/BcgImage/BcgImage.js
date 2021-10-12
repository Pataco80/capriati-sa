import React from 'react'

// Import styles from component styled file
import * as S from './BcgImageStyled'

// Import Helpers
import { setColor } from '@helpers'

// Component
const BcgImage = (props) => {
  // Component Variables
  const { className, tag, imgPath, altBcgImage, children, error, notOverlay } =
    props
  const textAltImg = altBcgImage.replace(/-/g, ' ')
  // Render Component
  return (
    <S.BcgImageWrapper
      className={className}
      Tag={tag}
      image={imgPath}
      alt={textAltImg}
      backgroundColor={setColor.mainWhite}
      error={error}
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

export default BcgImage
