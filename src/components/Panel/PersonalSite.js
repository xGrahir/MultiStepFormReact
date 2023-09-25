import styles from './PersonalSite.module.css'
import { SiteHeader } from '../../utilites/SiteHeader'
import { FormWrapper } from '../../utilites/FormWrapper'
import { useCheckInput } from '../Hooks/useCheckInput'
import { useEffect} from 'react'

export const PersonalSite = ({enableButtonHandler}) => {
	const {
		checkEmail,
		isValid: mailValid,
		isTouched: mailIsTouched,
		checkIfTouched: checkIfEmailTouched,
	} = useCheckInput()

	const {
		checkName,
		isValid: nameValid,
		isTouched: nameIsTouched,
		checkIfTouched: checkIfNameTouched,
	} = useCheckInput()

	const {
		checkPhoneNumber,
		isValid: phoneValid,
		isTouched: phoneIsTouched,
		checkIfTouched: checkIfPhoneTouched,
	} = useCheckInput()

	useEffect(() => {
		if(mailValid && nameValid && phoneValid) {
			enableButtonHandler()
		}

	},[enableButtonHandler, mailValid, nameValid, phoneValid])


	return (
		<>
			<SiteHeader title={'Personal info'}> Please provide your name, email, address and phone number. </SiteHeader>
			<FormWrapper>
				<div className={styles.form}>
					<div className={styles['form-field']}>
						<label htmlFor='name'>Name</label>
						<input type='text' id="name" onChange={checkName} onBlur={checkIfNameTouched} placeholder='e.g. Stephen King' />
						{!nameValid && nameIsTouched ? <p>Wrong name or name has less than least 3 signs</p> : ''}
					</div>
					<div className={styles['form-field']}>
						<label htmlFor='email'>Email Address</label>
						<input type='email' id='email' onChange={checkEmail} onBlur={checkIfEmailTouched} placeholder='e.g. stephenking@lorem.com' />
						{!mailValid && mailIsTouched ? <p>E-mail is wrong</p> : ''}
					</div>
					<div className={styles['form-field']}>
						<label htmlFor='number'>Phone Number</label>
						<input type='text' id='number' onChange={checkPhoneNumber} onBlur={checkIfPhoneTouched} placeholder='e.g. +1 234 567 890' />
						{!phoneValid && phoneIsTouched ? <p>Phone number is invalid</p> : ''}
					</div>
				</div>
			</FormWrapper>
		</>
	)
}
