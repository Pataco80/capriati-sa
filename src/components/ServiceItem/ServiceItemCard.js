import React from "react"

// Import Hooks

// Import components from Gatsby and plugins Gatsby
// Import Components for App
import { Title } from "@components"

// Import styles from styled-components file and helpers
import * as S from "./ServiceItemStyled"

// GraphQl Queries

// Component
const ServiceItemCard = ({ id, name, altIcon, icon, description }) => {
  // Component Variables
  // Component Functions

  // Render Component
  return (
    <S.ServiceCardWrapper key={id}>
      <S.ServiceCardItem>
        <S.serviceCardHeader>
          <S.ServiceSmallBanner padding="0">
            <S.IconContainerCard>
              <S.ServiceIcon image={icon} alt={altIcon} />
            </S.IconContainerCard>
            <Title tag="h3" title={name} noShadow notMargin />
          </S.ServiceSmallBanner>
        </S.serviceCardHeader>
        <S.ServiceBody
          padding="0"
          dangerouslySetInnerHTML={{ __html: `${description}` }}
        ></S.ServiceBody>
      </S.ServiceCardItem>
    </S.ServiceCardWrapper>
  )
}

export default ServiceItemCard
