import React from 'react'

// Import Components for App
import { Profile } from '@components'

// Import styles from styled-components file and helpers
import * as S from './TeamCadreStyled'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

// Component
const TeamCadre = (props) => {
  // Component Variables
  const { image, name, job, activity, jobdate } = props
  const imagePath = getImage(image.localFiles[0])
  // Render Component
  return (
    <S.CadreItemWrapper>
      <Profile tagName='h4' titleName={name} tagJob='h6' titleJob={job}>
        <GatsbyImage
          image={imagePath}
          alt={`Photo de ${name}`}
          width={250}
          height={250}
        />
      </Profile>
      <S.CadreInfo>
        <S.InfoList
          dangerouslySetInnerHTML={{ __html: `${activity}` }}
        ></S.InfoList>
        <p>{jobdate}</p>
      </S.CadreInfo>
    </S.CadreItemWrapper>
  )
}

export default TeamCadre
