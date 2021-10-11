import * as React from 'react'

// Import React Hooks
//import useSiteMetadata from '@hooks/useSiteMetadata'

// Import Components for App
import { Layout, Hero } from '@components'
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
  //const { siteTitle } = useSiteMetadata()
  const bcgImage = getImage(data.heroBcg)
  const altImg = data.heroBcg.name

  console.log(bcgImage)
  return (
    <Layout background={`${setColor.mainWhite}`}>
      <Hero title='A Propos de nous' imgPath={bcgImage} altBcgImage={altImg} />
    </Layout>
  )
}

export default AboutPage
