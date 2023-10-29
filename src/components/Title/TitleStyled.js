import styled from "styled-components"

// Import helpers
import { setFlex } from "@helpers"

// Export Styles for the component
export const TitleWrapper = styled.div`
	${setFlex()};
	text-align: center;
	margin-bottom: ${(props) => props.marBtm || `0`};

	${({ notPadding }) =>
		notPadding &&
		`
      padding-bottom: 0 !important;
  `}

	${({ hidden }) =>
		hidden &&
		`
      display:none !important;
  `}
`
