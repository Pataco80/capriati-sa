import React from 'react'

// Import Hooks
//import { useWindowSize } from "@hooks"

// Import components from Gatsby and plugins Gatsby
// Import Components for App
import { GalleryItem } from '@components'
// Import styles from styled-components file and helpers
import * as S from './ServiceItemStyled'
import { getImage } from 'gatsby-plugin-image'
//import { breakpoints } from "@helpers"

// GraphQl Queries

// Component
const ServiceItem = ({
  name,
  altIcon,
  altFeatured,
  icon,
  serviceFeatureImg,
  description,
  gallery,
  home,
}) => {
  // Component Variables
  //const windowSize = useWindowSize()
  //const toHero = breakpoints.smTablet
  const featuredImgPath = getImage(serviceFeatureImg.localFiles[0])
  // Component Functions
  // Render Component
  return (
    <S.ServiceWrapper>
      <S.ServiceHeader>
        <S.ServiceBcgImage
          imgPath={featuredImgPath}
          notOverlay
          altBcgImage={altFeatured}
        >
          <S.ServiceBanner>
            <S.BannerContent>
              <S.IconContainer>
                <S.ServiceIcon name={name} alt={altIcon} image={icon} />
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
            return <GalleryItem Key={index} image={image} alt={altImg} />
          })}
        </S.GallerySection>
      )}
    </S.ServiceWrapper>
  )
}

export default ServiceItem
