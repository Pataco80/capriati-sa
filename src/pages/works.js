import * as React from 'react'
// Import React Hooks
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
// Import Components for App
import { Layout, Hero } from '@components'

// markup
const WorksPage = ({ data }) => {
  const bcgImage = getImage(data.heroBcg)
  const altImg = data.heroBcg.name

  return (
    <Layout>
      <Hero title='Nos Travaux' imgPath={bcgImage} altBcgImage={altImg} />
    </Layout>
  )
}

export const query = graphql`
  {
    heroBcg: file(relativePath: { eq: "images/banners/work-page-banner.jpg" }) {
      childImageSharp {
        gatsbyImageData(formats: WEBP, layout: FULL_WIDTH, placeholder: BLURRED)
      }
      name
    }
  }
`

export default WorksPage
