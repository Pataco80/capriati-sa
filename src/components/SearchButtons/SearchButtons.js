import React, { useState } from 'react'
import PropTypes from 'prop-types'

// Import styles from component styled file
import * as S from './SearchButtonsStyled'

// Component
const SearchButtons = ({ galleryDatas, setGalleryDatas, setBackToAll }) => {
  // Component Variables
  const [index, setIndex] = useState(0)

  // Create category list
  const categories = [
    'Tout voir',
    ...new Set(
      galleryDatas.map((gallery) => {
        return gallery.data.galleryService
      })
    ),
  ]

  // Function for component
  const showgalleryDatas = (galleryService, serviceIndex) => {
    setIndex(serviceIndex)
    if (galleryService === 'Tout voir') {
      setBackToAll()
    } else {
      const tempGalleryDatas = galleryDatas.filter(
        (gallery) => gallery.data.galleryService === galleryService
      )
      setGalleryDatas(tempGalleryDatas)
    }
  }

  // Render Component
  return (
    <S.ButtonsWrapper>
      {categories.map((galleryService, serviceIndex) => {
        return (
          <S.ButtonService
            outline
            small
            notRadius
            Key={serviceIndex}
            className={index === serviceIndex ? 'active' : undefined}
            onClick={() => showgalleryDatas(galleryService, serviceIndex)}
          >
            {galleryService}
          </S.ButtonService>
        )
      })}
    </S.ButtonsWrapper>
  )
}

// React PropTypes and more...
SearchButtons.propTypes = {
  galleryDatas: PropTypes.array.isRequired,
  setBackToAll: PropTypes.func,
}

export default SearchButtons
