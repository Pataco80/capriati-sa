import React from 'react'
import PropTypes from 'prop-types'

// Import Hooks
import useDeviceDetect from '@hooks/useDeviceDetect'
import useSiteMetadata from '@hooks/useSiteMetadata'

// Import components from Gatsby and plugins Gatsby
import { StaticImage } from 'gatsby-plugin-image'

// Import Components for App
import { FooterMenu } from '@components'

// Import StyledElements for basic styles
import { Section, SectionCenter } from '@styledElements/SectionStyled'

// Import styles from styled-components file
import { setColor } from '@helpers'
import * as S from './FooterStyled'

// GraphQl Queries

// Component
const Footer = ({ background }) => {
  // Component Variables
  const { copyright, conceptorWebSite } = useSiteMetadata()
  const { isMobile } = useDeviceDetect()
  // Render Component
  return (
    <S.FooterWrapper paddingBottom={isMobile ? `4rem` : `0`}>
      <Section
        padding='0'
        background={background ? background : setColor.mainWhite}
      >
        <StaticImage
          src='../../assets/images/footerBande.png'
          alt='Banière colorée'
        />
      </Section>
      <SectionCenter background='transparent'>
        <FooterMenu />
        <S.Text>{copyright} - Tous droits réservés.</S.Text>
        <S.Text>Site développé par {conceptorWebSite}</S.Text>
      </SectionCenter>
    </S.FooterWrapper>
  )
}
// React PropTypes and more..
Footer.propTypes = {
  background: PropTypes.string,
}
export default Footer
