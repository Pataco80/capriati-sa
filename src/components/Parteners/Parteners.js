import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

// Import Components for App
import { Title } from '@components'

// Import styles from styled-components file
import * as S from './PartenersStyled'
import { getImage } from 'gatsby-plugin-image'

// GraphQl Queries
const getData = graphql`
  {
    parteners: allAirtable(
      filter: { table: { eq: "Partenaires" } }
      sort: { fields: data___partenaireId, order: ASC }
    ) {
      nodes {
        data {
          partenaireName
          partenaireUrl
          partenaireLabel
          partenaireLogo {
            localFiles {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
`
// Component
const Parteners = () => {
  // Component Variables
  const data = useStaticQuery(getData)
  const partenersList = data.parteners.nodes

  // Render Component
  return (
    <S.PartenersWrapper>
      <Title tag='h2' title='Nous sommes membres' />
      <S.PartenersLogosContainer>
        {partenersList.map((item, i) => {
          const { name, url, label, partenaireLogo } = item.data
          const logoPath = getImage(partenaireLogo.localFiles[0])
          // Return Item on Card or page format
          return (
            <S.PartenersItemWrapper href={url} title={label} target='_blank'>
              <GatsbyImage image={logoPath} alt={name} />
            </S.PartenersItemWrapper>
          )
        })}
      </S.PartenersLogosContainer>
    </S.PartenersWrapper>
  )
}

export default Parteners
