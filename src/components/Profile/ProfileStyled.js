import styled from "styled-components"
import { Title } from "@components"
// Import helpers
import { setFlex, spaceScale, setRadius, setShadow } from "@helpers"

// Export Styles for the component
export const ProfileWrapper = styled.div`
	${setFlex({ flDir: "column" })};
	width: 100%;
`

export const ProfileName = styled(Title)`
	&.boss {
		background-color: blue;
	}
	${({ mBtm }) =>
		mBtm &&
		`
      margin-bottom: ${(props) => props.mBtm || null};
    `}
`

export const ProfileJob = styled(Title)`
	text-align: center;
`
export const BossPosition = styled.p`
	font-size: 1.5rem;
	text-shadow: none;
	font-style: bold;
`
// Export Styles for the component
