import React from 'react'

// Import Components for App
import { Title, HistoryProfile, Historical } from '@components'

// Import styles from styled-components file
import * as S from './HistoryStyled'

// Component
const History = () => {
  // Render Component
  return (
    <S.HistoryWrapper>
      <Title tag='h2' title='Notre Histoire' />
      <HistoryProfile />
      <Historical />
    </S.HistoryWrapper>
  )
}

export default History
