import React from 'react'
import SimpleReactLightbox from 'simple-react-lightbox'
import Gallery from '../Gallery/Gallery'
import * as S from './WorkItemStyled'

import { GatsbyImage, getImage } from 'gatsby-plugin-image'
const WorkItem = ({ workData, padBtm }) => {
  const { workName, workDescription, workServices, workGallery } = workData

  return (
    <S.Wrapper>
      <S.ArticleHeader>
        <S.ClientName tag='h5' title={workName} notPadding />
      </S.ArticleHeader>
      <S.WorksServices>
        <S.ServiceTitle>Prestations / Services :</S.ServiceTitle>
        <S.StackList>
          {workServices.map((service, i) => {
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
      <p>{workDescription}</p>
      <S.SectionGallery>
        <SimpleReactLightbox>
          <S.GalleryWrapper style={{ width: '100%' }}>
            <Gallery galleryDatas={workGallery} />
          </S.GalleryWrapper>
        </SimpleReactLightbox>
      </S.SectionGallery>
    </S.Wrapper>
  )
}

export default WorkItem
