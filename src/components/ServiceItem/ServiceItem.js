import React from "react"

// Import components from Gatsby and plugins Gatsby
import { getImage } from "gatsby-plugin-image"

// Import Components for App
import { GalleryItem } from "@components"

// Import styles from styled-components file and helpers
import * as S from "./ServiceItemStyled"

// Component
const ServiceItem = (props) => {
	// Component Variables
	const {
		id,
		name,
		altIcon,
		altFeatured,
		icon,
		featureImg,
		description,
		gallery,
		home,
		isRevert,
	} = props
	// Render Component
	return (
		<S.ServiceWrapper id={id} className={isRevert ? `is-revert` : ``}>
			<S.ServiceFeatureSection>
				<S.ServiceFeatureContainer className={isRevert ? `is-revert` : ``}>
					<S.FeatureImage
						image={featureImg}
						notOverlay
						altBcgImage={altFeatured}></S.FeatureImage>
				</S.ServiceFeatureContainer>
			</S.ServiceFeatureSection>
			<S.ServiceContent className={isRevert ? `is-revert` : ``}>
				<S.ServiceHeader>
					<S.IconContainer>
						<S.ServiceIcon alt={altIcon} image={icon} />
					</S.IconContainer>
					<h3 className={"notMargin"}>{name}</h3>
				</S.ServiceHeader>
				<S.ServiceBody
					padding='0'
					dangerouslySetInnerHTML={{
						__html: `${description}`,
					}}></S.ServiceBody>
			</S.ServiceContent>
		</S.ServiceWrapper>
	)
}

export default ServiceItem
