import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PrettyRating from 'pretty-rating-react'
import { Title } from '@components'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
import { KeyboardArrowLeft } from '@styled-icons/material-outlined/KeyboardArrowLeft'
import { KeyboardArrowRight } from '@styled-icons/material/KeyboardArrowRight'

import * as S from './TestimonialsStyled'

export const getData = graphql`
  {
    allAirtable(
      filter: {
        table: { eq: "Clients" }
        data: { testimonial: { eq: "true" } }
      }
    ) {
      totalCount
      nodes {
        data {
          clientId
          clientName
          clientCity
          testimonialDescription
          rating
        }
      }
    }
  }
`

const icons = {
  star: {
    complete: faStar,
    half: faStarHalfAlt,
    empty: farStar,
  },
}

const colors = {
  star: ['#d9ad26', '#d9ad26', '#d9ad26'],
}

const Testimonials = () => {
  const data = useStaticQuery(getData)
  const {
    allAirtable: { nodes: testimonialDatas },
  } = data

  const [testimonials, setTestimonials] = useState(testimonialDatas)
  const [index, setIndex] = useState(0)

  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1
      if (index > testimonials.length - 1) {
        index = 0
      }
      return index
    })
  }
  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1
      if (index < 0) {
        index = testimonials.length - 1
      }
      return index
    })
  }

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1
        if (index > testimonials.length - 1) {
          index = 0
        }
        return index
      })
    }, 5000)
    return () => {
      clearInterval(slider)
    }
  }, [index])

  return (
    <S.TestimonialsWrapper>
      <Title tag='h2' title='Avis de nos Clients' />
      <S.CenteredContainer>
        {testimonials.map((article, articleIndex) => {
          const {
            clientId,
            clientName,
            clientCity,
            testimonialDescription,
            rating,
          } = article.data

          let position = 'nextSlide'
          if (articleIndex === index) {
            position = 'activeSlide'
          }
          if (
            articleIndex === index - 1 ||
            (index === 0 && articleIndex === testimonials.lenght - 1)
          ) {
            position = 'lastSlide'
          }

          return (
            <S.Article className={position} Key={clientId}>
              <S.TitleClient tag='h5' title={clientName}>
                <S.City>{clientCity}</S.City>
              </S.TitleClient>
              <S.ArticleText>
                <S.RightQuote size={32} />
                <S.Description>{testimonialDescription}</S.Description>
                <S.LeftQuote size={32} />
              </S.ArticleText>
              <PrettyRating
                value={rating}
                icons={icons.star}
                colors={colors.star}
                max={5}
              />
            </S.Article>
          )
        })}
        <S.PrevBtn noPadding primary onClick={prevSlide}>
          <KeyboardArrowLeft size={32} />
        </S.PrevBtn>
        <S.NextBtn noPadding primary onClick={nextSlide}>
          <KeyboardArrowRight size={32} />
        </S.NextBtn>
      </S.CenteredContainer>
    </S.TestimonialsWrapper>
  )
}

export default Testimonials
