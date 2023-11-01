import React from "react"

// Import components from Gatsby and plugins Gatsby
import { useStaticQuery, graphql } from "gatsby"
// Import Components for App
import { Title, ServiceItem, ServiceItemCard } from "@components"
import { getImage } from "gatsby-plugin-image"
import { setColor } from "@helpers"

// Import styles from styled-components file
import * as S from "./ServicesStyled"

// GraphQl Queries
export const getData = graphql`
	{
		services: allAirtable(
			filter: { table: { eq: "Services" } }
			sort: { fields: data___serviceId, order: ASC }
		) {
			totalCount
			nodes {
				data {
					serviceId
					serviceName
					serviceDescriptions
					serviceIcon {
						...AirtableImgParams
					}
					serviceFeatureImg {
						...AirtableImgParams
					}
				}
			}
		}
	}

	fragment AirtableImgParams on AirtableField {
		localFiles {
			childImageSharp {
				gatsbyImageData(layout: FULL_WIDTH)
			}
			name
		}
	}
`
// Component
const Services = (props) => {
	// Component Variables
	const { home, background, padding } = props
	const data = useStaticQuery(getData)
	const servicesList = data.services.nodes
	// Render Component
	return (
		<S.ServicesWrapper background={background} padding={padding}>
			{home ? <Title tag='h2' title='Nos Services' /> : ""}
			<S.ServicesContent padding='0'>
				{servicesList.map((service, index) => {
					const {
						serviceId,
						serviceName,
						serviceIcon,
						serviceFeatureImg,
						serviceDescriptions,
					} = service.data
					const icon = getImage(serviceIcon.localFiles[0])
					const featureImg = getImage(serviceFeatureImg.localFiles[0])
					return (
						<ServiceItem
							Key={index}
							id={serviceId}
							icon={icon}
							name={serviceName}
							altIcon={`${serviceName} icon`}
							featureImg={featureImg}
							altFeatured={`${serviceName} featured Image`}
							description={`${serviceDescriptions}`}
							isRevert={index % 2}
						/>
					)
				})}
			</S.ServicesContent>
			{home ? (
				<S.ServicesLink
					primary='true'
					to='/services/'
					title='Aller à la page Nos Services'
					fade
					duration={1}
					hex={setColor.mainWhite}>
					Nos Services
				</S.ServicesLink>
			) : (
				""
			)}
		</S.ServicesWrapper>
	)
}

export default Services
