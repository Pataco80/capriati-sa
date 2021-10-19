import React from 'react'

import { SectionContent } from '../StyledElements/SectionStyled'
import { graphql, useStaticQuery } from 'gatsby'
import WorkItem from '../WorkItem/WorkItem'

export const getData = graphql`
  {
    worksQuery: allAirtable(
      filter: { table: { eq: "Clients" } }
      sort: { fields: data___clientEndWork, order: DESC }
    ) {
      nodes {
        data {
          clientName
          clientEndWork(formatString: "MMMM YYYY", locale: "fr")
          clientCity
          clientDescription
          clientServices {
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
          clientGallery {
            data {
              galleryImageLegend
              galleryImage {
                localFiles {
                  childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH)
                  }
                  publicURL
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

const WorksList = () => {
  const data = useStaticQuery(getData)
  const worksListing = data.worksQuery.nodes
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
