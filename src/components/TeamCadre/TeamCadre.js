import React from 'react'

// Import Components for App
import { Profile } from '@components'

// Import styles from styled-components file and helpers
import * as S from './TeamCadreStyled'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

// Component
const TeamCadre = (props) => {
  // Component Variables
  const { teamPhoto, teamName, teamJob, teamActivity, teamJobDate } = props
  const imagePath = getImage(teamPhoto.localFiles[0])
  // Render Component
  return (
    <S.CadreItemWrapper>
      <Profile tagName='h4' titleName={teamName} tagJob='h6' titleJob={teamJob}>
        <GatsbyImage image={imagePath} alt={`Photo de ${teamName}`} />
      </Profile>
      <S.CadreInfo>
        <S.InfoList
          dangerouslySetInnerHTML={{ __html: `${teamActivity}` }}
        ></S.InfoList>
        <p>{teamJobDate}</p>
      </S.CadreInfo>
    </S.CadreItemWrapper>
  )
}

export default TeamCadre
