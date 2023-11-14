import React from "react"
import styled from "styled-components"

// Import helpers
import { setFlex, spaceScale, media } from "@helpers"

// Export Styles for the component
export const TitleWrapper = styled.div`
	${setFlex()};
	text-align: center;

	${({ hidden }) =>
		hidden &&
		`
      display:none !important;
  `}
	& .h4.notMargin {
		margin-bottom: 0 !important;
	}

	& > .page-title {
		margin-top: ${spaceScale.spaceL};
		${media.greaterThan("desktop")`
		margin-top:${spaceScale.spaceXl};
  	`}
	}
`
