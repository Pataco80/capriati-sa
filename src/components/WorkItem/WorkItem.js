import React from 'react'
import SimpleReactLightbox from 'simple-react-lightbox'
import Gallery from '../Gallery/Gallery'

import * as S from './WorkItemStyled'

import { GatsbyImage, getImage } from 'gatsby-plugin-image'
const WorkItem = ({ workData, padBtm }) => {
  const {
    clientName,
    clientCity,
    clientDescription,
    clientServices,
    clientGallery,
  } = workData
  return (
    <S.Wrapper>
      <S.ArticleHeader>
        <S.ClientName tag='h5' title={clientName} notPadding>
          <span>{'-'}</span>
          <p>{clientCity}</p>
        </S.ClientName>
      </S.ArticleHeader>
      <S.WorksServices>
        <S.ServiceTitle>Prestations / Services :</S.ServiceTitle>
        <S.StackList>
          {clientServices.map((service, i) => {
            const { serviceName, serviceIcon } = service.data
            const imgPath = getImage(serviceIcon.localFiles[0])
            const imgName = serviceIcon.localFiles[0].name

            return (
              <S.StackItem Key={i}>
                <GatsbyImage image={imgPath} alt={imgName} />
                <span>{serviceName}</span>
              </S.StackItem>
            )
          })}
        </S.StackList>
      </S.WorksServices>
      <p>{clientDescription}</p>
      <S.GallerySection>
        <SimpleReactLightbox>
          <S.GalleryWrapper style={{ width: '100%' }}>
            <Gallery galleryDatas={clientGallery} />
          </S.GalleryWrapper>
        </SimpleReactLightbox>
      </S.GallerySection>
    </S.Wrapper>
  )
}

export default WorkItem
