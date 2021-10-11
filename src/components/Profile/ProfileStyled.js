import styled from 'styled-components'
import { Title } from '@components'
// Import helpers
import { setFlex, setColor, setRadius, setShadow } from '@helpers'

// Export Styles for the component
export const ProfileWrapper = styled.div`
  ${setFlex({ flDir: 'column' })};
  width: 100%;
  text-shadow: 2px 2px 2px ${setColor.mainGreyL1};
`

export const ProfileName = styled.h3`
  text-align: center;
  display: block;
  padding-bottom: 1.5rem;
`

export const ProfileJob = styled(Title)`
  text-align: center;
  text-shadow: none;
  padding-bottom: 1.5rem;
`
export const BossPosition = styled.p`
  font-size: 1.25rem;
  text-shadow: none;
`
// Export Styles for the component
export const ImgContainer = styled.div`
  width: 100%;
  max-width: 250px;
  ${setRadius({ allPc: 50 })};
  box-shadow: ${setShadow('light')};
  overflow: hidden;
`
