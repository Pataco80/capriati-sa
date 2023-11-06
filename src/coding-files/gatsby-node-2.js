const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions

	const result = await graphql(`
		query ($serviceName: String = "") {
			services: allAirtable(
				filter: {
					table: { eq: "Services" }
					data: { serviceName: { eq: $serviceName } }
				}
			) {
				edges {
					node {
						id
						data {
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
				}
			}
			gallery: allAirtable(
				filter: {
					table: { eq: "Gallerie" }
					data: { galleryService: { eq: $serviceName } }
				}
			) {
				edges {
					node {
						id
						data {
							galleryImageLegend
							galleryImage {
								id
								localFiles {
									childImageSharp {
										gatsbyImageData(layout: FULL_WIDTH)
									}
								}
							}
						}
					}
				}
				totalCount
			}
		}
	`)
	const templatePath = path.resolve(`src/templates/servicePage.js`)

	result.data.allAirtable.forEach((node) => {
		createPage({
			path: NODE_SLUG,
			component: templatePath,
			context: {
				slug: NODE_SLUG,
			},
		})
	})
}
