import * as React from 'react'
// Import React Hooks
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
// Import Components for App
import { Layout, Seo, Hero, References, Works } from '@components'

// GraphQl Queries
export const query = graphql`
  {
    heroBcg: file(relativePath: { eq: "images/banners/work-page-banner.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
      name
    }
  }
`

// Component
const WorksPage = ({ data }) => {
  // Component variables
  const bcgImage = getImage(data.heroBcg)
  const altImg = data.heroBcg.name

  // Render Component
  return (
    <Layout>
      <Seo
        pathname='/works/'
        title='Nos Travaux'
        description='Nos travaux éféctués au fil des années'
        keywords='nos travaux, nos références, gallerie'
        image='work'
        shareTitle='Nos réalisations... pour vos inspirations.'
      />
      <Hero title='Nos Travaux' imgPath={bcgImage} altBcgImage={altImg} />
      <Works />
      <References />
    </Layout>
  )
}

export default WorksPage
