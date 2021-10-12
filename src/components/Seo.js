/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import useSiteMetadata from "@hooks/useSiteMetadata"

const Seo = props => {
  const {
    description,
    lang,
    meta,
    title,
    image,
    keywords,
    shareHashTag,
    shareTitle,
    pathname,
  } = props

  const { siteUrl, siteTitle, siteDescription, siteKeywords, bossName } =
    useSiteMetadata()

  const metaDescription = description || siteDescription

  const metaImage = `${siteUrl}/assets/images/${
    image || "default"
  }-social-card.webp`
  const metaKeywords = keywords || siteKeywords
  const titleTemplate = `${title} | ${siteTitle}`
  const hashTag = shareHashTag || siteTitle
  const sharedTitle = `${siteTitle} - ${shareTitle}`
  const canonical = pathname ? `${siteUrl}.location.${pathname}` : `${siteUrl}`
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={titleTemplate}
      link={
        canonical
          ? [
              {
                rel: "canonical",
                href: canonical,
              },
            ]
          : []
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: titleTemplate,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:quote`,
          content: sharedTitle,
        },
        {
          property: `og:hashtag`,
          content: hashTag,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: bossName,
        },
        {
          name: `twitter:title`,
          content: titleTemplate,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          metaKeywords.length > 0
            ? {
                name: `keywords`,
                content: metaKeywords,
              }
            : []
        )
        .concat(
          metaImage
            ? [
                {
                  property: "og:image",
                  content: metaImage,
                },
                {
                  property: "og:image:width",
                  content: metaImage.width,
                },
                {
                  property: "og:image:height",
                  content: metaImage.height,
                },
                {
                  name: `twitter:image.src`,
                  content: metaImage,
                },
                {
                  name: "twitter:card",
                  content: "summary_large_image",
                },
              ]
            : [
                {
                  name: "twitter:card",
                  content: "summary",
                },
              ]
        )
        .concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `fr`,
  meta: [],
  keywords: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }),
  pathname: PropTypes.string,
}

export default Seo
