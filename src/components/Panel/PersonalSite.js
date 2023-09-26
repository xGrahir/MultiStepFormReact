import styles from './PersonalSite.module.css'
import { SiteHeader } from '../../utilites/SiteHeader'
import { FormWrapper } from '../../utilites/FormWrapper'
import { useCheckInput } from '../Hooks/useCheckInput'
import { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { personalActions, infoActions } from '../../store'

export const PersonalSite = ({ enableButtonHandler }) => {
	const personal = useSelector(state => state.personal.personal)

	const dispatch = useDispatch()

	const name = useRef('')
	const mail = useRef('')
	const phone = useRef('')

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
		if(!nameValid || !mailValid || !phoneValid) {
			dispatch(infoActions.setError())
		} else {
			dispatch(infoActions.discardError())
			dispatch(personalActions.updateName({name: name.current.value, mail: mail.current.value, phone: phone.current.value}))
		}

		return (() => {})
	}, [name.current.value, mail.current.value, phone.current.value, nameValid, mailValid, phoneValid, dispatch])

	return (
		<>
			<SiteHeader title={'Personal info'}> Please provide your name, email, address and phone number. </SiteHeader>
			<FormWrapper>
				<div className={styles.form}>
					<div className={styles['form-field']}>
						<label htmlFor='name'>Name</label>
						<input
							type='text'
							id='name'
							ref={name}
							onChange={checkName}
							onBlur={checkIfNameTouched}
							placeholder='e.g. Stephen King'
						/>
						{!nameValid && nameIsTouched ? <p>Wrong name or name has less than least 3 signs</p> : ''}
					</div>
					<div className={styles['form-field']}>
						<label htmlFor='email'>Email Address</label>
						<input
							type='email'
							id='email'
							ref={mail}
							onChange={checkEmail}
							onBlur={checkIfEmailTouched}
							placeholder='e.g. stephenking@lorem.com'
						/>
						{!mailValid && mailIsTouched ? <p>E-mail is wrong</p> : ''}
					</div>
					<div className={styles['form-field']}>
						<label htmlFor='number'>Phone Number</label>
						<input
							type='text'
							id='number'
							ref={phone}
							onChange={checkPhoneNumber}
							onBlur={checkIfPhoneTouched}
							placeholder='e.g. +1 234 567 890'
						/>
						{!phoneValid && phoneIsTouched ? <p>Phone number is invalid</p> : ''}
					</div>
				</div>
			</FormWrapper>
		</>
	)
}
