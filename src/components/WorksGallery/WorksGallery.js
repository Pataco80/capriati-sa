import React from 'react'

import SimpleReactLightbox from 'simple-react-lightbox'
import { graphql, useStaticQuery } from 'gatsby'

import Gallery from '../Gallery/Gallery'

import * as S from './WorksGalleryStyled'

const WorksGallery = () => {
  const data = useStaticQuery(getDatas)
  const galleryDatas = data.galleryQuery.nodes
  console.log(data)
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
    galleryQuery: allAirtable(filter: { table: { eq: "Gallerie" } }) {
      nodes {
        data {
          galleryImageLegend
          galleryService
          galleryImage {
            localFiles {
              childImageSharp {
                gatsbyImageData(
                  formats: WEBP
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                )
              }
              publicURL
            }
          }
        }
      }
    }
  }
`
