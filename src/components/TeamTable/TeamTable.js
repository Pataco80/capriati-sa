import React from 'react'
import PropTypes from 'prop-types'

// Import Components for App
import { Title } from '@components'

// Import styles from styled-components file
import * as S from './TeamTableStyled'

// Component
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

TeamTable.defaultProps = {
  title: `Liste d'employés`,
}

TeamTable.propTypes = {
  title: PropTypes.string.isRequired,
}

export default TeamTable
