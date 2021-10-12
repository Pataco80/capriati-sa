import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { graphql, useStaticQuery } from 'gatsby'

// Import Components for App
import { Title, TeamCadresList, TeamTable } from '@components'

// Import styles from styled-components file
import * as S from './TeamStyled'

// GraphQl Queries
export const getData = graphql`
  {
    teamCadres: allAirtable(
      filter: { table: { eq: "team" }, data: { status: { eq: "encadrants" } } }
      sort: { fields: data___statusId, order: ASC }
    ) {
      totalCount
      nodes {
        data {
          name
          job
          jobdate
          activity
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  formats: WEBP
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    }
    teamCfc: allAirtable(
      filter: { table: { eq: "team" }, data: { status: { eq: "cfc" } } }
    ) {
      totalCount
      nodes {
        data {
          name
        }
      }
    }
    teamStudents: allAirtable(
      filter: { table: { eq: "team" }, data: { status: { eq: "student" } } }
    ) {
      totalCount
      nodes {
        data {
          name
        }
      }
    }
  }
`
// Component
const Team = ({ padding }) => {
  // Component Variables
  const data = useStaticQuery(getData)
  const teamCadres = data.teamCadres.nodes
  const teamCfc = data.teamCfc.nodes
  const teamStudents = data.teamStudents.nodes
  // Render Component
  return (
    <S.TeamWrapper padding={padding}>
      <Title tag='h2' title='Notre Équipe' />
      <S.TeamContent>
        <TeamCadresList team={teamCadres} />
      </S.TeamContent>
      <S.TeamContent>
        <TeamTable team={teamCfc} title='Nos employés avec CFC' />
        <TeamTable team={teamStudents} title='Nos apprentis' />
      </S.TeamContent>
    </S.TeamWrapper>
  )
}

export default Team
