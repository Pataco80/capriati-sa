import React from 'react'

// Import styles from component styled file
import * as S from './ProfileStyled'

// Component
const Profile = (props) => {
  // Component Variables
  const {
    children,
    titleName,
    titleJob,
    tagName,
    tagJob,
    bossPosition,
    nameNotPadding,
    notPadding,
    tagClassName,
    className,
  } = props
  // Render Component
  return (
    <S.ProfileWrapper>
      <S.ImgContainer>{children}</S.ImgContainer>
      {titleName && (
        <S.ProfileName tag={`${tagName}`}>{titleName}</S.ProfileName>
      )}
      {titleJob && (
        <S.ProfileJob tag={`${tagJob}`} title={titleJob} padBtm='2rem' />
      )}
      {bossPosition && <S.BossPosition>{bossPosition}</S.BossPosition>}
    </S.ProfileWrapper>
  )
}

// React PropTypes and more...

export default Profile
