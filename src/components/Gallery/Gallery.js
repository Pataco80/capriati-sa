import React from 'react'
import PropTypes from 'prop-types'

// Import components from Gatsby and plugins Gatsby
import { getImage } from 'gatsby-plugin-image'

// Import Components for App
//import { SearchButtons, GalleryItem } from '@components'
import SearchButtons from '../SearchButtons/SearchButtons'
import GalleryItem from '../GalleryItem/GalleryItem'

// Import styles from styled-components file and helpers
import * as S from './GalleryStyled'

// Component
const Gallery = ({ galleryDatas: data = [], searchButtons }) => {
  // Component Variables
  const [galleryDatas, setGalleryDatas] = React.useState(data)

  // Component Functions
  const setBackToAll = () => {
    setGalleryDatas(data)
  }

  // Render Component
  return (
    <S.GallerySection>
      <S.ButtonsContainer style={{ width: '100%' }}>
        {searchButtons && (
          <SearchButtons
            galleryDatas={data}
            setGalleryDatas={setGalleryDatas}
            setBackToAll={setBackToAll}
          />
        )}
      </S.ButtonsContainer>

      {galleryDatas.map((item, i) => {
        // Extract datas to gallery
        const { galleryImageLegend, galleryImage, name } = item.data
        const image = getImage(galleryImage.localFiles[0])
        const publicURL = galleryImage.localFiles[0].publicURL

        // Render Gallery Image
        return (
          <GalleryItem
            Key={i}
            image={image}
            alt={galleryImageLegend || name}
            toLightbox={publicURL}
          />
        )
      })}
    </S.GallerySection>
  )
}

// React PropTypes and more...
Gallery.propTypes = {
  galleryDatas: PropTypes.array.isRequired,
}
export default Gallery
