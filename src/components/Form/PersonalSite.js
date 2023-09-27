import styles from './PersonalSite.module.css'
import { SiteHeader } from '../../utilites/SiteHeader'
import { FormWrapper } from '../../utilites/FormWrapper'
import { useCheckInput } from '../Hooks/useCheckInput'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { dataActions } from '../../store'

export const PersonalSite = ({ title }) => {
	const dispatch = useDispatch()
	const personal = useSelector(state => state.data.personal)

	const {
		checkEmail,
		isValid: mailValid,
		isTouched: mailIsTouched,
		checkIfTouched: checkIfEmailTouched,
		value: mailValue,
	} = useCheckInput()

	const {
		checkName,
		isValid: nameValid,
		isTouched: nameIsTouched,
		checkIfTouched: checkIfNameTouched,
		value: nameValue,
	} = useCheckInput()

	const {
		checkPhoneNumber,
		isValid: phoneValid,
		isTouched: phoneIsTouched,
		checkIfTouched: checkIfPhoneTouched,
		value: phoneValue,
	} = useCheckInput()

	const valids = { mailValid, nameValid, phoneValid }
	const everyValid = Object.values(valids).every(Boolean)

	useEffect(() => {
		if(everyValid) {
			console.log('valid');
			dispatch(dataActions.updateData({ name: nameValue, mail: mailValue, phone: phoneValue }))
		}

		return(() => {})
	}, [everyValid])

	return (
		<>
			<SiteHeader title={title}> Please provide your name, email, address and phone number. </SiteHeader>
			<FormWrapper>
				<div className={styles.form}>
					<div className={styles['form-field']}>
						<label htmlFor='name'>Name</label>
						<input
							type='text'
							id='name'
							onChange={checkName}
							onBlur={checkIfNameTouched}
							placeholder='e.g. Stephen King'
							required
						/>
						{!nameValid && nameIsTouched ? <p>Wrong name or name has less than least 3 signs</p> : ''}
					</div>
					<div className={styles['form-field']}>
						<label htmlFor='email'>Email Address</label>
						<input
							type='email'
							id='email'
							onChange={checkEmail}
							onBlur={checkIfEmailTouched}
							placeholder='e.g. stephenking@lorem.com'
							required
						/>
						{!mailValid && mailIsTouched ? <p>E-mail is wrong</p> : ''}
					</div>
					<div className={styles['form-field']}>
						<label htmlFor='number'>Phone Number</label>
						<input
							type='text'
							id='number'
							onChange={checkPhoneNumber}
							onBlur={checkIfPhoneTouched}
							placeholder='e.g. +1 234 567 890'
							required
						/>
						{!phoneValid && phoneIsTouched ? <p>Phone number is invalid</p> : ''}
					</div>
				</div>
			</FormWrapper>
		</>
	)
}
