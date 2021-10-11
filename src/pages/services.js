import * as React from 'react'
// Import components from Gatsby and plugins Gatsby
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

// Import Components for App
import { Layout, Seo, Hero } from '@components'

// Import styled-components, styledElements and helpers
import { setColor } from '@helpers'

// GraphQl Queries
export const query = graphql`
  {
    heroBcg: file(
      relativePath: { eq: "images/banners/services-page-banner.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
      name
    }
  }
`

// Component
const ServicesPage = ({ data }) => {
  const bcgImage = getImage(data.heroBcg)
  const altImg = data.heroBcg.name

  // Render Component
  return (
    <Layout background={`${setColor.mainGreyL3}`}>
      <Seo
        pathname='/services/'
        title='Nos Services'
        description='Liste de nos services en plâtrerie, peinture, papier-peint, giclage et fresques décoratives'
        keywords='Plâtre, crépi, papiers-peints, giclage, fresques décoratives'
        image='services'
        shareTitle='Notre expérience et qualités à votre service.'
      />
      <Hero title='Nos Services' imgPath={bcgImage} altBcgImage={altImg} />
    </Layout>
  )
}

export default ServicesPage
