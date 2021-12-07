import React from 'react'

// Import Components for App
import { Title } from '@components'
import useSiteMetadata from '@hooks/useSiteMetadata'

// Import StyledElements for basic styles
import { Section } from '../StyledElements/SectionStyled'
import { ButtonForm } from '../StyledElements/ButtonsStyled'

// Import styles from styled-components file
import * as S from './ContactFormStyled'

// Component
const Contactform = () => {
  const { formSpree } = useSiteMetadata()
  // Render Component
  return (
    <Section>
      <Title tag='h3' title='Contactez-nous via notre formulaire' />
      <S.FormContainer padding='0'>
        <S.ContactForm action={formSpree} method='POST' autocomplete='on'>
          <S.ContactInfo>
            <S.InputWrapper>
              <S.Label htmlFor='name'>Nom</S.Label>
              <S.Input
                type='text'
                name='name'
                id='name'
                placeholder='Saisissez votre Nom'
                required
              />
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label htmlFor='email'>Email</S.Label>
              <S.Input
                type='email'
                name='email'
                id='email'
                placeholder='Saisissez votre adresse mail'
                required
              />
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label htmlFor='phone'>Tel. Fixe</S.Label>
              <S.Input
                type='tel'
                name='phone'
                id='phone'
                placeholder='Votre N° fixe (facultatif)'
              />
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label htmlFor='mobile'>Tel. Mobile</S.Label>
              <S.Input
                type='tel'
                name='mobile'
                id='mobile'
                placeholder='Votre N° mobile (facultatif)'
              />
            </S.InputWrapper>
          </S.ContactInfo>
          <S.ContactMessage>
            <S.Label htmlFor='message'>Message</S.Label>
            <S.TextArea
              name='message'
              id='message'
              placeholder='Saisissez votre Message'
              rows='10'
              required
            />
          </S.ContactMessage>
          <ButtonForm
            primary
            type='submit'
            value='Envoyer'
            title='Envoyer le formulaire'
          />
        </S.ContactForm>
      </S.FormContainer>
    </Section>
  )
}

export default Contactform
