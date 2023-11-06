import React from "react"

// Import components from Gatsby and plugins Gatsby
import { graphql, useStaticQuery } from "gatsby"

// Import Components for App
import SimpleReactLightbox from "simple-react-lightbox"
import Gallery from "../Gallery/Gallery"

// Import styles from styled-components file
import * as S from "./WorksGalleryStyled"

// GraphQl Queries
export const getDatas = graphql`
	{
		galleryQuery: allAirtable(filter: { table: { eq: "Gallerie" } }) {
			nodes {
				data {
					galleryImageLegend
					galleryService
					galleryImage {
						localFiles {
							childImageSharp {
								gatsbyImageData(layout: FULL_WIDTH)
							}
							publicURL
						}
					}
				}
			}
		}
	}
`

// Component
const WorksGallery = () => {
	// Component variables
	const data = useStaticQuery(getDatas)
	const galleryDatas = data.galleryQuery.nodes

	// Render component
	return (
		<SimpleReactLightbox>
			<S.GalleryWrapper>
				<Gallery galleryDatas={galleryDatas} searchButtons />
			</S.GalleryWrapper>
		</SimpleReactLightbox>
	)
}

export default WorksGallery
