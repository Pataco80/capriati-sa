import React, { useState } from "react"

// Import constans and datas
import links from "../constants/links"
import socialLinks from "../constants/socialLinks"
import useDeviceDetect from "@hooks/useDeviceDetect"
import useWindowSize from "@hooks/useWindowSize"
// Import components from Gatsby and plugins Gatsby
import { StaticImage } from "gatsby-plugin-image"

// Import Components for App
import { MenuAltRight } from "@styled-icons/boxicons-regular/MenuAltRight"

// Import styled-components, styledElements and helpers
import * as S from "./NavbarStyled"
import { breakpoints } from "../../theme/helpers"

// Component
const Navbar = ({ toScroll }) => {
	// Component Variables
	const [isOpen, setNav] = useState(false)
	const { windowSize } = useWindowSize()
	// Component Functions
	const toggleNav = () => {
		if (windowSize < breakpoints.lgTablet) {
			setNav((isOpen) => !isOpen)
		}
	}

	// Render Compoent
	return (
		<S.NavbarWrapper
			role='navigation'
			aria-label='Navigation Principale'
			data-active={toScroll}>
			<S.NavbarContent>
				<S.NavbarHeader>
					<S.LogoContainer to='/' title="Retour à la page d'Accueil">
						<StaticImage
							src='../../assets/images/logos/logoCapriatiTopbar.svg'
							alt='Logo Capriati SA'
							width={200}
							height={48}
							placeholder='blurred'
							layout='fixed'
						/>
					</S.LogoContainer>
					<S.NavbarToggle
						onClick={toggleNav}
						type='button'
						name='Ouvrir le menu'
						aria-label='Ouvrir le menu'>
						<MenuAltRight size='32' aria-pressed='mixed' />
					</S.NavbarToggle>
				</S.NavbarHeader>
				<S.NavbarNav className={isOpen ? `show-nav` : ``}>
					{links.map((link, index) => {
						return (
							<li>
								<S.NavbarLinks Key={index} to={link.path} onClick={toggleNav}>
									<span>{link.label}</span>
								</S.NavbarLinks>
							</li>
						)
					})}
				</S.NavbarNav>
				<S.NavbarSocial className={isOpen ? `show-nav` : ``}>
					{socialLinks.map((link, index) => {
						const { title, url, icon } = link
						return (
							<li>
								<a key={index} href={url} title={title} rel='noopener'>
									{icon}
								</a>
							</li>
						)
					})}
				</S.NavbarSocial>
			</S.NavbarContent>
		</S.NavbarWrapper>
	)
}

export default Navbar
