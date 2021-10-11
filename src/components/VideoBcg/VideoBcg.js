import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { useStaticQuery, graphql } from 'gatsby'

// Import Files from component
import videoMp4 from '@assets/video/paint.mp4'
import videoOgv from '@assets/video/paint.mp4'
import videoWebm from '@assets/video/paints.webm'

// Import styles from styled-components file
import * as S from './VideoBcgStyled'

// GraphQl Queries
const getImage = graphql`
  {
    posterImg: file(relativePath: { eq: "images/painting_poster_hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`
// Component
const Videobcg = ({ children }) => {
  // Component Variables
  const data = useStaticQuery(getImage)
  const poster = data.posterImg.gatsbyImageData
  // Render Component
  return (
    <S.VideoWrapper>
      <S.VideoOverlay />
      {children}
      <S.VideoComponent id='video' autoPlay loop playsInline poster={poster}>
        <source src={videoWebm} type='video/webm' />
        <source src={videoMp4} type='video/mp4' />
        <source src={videoOgv} type='video/ogg' />
        <track kind='captions' label='Video Hero' captions='Video Hero' />
      </S.VideoComponent>
    </S.VideoWrapper>
  )
}

export default Videobcg
