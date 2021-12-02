import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

// Import Components for App
import SimpleReactLightbox from 'simple-react-lightbox'
import Gallery from '../Gallery/Gallery'

// Import styles from styled-components file
import * as S from './WorkItemStyled'

// Component
const WorkItem = ({ workData }) => {
  // Component variables
  const { workName, workDescription, workServices, workGallery } = workData

  // Render component
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
