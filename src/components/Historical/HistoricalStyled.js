import styled from 'styled-components'

// Import StyledElements for basic styles
import { SectionContentCenter } from '../StyledElements/SectionStyled'

// Import helpers
import { setFlex, media } from '@helpers'

// Export Styles for the component
export const HistoricalWrapper = styled(SectionContentCenter)`
  ${setFlex({ flDir: 'column' })};
  padding-top: 2rem;
`

export const HistoricalTable = styled.table`
  ${setFlex({ flDir: 'column' })};
`

export const HistoricalItem = styled.tr`
  ${setFlex({ flDir: 'column' })};
  width: 100%;
  margin-bottom: 2.5rem;

  ${media.greaterThan('tablet')`
    ${setFlex({
      flDir: 'row',
      x: 'flex-start',
      y: 'flex-start',
      wrap: 'nowrap',
    })};
    margin-bottom: 1.5rem;
  `}

  &:last-child {
    margin-bottom: 0;
  }
`

export const HistoricalDate = styled.td`
  ${media.greaterThan('tablet')`
    margin-right: 1rem;
  `}
`

export const HistoricaText = styled.td`
  margin-top: 1rem;
  ${media.greaterThan('tablet')`
    margin: 0;
  `}
`
