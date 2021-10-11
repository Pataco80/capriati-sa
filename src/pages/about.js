import * as React from 'react'

// Import React Hooks
import useSiteMetadata from '@hooks/useSiteMetadata'

// Import Components for App
import { Layout, Seo, Hero, About, Team } from '@components'
// Import components from Gatsby and plugins Gatsby
import { getImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
// Import styled-components, styledElements and helpers
import { setColor } from '@helpers'

// GraphQl Queries
export const query = graphql`
  {
    heroBcg: file(
      relativePath: { eq: "images/banners/about-page-banner.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
      name
    }
  }
`

// markup
const AboutPage = ({ data }) => {
  const { siteTitle } = useSiteMetadata()
  const bcgImage = getImage(data.heroBcg)
  const altImg = data.heroBcg.name

  return (
    <Layout background={`${setColor.mainWhite}`}>
      <Seo
        pathname='/about/'
        title='A Propos de Nous'
        description="A Propos de l'entrerise Capriati S.A., son histoire, son équipe et ces partenaires"
        keywords={[
          'A Propos',
          'entreprise peinture',
          'entreprise familiale',
          'entretien',
          'rénovation peinture',
          'historique',
        ]}
        image='about'
        shareHashTag={`#${siteTitle}`}
        shareTitle='Notre entreprise'
      />
      <Hero title='A Propos de nous' imgPath={bcgImage} altBcgImage={altImg} />
      <About />
      <Team />
    </Layout>
  )
}

export default AboutPage
