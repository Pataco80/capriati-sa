import * as React from 'react'
// Import React Hooks

// Import components from Gatsby and plugins Gatsby
import { getImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'

// Import Components for App
import { Layout, Hero } from '@components'

// Import styled-components, styledElements and helpers
import { setColor } from '@helpers'

// GraphQl Queries
export const query = graphql`
  {
    heroBcg: file(
      relativePath: { eq: "images/banners/contact-page-banner.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(formats: WEBP, layout: FULL_WIDTH, placeholder: BLURRED)
      }
      name
    }
  }
`

// Component
const ContactPage = ({ data }) => {
  const bcgImage = getImage(data.heroBcg)
  const altImg = data.heroBcg.name

  return (
    <Layout background={`${setColor.mainGreyL3}`}>
      <Hero title='Nous Contacter' imgPath={bcgImage} altBcgImage={altImg} />
    </Layout>
  )
}

export default ContactPage
