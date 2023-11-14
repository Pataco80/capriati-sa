import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

// Import Components for App
import { Navbar, Footer, BtnBar } from "@components"

// Import GlobalStyles and styles from styled-components files
//import GlobalStyles from '../../theme/globalStyles'
import * as S from "./LayoutStyled"

// Component
const Layout = (props) => {
	// Component Variables
	const { children, background } = props
	// Component Variables
	const [scrolled, setScrolled] = useState(false)

	// Hooks Effects
	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 5
			if (isScrolled !== scrolled) {
				setScrolled(!scrolled)
			}
		}
		document.addEventListener("scroll", handleScroll, { passive: true })
		return () => {
			document.removeEventListener("scroll", handleScroll)
		}
	}, [scrolled])

	// Render Component

	return (
		<S.AppWrapper>
			<Navbar toScroll={scrolled} />
			<S.PageContainer className={scrolled ? `isScroll` : ``}>
				{children}
			</S.PageContainer>
			<BtnBar />
			<Footer background={background} />
		</S.AppWrapper>
	)
}

// React PropTypes and more...
Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
