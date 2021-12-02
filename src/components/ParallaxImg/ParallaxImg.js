import React from 'react'
import PropTypes from 'prop-types'

// Import Hooks
import useWindowSize from '@hooks/useWindowSize'
import { StaticImage } from 'gatsby-plugin-image'

// Import styles from styled-components file
import * as S from './ParallaxImgStyled'

// import helpers
import { breakpoints } from '@helpers'

// Component
const ParallaxImg = (props) => {
  // Component Variables
  const { altImg } = props
  const windowSize = useWindowSize()

  let strength = 150
  if (windowSize > breakpoints.tablet) {
    strength = 250
  }
  if (windowSize > breakpoints.desktop) {
    strength = 400
  }

  // Render Component
  return (
    <S.ParallaxContainer bgImageAlt={altImg} strength={strength}>
      <S.BackgroundImg>
        <S.ImageContainer>
          <StaticImage
            src='../../assets/images/banners/about-page-banner-parallax.jpg'
            alt={altImg}
            layout='fullWidth'
          />
        </S.ImageContainer>
      </S.BackgroundImg>
    </S.ParallaxContainer>
  )
}
// React PropTypes and more...

ParallaxImg.defaultProps = {
  altImg: `Photo du Paralaxe`,
}

ParallaxImg.propTypes = {
  altImg: PropTypes.string.isRequired,
}

export default ParallaxImg
