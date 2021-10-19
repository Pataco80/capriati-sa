import styled from 'styled-components'
import { Title } from '@components'
import { Button } from '../StyledElements/ButtonsStyled'
import { DoubleQuotesL } from '@styled-icons/remix-editor/DoubleQuotesL'
import { Section, SectionContent } from '../StyledElements/SectionStyled'
import { DoubleQuotesR } from '@styled-icons/remix-editor/DoubleQuotesR'
import {
  media,
  layout,
  setFlex,
  setColor,
  setTransition,
  setRadius,
} from '@helpers'

export const TestimonialsWrapper = styled(Section)`
  ${setFlex({ flDir: 'column', wrap: 'wrap' })};
  flex-direction: column;
  background-color: ${(props) => props.background || `${setColor.white}`};
  position: relative;
  width: 100vw;
`
export const CenteredContainer = styled(SectionContent)`
  ${layout({ mW: 50, wTh: '80%' })};
  ${setFlex({ flDir: 'row', wrap: 'nowrap' })};
  height: 42rem;
  max-width: 800px;
  text-align: center;
  position: relative;
  overflow: hidden;
  width: 90vw;
  margin: 0 auto;
  ${media.greaterThan('smTablet')`
      height: 24rem;
  `}
  ${media.greaterThan('desktop')`
      height: 32rem;
  `}
`
export const Article = styled.article`
  z-index: 10;
  ${setTransition()};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 2.5rem;
  overflow: hidden;
  opacity: 0;
  transform: translateX(0);

  ${media.greaterThan('smTablet')`
    padding: 0 3.5rem;
    `}
  ${media.greaterThan('tablet')`
    padding: 0 5rem;
    `}

  &.activeSlide {
    opacity: 1;
  }

  &.lastSlide {
    transform: translateX(-100%);
  }

  &.nextSlide {
    transform: translateX(100%);
  }
`

export const TitleClient = styled(Title)`
  padding-bottom: 1rem;
  display: block;
`
export const City = styled.p`
  text-shadow: none;
`

export const ArticleText = styled.div`
  position: relative;
  margin-bottom: 3rem;
`

export const Description = styled.p`
  margin-bottom: 2rem;

  ${media.lessThan('smTablet')`
  font-size: small;
  `}
`

export const PrevBtn = styled(Button)`
  ${setRadius({ tl: 8, tr: 0, br: 0, bl: 8 })};
  position: absolute;
  left: 0;
  top: 35%;
  cursor: pointer;
  z-index: 10;

  ${media.greaterThan('smTablet')`
      top: auto;
  `}
`
export const NextBtn = styled(Button)`
  ${setRadius({ tl: 0, tr: 8, br: 8, bl: 0 })};
  position: absolute;
  top: 35%;
  right: 0;
  cursor: pointer;
  z-index: 10;

  ${media.greaterThan('smTablet')`
      top: auto;
  `}
`

export const LeftQuote = styled(DoubleQuotesL)`
  color: ${setColor.primaryColor};
  position: absolute;
  left: -24px;
  bottom: -32px;
`

export const RightQuote = styled(DoubleQuotesR)`
  color: ${setColor.primaryColor};
  position: absolute;
  right: -24px;
  top: -32px;
`
