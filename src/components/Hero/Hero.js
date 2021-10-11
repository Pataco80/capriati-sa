import React from 'react'

// Import Components for App
import { Banner, BannerHome, BcgImage, VideoBcg } from '@components'

// Import styles from component styled file
import * as S from './HeroStyled'

// Component
const Hero = (props) => {
  // Component variables
  const { home, error, title, imgPath, altBcgImage, children } = props
  // Render Component
  return (
    <>
      {home ? (
        <S.HeroWrapper home={home}>
          <VideoBcg />
          <BannerHome />
        </S.HeroWrapper>
      ) : (
        <S.HeroWrapper error={error}>
          <BcgImage imgPath={imgPath} altBcgImage={altBcgImage} error={error}>
            <Banner title={title}>{children}</Banner>
          </BcgImage>
        </S.HeroWrapper>
      )}
    </>
  )
}

// React PropTypes and more...
export default Hero
