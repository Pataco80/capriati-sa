import styled from "styled-components"

// Import helpers
import { setFlex, media } from "@helpers"
import { spaceScale } from "../../theme/helpers"

// Export Styles for the component
export const BannerWrapper = styled.section`
	margin-top: ${spaceScale.spaceL};
	text-align: center;

	${media.greaterThan("desktop")`
	margin-top: ${spaceScale.spaceXl};
  `}
`
