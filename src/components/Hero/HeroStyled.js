import styled from "styled-components"

// Import helpers
import { setFlex } from "@helpers"

// Export Styles for the component
export const HeroWrapper = styled.header`
	height: ${(props) =>
		props.home || props.error ? "calc(100vh - 56px)" : "38rem"};
	position: relative;
	${setFlex({ flDir: "column", wrap: "nowrap" })};
	width: 100vw;
	overflow: hidden;
	padding-bottom: ${(props) => (props.error ? "10rem" : 0)};

	div {
		display: flex;
		flex: auto;
		width: 100%;
	}
`
