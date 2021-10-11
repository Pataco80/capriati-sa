import * as React from 'react'

// Import React Hooks
import useSiteMetadata from '@hooks/useSiteMetadata'

// Import components from Gatsby and plugins Gatsby
import { getImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'

// Import Components for App
import { Layout, Seo, Hero } from '@components'

// Import styled-components, styledElements and helpers
import { setColor } from '@helpers'

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
const ContactPage = ({ data }) => {
  const bcgImage = getImage(data.heroBcg)
  const altImg = data.heroBcg.name
  const {
    siteTitle,
    businessRoad,
    businessRoadNumber,
    businessZipCode,
    businessCity,
    businessShortCanton,
    businessContry,
    businessPhone,
    businessEmail,
  } = useSiteMetadata()

  return (
    <Layout background={`${setColor.mainGreyL3}`}>
      <Seo
        pathname='/contact/'
        title='Nous Contacter'
        description={`Contactez l'entreprise ${siteTitle}.`}
        keywords='Nous contacter, formulaire de contact, Nos Coordonées, téléphone, e-mail'
        image='contact'
        shareTitle='Contactez-nous, nous sommes à votre entière disposition.'
      />
      <Hero title='Nous Contacter' imgPath={bcgImage} altBcgImage={altImg} />
    </Layout>
  )
}

export default ContactPage
