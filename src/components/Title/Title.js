import React from 'react'

// Import styles from styled-components file and helpers
import * as S from './TitleStyled'

// Component
const Title = (props) => {
  const { title, tag: Tag, hidden, notShadow, children } = props
  // Render Component
  return (
    <S.TitleWrapper hidden={hidden} notShadow={notShadow}>
      <Tag>{title}</Tag>
      {children}
    </S.TitleWrapper>
  )
}

// React PropTypes and more...

export default Title
