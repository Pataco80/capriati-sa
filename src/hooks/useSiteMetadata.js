import { useStaticQuery, graphql } from "gatsby"

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteUrl
          siteTitle
          siteDescription
          logo
          siteLanguage
          siteKeywords
          bossName
          bossPosition
          bossDescription
          bossSlogan
          businessRoad
          businessRoadNumber
          businessZipCode
          businessCity
          businessCanton
          businessShortCanton
          businessContry
          businessShortCountry
          businessPhone
          businessEmail
          copyright
          twitterUserName
          facebookUserName
          conceptorWebSite
          formSpreeID
          formSpreeCaptcha
        }
      }
    }
  `)
  return data.site.siteMetadata
}
//formSpree

export default useSiteMetadata
