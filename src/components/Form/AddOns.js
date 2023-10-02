import { SiteHeader } from '../../utilites/SiteHeader'
import { FormWrapper } from '../../utilites/FormWrapper'
import styles from './AddOns.module.css'

const INPUTS_DATA = [
	{
		title: 'Online service',
		description: 'Access to multiplayer games',
		price: 1,
	},
	{
		title: 'Larger storage',
		description: 'Extra 1TB of cloud save',
		price: 2,
	},
]

export const AddOns = ({ title }) => {
	return (
		<>
			<SiteHeader title={title}>Add-ons help enhance your gaming experience.</SiteHeader>
			<FormWrapper></FormWrapper>
			<div className={styles.form}>
				<div className={styles['form-field']}>
					<label htmlFor='first'>
						<div className={styles.wrapper}>
							<div className={styles['input-text']}>
								<div>
									<input type='checkbox' id='for' />
								</div>
								<div>
									<h3>Title</h3>
									<p>Description</p>
								</div>
							</div>
							<div>
								<p>Price</p>
							</div>
						</div>
					</label>
				</div>
			</div>
		</>
	)
}
