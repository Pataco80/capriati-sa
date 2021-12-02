import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { graphql, useStaticQuery } from 'gatsby'

// Import Components for App
import { SectionContent } from '../StyledElements/SectionStyled'
import WorkItem from '../WorkItem/WorkItem'

// GraphQl Queries
export const getData = graphql`
  {
    worksQuery: allAirtable(
      filter: { table: { eq: "Travaux" } }
      sort: { fields: data___dateEndWork, order: DESC }
    ) {
      totalCount
      nodes {
        data {
          workName
          dateEndWork(formatString: "MMMM YYYY", locale: "fr")
          workDescription
          workGallery {
            data {
              galleryImageLegend
              galleryImage {
                localFiles {
                  childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH)
                  }
                  name
                  publicURL
                }
              }
            }
          }
          workServices {
            data {
              serviceName
              serviceIcon {
                localFiles {
                  childImageSharp {
                    gatsbyImageData(layout: FIXED, height: 32, width: 32)
                  }
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`

// Component
const WorksList = () => {
  // Component variables
  const data = useStaticQuery(getData)
  const worksListing = data.worksQuery.nodes

  // Render component
  return (
    <SectionContent>
      {worksListing.map((work, index) => {
        const workData = work.data
        return <WorkItem workData={workData} Key={index} />
      })}
    </SectionContent>
  )
}

export default WorksList
