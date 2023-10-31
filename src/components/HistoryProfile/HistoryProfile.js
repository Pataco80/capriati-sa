import React from "react"

// Import components from Gatsby and plugins Gatsby
import { graphql, useStaticQuery } from "gatsby"

// Import Components for App
import { Title } from "@components"
import Avatar from "../Avatar/Avatar"

// Import styles from styled-components file
import * as S from "./HistoryProfileStyled"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

//GraphQl Queries
export const getData = graphql`
	{
		profile: allAirtable(
			filter: { table: { eq: "Team" }, data: { teamStatus: { eq: "famille" } } }
			sort: { fields: id, order: DESC }
		) {
			nodes {
				data {
					teamName
					teamPhoto {
						localFiles {
							childImageSharp {
								gatsbyImageData(layout: CONSTRAINED, width: 300, height: 300)
							}
						}
					}
				}
			}
		}
	}
`
// Component
const Historyprofile = () => {
	// Component Variables
	const data = useStaticQuery(getData)
	const profileList = data.profile.nodes

	// Render Component
	return (
		<S.HistoryProfileWrapper>
			{profileList.map((profile, index) => {
				const { teamPhoto, teamName } = profile.data

				// Images Variables and Functions
				const imagePath = getImage(teamPhoto.localFiles[0])

				// Return Profile Images
				return (
					<S.ProfileItem Key={index}>
						<Avatar>
							<GatsbyImage image={imagePath} alt={`Photo de ${teamName}`} />
						</Avatar>
						<Title tag='h4' title={teamName} />
					</S.ProfileItem>
				)
			})}
		</S.HistoryProfileWrapper>
	)
}

export default Historyprofile
