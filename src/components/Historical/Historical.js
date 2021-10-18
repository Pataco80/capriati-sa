import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { graphql, useStaticQuery } from 'gatsby'

// Import Components for App
import { Title } from '@components'

// Import styles from styled-components file
import * as S from './HistoricalStyled'

// GraphQl Queries
export const getData = graphql`
  {
    historique: allAirtable(
      filter: { table: { eq: "Historique" } }
      sort: { fields: data___historiqueDate, order: ASC }
    ) {
      totalCount
      nodes {
        data {
          historiqueDate
          historiqueDescription
        }
      }
    }
  }
`

// Component
const Historical = () => {
  // Component Variables
  const data = useStaticQuery(getData)
  const historiqueList = data.historique.nodes

  // Render Component
  return (
    <S.HistoricalWrapper>
      <Title tag='h3' title='Historique' />
      <S.HistoricalTable>
        {historiqueList.map((item, i) => {
          const { historiqueDate, historiqueDescription } = item.data

          // Return Historic Items
          return (
            <S.HistoricalItem Key={i}>
              <S.HistoricalDate>{historiqueDate}</S.HistoricalDate>
              <S.HistoricaText>{historiqueDescription}</S.HistoricaText>
            </S.HistoricalItem>
          )
        })}
      </S.HistoricalTable>
    </S.HistoricalWrapper>
  )
}

export default Historical
