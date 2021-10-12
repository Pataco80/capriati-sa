import styled from 'styled-components'
import { SRLWrapper } from 'simple-react-lightbox'
import { setFlex, media } from '@helpers'
import { Title } from '@components'

export const Wrapper = styled.article`
  ${setFlex({ flDir: 'column' })};
  padding: 0 0 5rem;
`

export const ArticleHeader = styled.header`
  ${setFlex({ flDir: 'column', y: 'center', x: 'center' })};
`
export const ClientName = styled(Title)`
  ${setFlex({ flDir: 'column' })};
  ${media.greaterThan('smTablet')`
      ${setFlex({ flDir: 'row', y: 'baseline' })};
  `}

  & span {
    display: none;
    padding: 0 0.5rem;

    ${media.greaterThan('smTablet')`
      display:inline-block;
  `}
  }
  p {
    margin-bottom: 0;
    text-shadow: none;
  }
`

export const WorksServices = styled.div`
  ${setFlex({ flDir: 'column', x: 'center' })};
`

export const ServiceTitle = styled.p`
  margin-bottom: 0.25rem;
`

export const StackList = styled.ul`
  ${setFlex()};
  margin-bottom: 2rem;
`

export const StackItem = styled.li`
  ${setFlex({ flDir: 'column', x: 'center' })};
  padding: 0.5rem;
`

export const SectionGallery = styled.section`
  width: 100%;
  padding: 0;
`

export const GalleryWrapper = styled(SRLWrapper)`
  ${setFlex()};
  width: 100%;
`
