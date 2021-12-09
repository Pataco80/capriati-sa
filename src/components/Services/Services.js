import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { useStaticQuery, graphql } from 'gatsby'
// Import Components for App
import { Title, ServiceItem, ServiceItemCard } from '@components'
import { getImage } from 'gatsby-plugin-image'

// Import styles from styled-components file
import * as S from './ServicesStyled'

// GraphQl Queries
export const getData = graphql`
  {
    services: allAirtable(
      filter: { table: { eq: "Services" } }
      sort: { fields: data___serviceId, order: ASC }
    ) {
      totalCount
      nodes {
        data {
          serviceId
          serviceName
          serviceDescriptions
          serviceIcon {
            ...AirtableImgParams
          }
          serviceImg1 {
            ...AirtableImgParams
          }
          serviceImg2 {
            ...AirtableImgParams
          }
          serviceImg3 {
            ...AirtableImgParams
          }
          serviceFeatureImg {
            ...AirtableImgParams
          }
        }
      }
    }
  }

  fragment AirtableImgParams on AirtableField {
    localFiles {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
      name
    }
  }
`
// Component
const Services = (props) => {
  // Component Variables
  const { home, background, padding } = props
  const data = useStaticQuery(getData)
  const servicesList = data.services.nodes
  // Render Component
  return (
    <S.ServicesWrapper background={background} padding={padding}>
      {home ? <Title tag='h2' title='Nos Services' /> : ''}
      <S.ServicesContent padding='0'>
        {servicesList.map((service, index) => {
          const {
            serviceId,
            serviceName,
            serviceIcon,
            serviceFeatureImg,
            serviceDescriptions,
            serviceImg1,
            serviceImg2,
            serviceImg3,
          } = service.data
          const icon = getImage(serviceIcon.localFiles[0])
          const gallery = [serviceImg1, serviceImg2, serviceImg3]

          return home ? (
            <ServiceItemCard
              id={serviceId}
              Key={index}
              icon={icon}
              name={serviceName}
              altIcon={`${serviceName} icon`}
              description={`${serviceDescriptions}`}
              home={home}
            />
          ) : (
            <ServiceItem
              Key={index}
              id={serviceId}
              icon={icon}
              name={serviceName}
              altIcon={`${serviceName} icon`}
              serviceFeatureImg={serviceFeatureImg}
              altFeatured={`${serviceName} banner`}
              description={`${serviceDescriptions}`}
              gallery={gallery}
            />
          )
        })}
      </S.ServicesContent>
    </S.ServicesWrapper>
  )
}

export default Services
