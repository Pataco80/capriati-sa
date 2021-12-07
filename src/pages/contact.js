import * as React from 'react'

// Import React Hooks
import useSiteMetadata from '@hooks/useSiteMetadata'
import mapsSelector from '../utils/getGoogleMap'

// Import components from Gatsby and plugins Gatsby
import { getImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'

// Import Components for App
import { Layout, Seo, Hero, Title, ContactForm } from '@components'
import { PhoneAlt, Envelope } from '@styled-icons/fa-solid'
import { Map } from '@styled-icons/boxicons-regular'

import Contact from '../components/ContactForm/Contact'

// Import styled-components, styledElements and helpers
import styled from 'styled-components'
import {
  SectionContent,
  Section,
} from '../components/StyledElements/SectionStyled'
import { Button } from '../components/StyledElements/ButtonsStyled'
import { setFlex, media, setColor, setPxToRem } from '@helpers'

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
  // Component variables
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

  // Delete spaces for links
  const removeSpaces = (string) => {
    return string.replace(/\s/g, '')
  }
  const hrefPhone = `tel:${removeSpaces(businessPhone)}`
  const hrefEmail = `mailto:${businessEmail}`

  // Render Component
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

      <ContactForm />
      <ContactSection background={`${setColor.mainGreyL3}`}>
        <Title tag='h3' title='Nos Coordonées' />
        <ContactSectionContent>
          <ContactInfo>
            <Title tag='h5' title='Adresse' notMargin />
            <Title tag='h6' title={siteTitle} noShadow notMargin />
            <p>
              {businessRoad} {businessRoadNumber} <br />
              {businessZipCode} {businessCity} <br /> {businessShortCanton} -{' '}
              {businessContry}
            </p>
            <ButtonMap
              type='button'
              primary
              onClick={mapsSelector}
              title='Nous Trouver'
            >
              <MapIcon />
              Nous trouver
            </ButtonMap>
          </ContactInfo>
          <ContactInfo>
            <Title tag='h5' title='Contact' notMargin />
            <p>
              <PhoneAlt className='contactInfo-icon' /> :{' '}
              <a href={hrefPhone} title='Appelez-nous'>
                {businessPhone}
              </a>
            </p>
            <p>
              <Envelope className='contactInfo-icon' /> :{' '}
              <a href={hrefEmail} title='Ecrivez-nous un mail'>
                {businessEmail}
              </a>
            </p>
          </ContactInfo>
        </ContactSectionContent>
      </ContactSection>
    </Layout>
  )
}

// Styles from styled-components
const ContactSection = styled(Section)`
  ${setFlex({ flDir: 'column' })};

  ${media.greaterThan('smTablet')`
    ${setFlex()};
  `}
`

const ContactSectionContent = styled(SectionContent)`
  ${media.greaterThan('smTablet')`
    ${setFlex({ y: 'flex-start' })};
  `}
`

const ContactInfo = styled.div`
  ${setFlex({ flDir: 'column' })};
  width: 100%;
  text-align: center;

  &:first-child {
    margin-bottom: 4rem;
  }

  ${media.greaterThan('smTablet')`
    width: 50%;

    &:first-child {
    margin-bottom:0;
  }
  `}

  a {
    color: ${setColor.mainBlack};
  }

  .contactInfo-icon {
    display: inline-block;
    color: ${setColor.primaryColor};
    width: 1.5rem;
  }
`

const ButtonMap = styled(Button)`
  ${setFlex()};
  padding: ${setPxToRem(8)} ${setPxToRem(26)};
  margin-top: 1.5rem;
`

const MapIcon = styled(Map)`
  width: 1.6rem;
  height: auto;
`

export default ContactPage
