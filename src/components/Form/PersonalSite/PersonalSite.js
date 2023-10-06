import styles from './PersonalSite.module.css'
import { SiteHeader } from '../../../utilites/SiteHeader'
import { FormWrapper } from '../../../utilites/FormWrapper'
import { useCheckInput } from '../../Hooks/useCheckInput'
import { useSelector } from 'react-redux'
import { usePageValid } from '../../Hooks/usePageValid'
import { useEffect } from 'react'

export const PersonalSite = ({ title }) => {
	const personal = useSelector(state => state.data.personal)
	const validate = useSelector(state => state.data.personalValidation)
	const { personalSiteValid } = usePageValid()

	const { checkEmail, isTouched: mailIsTouched, checkIfTouched: checkIfEmailTouched } = useCheckInput()

	const { checkName, isTouched: nameIsTouched, checkIfTouched: checkIfNameTouched } = useCheckInput()

	const { checkPhoneNumber, isTouched: phoneIsTouched, checkIfTouched: checkIfPhoneTouched } = useCheckInput()

	useEffect(() => {
		personalSiteValid()
	}, [personalSiteValid])

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
							defaultValue={personal.name}
							placeholder='e.g. Stephen King'
							required
						/>
						{!validate.name && nameIsTouched ? <p>Wrong name or name has less than least 3 signs</p> : ''}
					</div>
					<div className={styles['form-field']}>
						<label htmlFor='email'>Email Address</label>
						<input
							type='email'
							id='email'
							onChange={checkEmail}
							onBlur={checkIfEmailTouched}
							defaultValue={personal.mail}
							placeholder='e.g. stephenking@lorem.com'
							required
						/>
						{!validate.mail && mailIsTouched ? <p>E-mail is wrong</p> : ''}
					</div>
					<div className={styles['form-field']}>
						<label htmlFor='number'>Phone Number</label>
						<input
							type='text'
							id='number'
							onChange={checkPhoneNumber}
							onBlur={checkIfPhoneTouched}
							defaultValue={personal.phone}
							placeholder='e.g. +1 234 567 890'
							required
						/>
						{!validate.phone && phoneIsTouched ? <p>Phone number is invalid</p> : ''}
					</div>
				</div>
			</FormWrapper>
		</>
	)
}
