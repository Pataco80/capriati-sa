import React from 'react'

// Import styles from styled-components file
import * as S from './GalleryItemStyled'

// Component
const GalleryItem = ({ image, alt, toLightbox }) => {
  // Render Component if active Lightbox
  if (toLightbox) {
    return (
      <S.SRLLinkWrapper href={toLightbox}>
        <S.Image image={image} alt={alt} style={{ aspectRatio: 1.5 }} />
      </S.SRLLinkWrapper>
    )
  } else {
    // Return sinmple image item
    return (
      <S.ImgWrapper>
        <S.Image image={image} alt={alt} />
      </S.ImgWrapper>
    )
  }
}

export default GalleryItem
