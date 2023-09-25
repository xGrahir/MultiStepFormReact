import styles from './PersonalSite.module.css'
import { SiteHeader } from '../../utilites/SiteHeader'
import { FormWrapper } from '../../utilites/FormWrapper'

export const PersonalSite = () => {
	return (
		<>
			<SiteHeader title={'Personal info'}> Please provide your name, email, address and phone number. </SiteHeader>
			<FormWrapper>
				<form className={styles.form}>
					<div className={styles['form-field']}>
						<label htmlFor='Name'>Name</label>
						<input type='text' placeholder='e.g. Stephen King' />
					</div>
					<div className={styles['form-field']}>
						<label htmlFor='Name'>Email Address</label>
						<input type='email' placeholder='e.g. stephenking@lorem.com' />
					</div>
					<div className={styles['form-field']}>
						<label htmlFor='number'>Phone Number</label>
						<input type='text' placeholder='e.g. +1 234 567 890' />
					</div>
				</form>
			</FormWrapper>
		</>
	)
}
