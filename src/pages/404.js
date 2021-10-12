import React from 'react'

// Import Components for App
import { Layout, Seo, Hero } from '@components'

// Import components from Gatsby and plugins Gatsby
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

// Import styled-components, styledElements and helpers
import styled from 'styled-components'
import { GatsbyButtonLink } from '../components/StyledElements/ButtonsStyled'
import { setFlex, setColor, media, setShadow } from '@helpers'

// GraphQl Queries
export const query = graphql`
  {
    heroBcg: file(
      relativePath: { eq: "images/banners/contact-page-banner.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
      name
    }
  }
`

// Component
const NotFoundPage = ({ data }) => {
  const bcgImage = getImage(data.heroBcg)
  const altImg = data.heroBcg.name
  // Render Component
  return (
    <Layout>
      <Seo title='404' />
      <ErrorHero
        error
        title="Page d'erreur 404"
        bcgImage={bcgImage}
        altBcgImage={altImg}
      >
        <Text className='h5'>
          La page que vous demandez n'éxiste pas, ou l'url que vous avez taper
          n'est pas valide
        </Text>
        <CallActionBtn primary to='/' title="Retour à la page d'Accueil">
          Retour à la page d'accueil
        </CallActionBtn>
      </ErrorHero>
    </Layout>
  )
}

// Styles from styled-components
const ErrorHero = styled(Hero)`
  ${setFlex({ flDir: 'column', x: 'space-around' })};
  background-color: rgba(0, 0, 0, 0.5);
`

const Text = styled.p`
  margin: 0 0 3rem;
  text-align: center;
  text-shadow: 3px 3px 3px ${setColor.mainGreyD2};

  ${media.greaterThan('tablet')`
    margin: 0 0 3rem !important;
  `}

  ${media.greaterThan('desktop')`
    font-size: 2.197rem;
    line-height: calc(2.197rem + 1vw);
    margin: calc(1.5rem + 1vw) 0;
  `}
`

const CallActionBtn = styled(GatsbyButtonLink)`
  ${setShadow('light')};
  text-align: center;

  &:hover {
    ${setShadow('dark')};
  }
`

export default NotFoundPage
