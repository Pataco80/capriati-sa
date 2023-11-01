import React from "react"

// Import Components for App
import { Title } from "@components"
import Avatar from "../Avatar/Avatar"

// Import styles from styled-components file and helpers
import * as S from "./TeamCadreStyled"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// Component
const TeamCadre = (props) => {
	// Component Variables
	const { teamPhoto, teamName, teamJob, teamActivity, teamJobDate } = props
	const imagePath = getImage(teamPhoto.localFiles[0])
	// Render Component
	return (
		<S.CadreItemWrapper>
			<Avatar>
				<GatsbyImage image={imagePath} alt={`Photo de ${teamName}`} />
			</Avatar>
			<Title tag='h4' title={teamName} />
			<Title tag='h6' title={teamJob} />
			<S.CadreInfo>
				<S.InfoList
					dangerouslySetInnerHTML={{ __html: `${teamActivity}` }}></S.InfoList>
				<p>{teamJobDate}</p>
			</S.CadreInfo>
		</S.CadreItemWrapper>
	)
}

export default TeamCadre
