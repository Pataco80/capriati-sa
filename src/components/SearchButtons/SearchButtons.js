import React, { useState } from 'react'

import * as S from './SearchButtonsStyled'

const SearchButtons = ({ galleryDatas, setGalleryDatas, setBackToAll }) => {
  const [index, setIndex] = useState(0)
  const categories = [
    'Tout voir',
    ...new Set(
      galleryDatas.map((gallery) => {
        return gallery.data.galleryService
      })
    ),
  ]

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

export default SearchButtons
