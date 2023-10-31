import React from "react"
import styled from "styled-components"

import { setRadius, setShadow } from "@helpers"

const Avatar = ({ children }) => {
	return <ImageWrapper>{children}</ImageWrapper>
}

export default Avatar

const ImageWrapper = styled.div`
	width: 100%;
	max-width: 250px;
	${setRadius({ allPc: 50 })};
	box-shadow: ${setShadow("light")};
	overflow: hidden;
	margin-bottom: 1rem;

	img {
		${setRadius({ allPc: 50 })};
	}
`
