import React from 'react'

// Import components from Gatsby and plugins Gatsby

// Import Components for App
import WorksTabs from '../Tabs/WorksTabs'

// Import styles from styled-components file and gallery CSS file
import * as S from './WorksStyled'

const Works = ({ background }) => {
  return (
    <S.WorksWrapper background={background}>
      <S.SectionInfo>
        <p>Nous vous présentons nos réalisations au fil du temps</p>
        <p>Vous pouvez aussi accèder à notre gallerie complète par services</p>
      </S.SectionInfo>
      <WorksTabs />
    </S.WorksWrapper>
  )
}

// GraphQl Queries

export default Works
