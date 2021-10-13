import React from 'react'

import SimpleReactLightbox from 'simple-react-lightbox'
import { graphql, useStaticQuery } from 'gatsby'

import Gallery from '../Gallery/Gallery'

import * as S from './WorksGalleryStyled'

const WorksGallery = () => {
  const data = useStaticQuery(getDatas)
  const galleryDatas = data.galleryQuery.nodes
  return (
    <SimpleReactLightbox>
      <S.GalleryWrapper>
        <Gallery galleryDatas={galleryDatas} searchButtons />
      </S.GalleryWrapper>
    </SimpleReactLightbox>
  )
}

export default WorksGallery

export const getDatas = graphql`
  {
    galleryQuery: allAirtable(filter: { table: { eq: "Gallery" } }) {
      totalCount
      nodes {
        id
        data {
          galleryImageLegend
          galleryServices
          galleryImage {
            localFiles {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 1.3)
              }
              publicURL
            }
          }
        }
      }
    }
  }
`
