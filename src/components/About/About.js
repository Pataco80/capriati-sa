import React from 'react'
import PropTypes from 'prop-types'
// Import React Hooks
import useSiteMetadata from '@hooks/useSiteMetadata'

// Import components from Gatsby and plugins Gatsby
import { StaticImage } from 'gatsby-plugin-image'

// Import Components for App
import { Title, Profile } from '@components'

// Import styles from styled-components file and helpers
import * as S from './AboutStyled'
import { setColor } from '@helpers'

// Component
const About = (props) => {
  // Component Variables
  const { home, background } = props
  const { bossName, bossPosition } = useSiteMetadata()

  // Render Component
  return (
    <S.AboutWrapper background={background}>
      {home ? <Title tag='h2' title='A Propos de Nous' /> : ''}
      <S.AboutContent>
        <S.AboutArticle>
          <p>
            Bienvenue chez Capriati S.A, entreprise familiale spécialisée dans
            les travaux d’entretien et de rénovation depuis plus de 40 ans.
          </p>
          <p>
            Bénéficiant d’une solide expérience afin de satisfaire à vos
            exigences pour une prestation de qualité, notre équipe de
            professionnels qualifiés, motivés et passionnés se tient à votre
            disposition pour vous accompagner à la réalisation de vos projets.
          </p>
        </S.AboutArticle>
        <S.AboutAuthorContainer>
          <S.AuthorImgContainer>
            <Profile
              tagName='h3'
              tagClassName='h5'
              titleName={bossName}
              bossPosition={bossPosition}
            >
              <StaticImage
                src='../../assets/images/familly/vincentCapriati.jpg'
                alt={`Photo de ${bossName}`}
                width={250}
                height={250}
              />
            </Profile>
          </S.AuthorImgContainer>
        </S.AboutAuthorContainer>
      </S.AboutContent>
      {home ? (
        <S.AboutLink
          primary='true'
          to='/about/'
          title='Aller à la page À Propos de Nous'
          fade
          duration={1}
          hex={setColor.mainWhite}
        >
          En savoir plus
        </S.AboutLink>
      ) : (
        ''
      )}
    </S.AboutWrapper>
  )
}

// React PropTypes and more...

About.propTypes = {
  home: PropTypes.bool.toString(),
}

export default About
