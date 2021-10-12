import React from 'react'

// Import Components for App
import { TeamCadre } from '@components'

// Import styles from styled-components file
import * as S from './TeamCadresListStyled'

// Component
const TeamCadresList = ({ team }) => {
  // Component Variables

  // Render Component
  return (
    <S.TeamCadresWrapper>
      {team.map((cadre, i) => {
        // Images Variables and Functions
        const { name, job, activity, jobdate, image } = cadre.data

        // Return Team Images
        return (
          <TeamCadre
            Key={i}
            name={name}
            job={job}
            activity={activity}
            jobdate={jobdate}
            image={image}
            altPhoto={name}
          />
        )
      })}
    </S.TeamCadresWrapper>
  )
}

export default TeamCadresList
