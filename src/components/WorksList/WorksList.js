import React from 'react'

import { SectionContent } from '../StyledElements/SectionStyled'
import { graphql, useStaticQuery } from 'gatsby'
import WorkItem from '../WorkItem/WorkItem'

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
