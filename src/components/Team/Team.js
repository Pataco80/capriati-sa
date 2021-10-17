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
      filter: {
        table: { eq: "Team" }
        data: { teamStatus: { eq: "encadrants" } }
      }
      sort: { fields: data___teamStatusId, order: ASC }
    ) {
      totalCount
      nodes {
        data {
          teamName
          teamJob
          teamJobDate
          teamActivity
          teamPhoto {
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
      filter: { table: { eq: "Team" }, data: { teamStatus: { eq: "cfc" } } }
    ) {
      totalCount
      nodes {
        data {
          teamName
        }
      }
    }
    teamStudents: allAirtable(
      filter: { table: { eq: "Team" }, data: { teamStatus: { eq: "student" } } }
    ) {
      totalCount
      nodes {
        data {
          teamName
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
