import React, { useState } from 'react'

import * as S from './SearchButtonsStyled'

const SearchButtons = ({ galleryDatas, setGalleryDatas, setBackToAll }) => {
  const [index, setIndex] = useState(0)
  const categories = [
    'Tout voir',
    ...new Set(
      galleryDatas.map((gallery) => {
        return gallery.data.galleryServices
      })
    ),
  ]

  const showgalleryDatas = (galleryServices, serviceIndex) => {
    setIndex(serviceIndex)
    if (galleryServices === 'all') {
      setBackToAll()
    } else {
      const tempGalleryDatas = galleryDatas.filter(
        (gallery) => gallery.data.galleryServices === galleryServices
      )
      setGalleryDatas(tempGalleryDatas)
    }
  }

  return (
    <S.ButtonsWrapper>
      {categories.map((galleryServices, serviceIndex) => {
        return (
          <S.ButtonService
            outline
            small
            notRadius
            Key={serviceIndex}
            className={index === serviceIndex ? 'active' : undefined}
            onClick={() => showgalleryDatas(galleryServices, serviceIndex)}
          >
            {galleryServices}
          </S.ButtonService>
        )
      })}
    </S.ButtonsWrapper>
  )
}

export default SearchButtons
