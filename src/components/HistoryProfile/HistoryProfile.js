import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { graphql, useStaticQuery } from 'gatsby'

// Import Components for App
import { Profile } from '@components'

// Import styles from styled-components file
import * as S from './HistoryProfileStyled'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

//GraphQl Queries
export const getData = graphql`
  {
    profile: allAirtable(
      filter: { table: { eq: "team" }, data: { status: { eq: "famille" } } }
      sort: { fields: id, order: DESC }
    ) {
      nodes {
        data {
          name
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  }
`
// Component
const Historyprofile = () => {
  // Component Variables
  const data = useStaticQuery(getData)
  const profileList = data.profile.nodes

  // Render Component
  return (
    <S.HistoryProfileWrapper>
      {profileList.map((profile, index) => {
        const { image, name } = profile.data
        // Images Variables and Functions
        const imagePath = getImage(image.localFiles[0])
        // Return Profile Images
        return (
          <S.ProfileItem Key={index}>
            <Profile tagName='h4' titleName={name}>
              <GatsbyImage
                image={imagePath}
                alt={`Photo de ${name}`}
                width={250}
                height={250}
              />
            </Profile>
          </S.ProfileItem>
        )
      })}
    </S.HistoryProfileWrapper>
  )
}

export default Historyprofile
