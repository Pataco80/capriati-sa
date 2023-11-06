import React, { useState } from "react"

// Import Components for App
import { Title } from "@components"

// Import StyledElements for basic styles
import { Section } from "../StyledElements/SectionStyled"
import { ButtonForm } from "../StyledElements/ButtonsStyled"

// Import styles from styled-components file
import * as S from "./ContactFormStyled"

// Component
const Contactform = ({ formID, formCaptcha, className }) => {
	const [subjectMail, setSubjectMail] = useState(null)

	const onOptionChange = (e) => {
		setSubjectMail(e.target.value)
	}
	// Render Component
	return (
		<Section>
			<S.FormContainer padding='0'>
				<S.ContactForm
					action='https://formspree.io/f/xzbkneqk'
					method='POST'
					autocomplete='on'>
					<S.ContactInfo>
						<input type='text' name='_gotcha' style={{ display: "none" }} />
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
								name='_replyto'
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
						<Title tag='h6' title='Raison de votre contact' />

						<S.InputWrapper className='radio-input'>
							<S.RadioInput
								className='first'
								type='radio'
								name='topping'
								value='Regular'
								id='regular'
								checked={subjectMail === "Regular"}
								onChange={onOptionChange}
								required
							/>
							<S.Label className='radio-input-label' htmlFor='regular'>
								Regular
							</S.Label>
							<S.RadioInput
								type='radio'
								name='topping'
								value='Medium'
								id='medium'
								checked={subjectMail === "Medium"}
								onChange={onOptionChange}
							/>
							<S.Label className='radio-input-label' htmlFor='medium'>
								Medium
							</S.Label>
							<S.RadioInput
								type='radio'
								name='topping'
								value='Large'
								id='large'
								checked={subjectMail === "Large"}
								onChange={onOptionChange}
							/>
							<S.Label className='radio-input-label' htmlFor='large'>
								Large
							</S.Label>
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
					<S.Captcha
						className={`g-recaptcha ${className}`}
						data-sitekey={formCaptcha}></S.Captcha>
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
