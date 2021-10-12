import styled, { css } from 'styled-components'

// Import StyledElements for basic styles
import { Section, SectionContent } from '../StyledElements/SectionStyled'
import { GatsbyButtonLink } from '../StyledElements/ButtonsStyled'

// Import helpers
import { layout, setFlex, media, setColor, setBorder } from '@helpers'

// Styled CSS
const ArticleCSS = css`
  ${setFlex()};

  ${media.greaterThan('tablet')`
    width: 50%;
  `}
`

// Export Styles for the component
export const AboutWrapper = styled(Section)`
  ${setFlex({ flDir: 'column' })};
  background-color: ${(props) => props.background || `${setColor.white}`};
`

export const AboutContent = styled(SectionContent)`
  ${layout()};
  ${setFlex({ flDir: 'column', wrap: 'nowrap' })};

  ${media.greaterThan('tablet')`
    ${setFlex({ flDir: 'row' })};
  `}
`

export const AboutArticle = styled.article`
  ${ArticleCSS}
  margin-bottom: 1rem;
  color: ${setColor.mainBlack};

  ${media.greaterThan('tablet')`
    margin-bottom: 2rem;
  `}
`

export const Blockuote = styled.blockquote`
  ${ArticleCSS}
  justify-content: flex-end;
  p {
    margin-top: 1rem;
  }

  footer {
    text-align: right;
    border-right: ${setBorder({
      size: 4,
      style: 'solid',
      color: `${setColor.primaryColor}`,
    })};
    padding-right: 1rem;
    color: ${setColor.primaryColor};

    h6 {
      margin: 0.5rem 0;
    }

    em {
      color: ${setColor.mainBlack};
      font-style: italic;
    }
  }
`

export const AboutAuthorContainer = styled.div`
  ${setFlex({ flDir: 'column' })};
  width: 100%;
  padding-left: 0;
  padding-top: 0;
  margin-bottom: 2rem;

  ${media.greaterThan('tablet')`
        ${setFlex({ flDir: 'row' })};
    max-width: 22rem;
    padding-left:2rem;

  `}

  small {
    color: ${setColor.mainBlack};
  }
`

export const AuthorImgContainer = styled.div`
  ${setFlex({ flDir: 'column' })};
  width: 100%;
  max-width: 350px;
  padding: 2rem 0 1rem 0;
  text-align: center;

  ${media.greaterThan('tablet')`
    padding: 0rem 0 1rem 0;
  `}
`

export const AuthorName = styled.h3`
  margin-bottom: 0.5rem;
  text-align: center;
`

export const AboutLink = styled(GatsbyButtonLink)`
  margin: 3rem 0 1rem;
`
