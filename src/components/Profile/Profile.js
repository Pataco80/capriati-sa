import React from 'react'
import PropTypes from 'prop-types'

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
  } = props
  // Render Component
  return (
    <S.ProfileWrapper>
      <S.ImgContainer>{children}</S.ImgContainer>
      {titleName && (
        <S.ProfileName
          notPadding={notPadding}
          tag={`${tagName}`}
          title={titleName}
          tagClassName={tagClassName}
          nameNotPadding={nameNotPadding}
        />
      )}
      {titleJob && (
        <S.ProfileJob tag={`${tagJob}`} title={titleJob} padBtm='2rem' />
      )}
      {bossPosition && <S.BossPosition>{bossPosition}</S.BossPosition>}
    </S.ProfileWrapper>
  )
}

// React PropTypes and more...
Profile.defaultProps = {
  tag: `h4`,
  title: `Nom du profil`,
  tagJob: `h6`,
}

Profile.propTypes = {
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tagJob: PropTypes.string,
  titleJob: PropTypes.string,
}

export default Profile
