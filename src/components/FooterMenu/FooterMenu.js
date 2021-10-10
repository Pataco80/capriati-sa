import React from 'react'

import links from '../constants/links'
import socialLinks from '../constants/socialLinks'

// Import styles from styled-components file and helpers
import * as S from './FooterMenuStyled'

const FooterMenu = () => {
  return (
    <>
      <S.FooterMenu>
        {links.map((link, index) => {
          return (
            <li>
              <S.FooterMenuLink Key={index} to={link.path}>
                <span>{link.label}</span>
              </S.FooterMenuLink>
            </li>
          )
        })}
      </S.FooterMenu>
      <S.FooterSocialMenu>
        {socialLinks.map((link, index) => {
          return (
            <a key={index} href={link.url}>
              {link.icon}
            </a>
          )
        })}
      </S.FooterSocialMenu>
    </>
  )
}

export default FooterMenu
