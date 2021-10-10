import React, { useState } from 'react'

// Import constans and datas
//import { links, socialLinks } from '@constants'
//import { links, socialLinks } from '../../constants'
import links from '../../constants/links'
import socialLinks from '../../constants/socialLinks'
import logo from '../../assets/images/logos/logoCapriatiTopbar.png'

// Import Components for App
import { MenuAlt3 } from '@styled-icons/heroicons-outline/MenuAlt3'

// Import styled-components, styledElements and helpers
import * as S from './NavbarStyled'

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
      data-active={toScroll}
    >
      <S.NavbarContent>
        <S.NavbarHeader>
          <img src={logo} alt='Backroads Logo' />
          <S.NavbarToggle onClick={toggleNav}>
            <MenuAlt3 size={40} />
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
            return (
              <a key={index} href={link.url}>
                {link.icon}
              </a>
            )
          })}
        </S.NavbarSocial>
      </S.NavbarContent>
    </S.NavbarWrapper>
  )
}

export default Navbar
