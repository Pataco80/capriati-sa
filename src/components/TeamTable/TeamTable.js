import React from 'react'

// Import Components for App
import { Title } from '@components'

// Import styles from styled-components file
import * as S from './TeamTableStyled'

const TeamTable = ({ team, title }) => {
  // Render Component
  return (
    <S.TeamWrapper>
      <Title tag='h3' notPadding title={title} />
      <ul>
        {team.map((item, i) => {
          const { teamName } = item.data
          return <S.TeamItem key={i}>{teamName}</S.TeamItem>
        })}
      </ul>
    </S.TeamWrapper>
  )
}

export default TeamTable
