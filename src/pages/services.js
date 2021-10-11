import * as React from 'react'
// Import components from Gatsby and plugins Gatsby
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

// Import Components for App
import { Layout, Hero } from '@components'

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
      <Hero title='Nos Services' imgPath={bcgImage} altBcgImage={altImg} />
    </Layout>
  )
}

export default ServicesPage
