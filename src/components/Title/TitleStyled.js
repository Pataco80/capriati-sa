import React from "react"
import styled from "styled-components"

// Import helpers
import { setFlex } from "@helpers"

// Export Styles for the component
export const TitleWrapper = styled(React.Fragment)`
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
`
