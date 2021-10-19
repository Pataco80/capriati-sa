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
        const { teamName, teamJob, teamActivity, teamJobDate, teamPhoto } =
          cadre.data

        // Return Team Images
        return (
          <TeamCadre
            Key={i}
            teamName={teamName}
            teamJob={teamJob}
            teamActivity={teamActivity}
            teamJobDate={teamJobDate}
            teamPhoto={teamPhoto}
            altPhoto={teamName}
          />
        )
      })}
    </S.TeamCadresWrapper>
  )
}

export default TeamCadresList
