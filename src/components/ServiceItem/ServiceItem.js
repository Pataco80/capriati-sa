import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { getImage } from 'gatsby-plugin-image'

// Import Components for App
import { GalleryItem } from '@components'

// Import styles from styled-components file and helpers
import * as S from './ServiceItemStyled'

// Component
const ServiceItem = (props) => {
  // Component Variables
  const {
    id,
    name,
    altIcon,
    altFeatured,
    icon,
    serviceFeatureImg,
    description,
    gallery,
    home,
  } = props
  const featuredImgPath = getImage(serviceFeatureImg.localFiles[0])
  console.log(props)

  // Render Component
  return (
    <S.ServiceWrapper id={id}>
      <S.ServiceHeader>
        <S.ServiceBcgImage
          imgPath={featuredImgPath}
          notOverlay
          altBcgImage={altFeatured}
        >
          <S.ServiceBanner>
            <S.BannerContent>
              <S.IconContainer>
                <S.ServiceIcon alt={altIcon} image={icon} />
              </S.IconContainer>
              <h3>{name}</h3>
            </S.BannerContent>
          </S.ServiceBanner>
        </S.ServiceBcgImage>{' '}
      </S.ServiceHeader>
      <S.ServiceBody
        padding='0'
        dangerouslySetInnerHTML={{ __html: `${description}` }}
      ></S.ServiceBody>

      {!home && (
        <S.GallerySection padding='3rem 0 5rem'>
          {gallery.map((item, index) => {
            const image = getImage(item.localFiles[0])
            const altImg = item.localFiles[0].name
            // Return Gallery Images
            return (
              <GalleryItem
                serviceImage
                Key={index}
                image={image}
                alt={altImg}
                serviceImgGallery
              />
            )
          })}
        </S.GallerySection>
      )}
    </S.ServiceWrapper>
  )
}

export default ServiceItem
