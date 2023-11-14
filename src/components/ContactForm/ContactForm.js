import React, { useState } from "react"
import styled from "styled-components"
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
		<>
			<Section>
				<S.FormContainer padding='0'>
					<S.ContactForm
						action='https://formspree.io/f/xjvqzaol'
						method='POST'
						autocomplete='on'>
						<input type='text' name='_gotcha' style={{ display: "none" }} />
						<S.InputsContent>
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

							<S.InputWrapper className='radio-input'>
								<S.subjectLabel>Raison de votre contact</S.subjectLabel>
								<S.Label className='radio-input-label' htmlFor='devis'>
									<S.RadioInput
										className='first'
										type='radio'
										name='Sujet du Mail'
										value='Demande de devis'
										id='devis'
										checked={subjectMail === "Demande de devis"}
										onChange={onOptionChange}
										required
									/>
									Demande de devis
								</S.Label>

								<S.Label className='radio-input-label' htmlFor='info'>
									<S.RadioInput
										type='radio'
										name='Sujet du Mail'
										value='Demande d’information'
										id='info'
										checked={subjectMail === "Demande d’information"}
										onChange={onOptionChange}
									/>
									Demande d’information
								</S.Label>

								<S.Label className='radio-input-label' htmlFor='Autre'>
									<S.RadioInput
										type='radio'
										name='Sujet du Mail'
										value='Autre'
										id='Autre'
										checked={subjectMail === "Autre"}
										onChange={onOptionChange}
									/>
									Autre
								</S.Label>
							</S.InputWrapper>
							<S.InputWrapper className='message'>
								<S.Label htmlFor='message'>Message</S.Label>
								<S.TextArea
									name='message'
									id='message'
									placeholder='Saisissez votre Message'
									rows='10'
									required
								/>
							</S.InputWrapper>
						</S.InputsContent>
						<S.Captcha
							className={`g-recaptcha ${className}`}
							data-sitekey={formCaptcha}></S.Captcha>
						<ButtonForm
							primary
							type='submit'
							value='Envoyer'
							title='Envoyer le formulaire'
							style={{ justifySelf: "center" }}
						/>
					</S.ContactForm>
				</S.FormContainer>
			</Section>
			<Section>
				<S.FormContainer>
					<S.ContactForm
						id='fs-frm'
						name='department-contact-form'
						accept-charset='utf-8'
						action='https://formspree.io/f/{form_id}'
						method='post'>
						<S.InputsContent>
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

							<S.InputWrapper className='select'>
								<S.Label htmlFor='Sujet du Mail'>
									Raison de votre contact
								</S.Label>
								<S.SelectInput name='Sujet du Mail' id='Sujet du Mail' required>
									<option value='' selected disabled>
										Choisissez une option
									</option>
									<option value='Demande de devis'>Demande de devis</option>
									<option value='Demande d’information'>
										Demande d’information
									</option>
									<option value='Autre'>Autre</option>
								</S.SelectInput>
							</S.InputWrapper>
							<S.InputWrapper className='message'>
								<S.Label htmlFor='message'>Message</S.Label>
								<S.TextArea
									name='message'
									id='message'
									placeholder='Saisissez votre Message'
									rows='10'
									required
								/>
							</S.InputWrapper>
						</S.InputsContent>
						<S.Captcha
							className={`g-recaptcha ${className}`}
							data-sitekey={formCaptcha}></S.Captcha>
						<ButtonForm
							primary
							type='submit'
							value='Envoyer'
							title='Envoyer le formulaire'
							style={{ justifySelf: "center" }}
						/>
					</S.ContactForm>
				</S.FormContainer>
			</Section>
		</>
	)
}

export default Contactform
