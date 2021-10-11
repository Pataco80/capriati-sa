import React from "react"

// Import Hooks
import useSiteMetadata from "@hooks/useSiteMetadata"

// Import functions map
import mapsSelector from "../../utils/getGoogleMap"

// Import Components for App
import { Phone, MailSend, Map } from "@styled-icons/boxicons-regular"

// Import styles from styled-components file
import * as S from "./ContactMenuStyled"

// Component
const ContactMenu = () => {
  // component variables
  const { businessPhone, businessEmail } = useSiteMetadata()

  // fonction de suppression d'espaces pour les liens
  const removeSpaces = string => {
    return string.replace(/\s/g, "")
  }

  // Constantes pour les liens
  const hrefPhone = `tel:${removeSpaces(businessPhone)}`
  const hrefEmail = `mailto:${businessEmail}`

  // Render Component
  return (
    <S.ContactMenuWrapper>
      <S.ContactMenuLink href={hrefPhone} title="Appelez-vous">
        <Phone size={48} />
      </S.ContactMenuLink>
      <S.ContactMenuLink href={hrefEmail} title="Ecrivez-nous un mail">
        <MailSend size={48} />
      </S.ContactMenuLink>
      <S.MapButton type="button" onClick={mapsSelector} title="Nous Trouver">
        <Map size={48} />
      </S.MapButton>
    </S.ContactMenuWrapper>
  )
}

export default ContactMenu
