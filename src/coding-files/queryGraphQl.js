 { service: airtable(
    table: {eq: "Services"}
    data: {serviceName: {eq: $serviceName}}
  ) {
    data {
      serviceId
      serviceName
      serviceDescriptions
      serviceIcon {
        localFiles {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      serviceFeatureImg {
        localFiles {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }






  gallery: allAirtable(
    filter: {table: {eq: "Gallerie"}, data: {galleryService: {eq: $serviceName}, serviceName: {eq: $serviceName}}}
  ) {
    edges {
      node {
        id
        data {
          galleryService
        }
        table
      }
    }
  }

}