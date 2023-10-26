import React, { useState } from "react"

// Import constans and datas
import links from "../constants/links"
import socialLinks from "../constants/socialLinks"

// Import components from Gatsby and plugins Gatsby
import { StaticImage } from "gatsby-plugin-image"

// Import Components for App
import { MenuAltRight } from "@styled-icons/boxicons-regular/MenuAltRight"

// Import styled-components, styledElements and helpers
import * as S from "./NavbarStyled"

// Component
const Navbar = ({ toScroll }) => {
	// Component Variables
	const [isOpen, setNav] = useState(false)

	// Component Functions
	const toggleNav = () => {
		setNav((isOpen) => !isOpen)
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
							src='../../assets/logoCapriati.png'
							alt='Logo Capriati SA'
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
								<S.NavbarLinks Key={index} to={link.path}>
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
