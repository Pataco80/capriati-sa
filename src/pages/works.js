import * as React from 'react'
// Import React Hooks
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
// Import Components for App
import { Layout, Seo, Hero } from '@components'

// markup
const WorksPage = ({ data }) => {
  const bcgImage = getImage(data.heroBcg)
  const altImg = data.heroBcg.name

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
    </Layout>
  )
}

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

export default WorksPage
