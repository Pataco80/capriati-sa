import React from 'react'
// Import components from Gatsby and plugins Gatsby
import { graphql, useStaticQuery } from 'gatsby'

// Import Components for App
import { Title } from '@components'

// Import StyledElements for basic styles
import { SectionContentCenter } from '../StyledElements/SectionStyled'

// Import styles from styled-components file
import * as S from './ReferencesStyled'

// GraphQl Queries
export const getData = graphql`
  {
    allAirtable(
      filter: { table: { eq: "References" }, data: {} }
      sort: { fields: data___referenceId, order: ASC }
    ) {
      totalCount
      nodes {
        data {
          referenceId
          referenceName
        }
      }
    }
  }
`

// Component
const References = ({ background }) => {
  // Component Variables
  const data = useStaticQuery(getData)
  console.log(data)
  const {
    allAirtable: { nodes: references },
  } = data

  // Render Component
  return (
    <S.ReferencesWrapper background={background}>
      <Title tag='h2' title='Nos Références' />
      <SectionContentCenter>
        <ul>
          {references.map((reference) => {
            const { referenceId, referenceName } = reference.data
            return (
              <S.ReferenceItem key={referenceId}>
                {referenceName}
              </S.ReferenceItem>
            )
          })}
        </ul>
      </SectionContentCenter>
    </S.ReferencesWrapper>
  )
}

export default References
