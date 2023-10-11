import { SiteHeader } from '../../../utilites/SiteHeader'
import { FormWrapper } from '../../../utilites/FormWrapper'
import { AddOnsInput } from '../../../utilites/AddOnsInput'
import { usePageValid } from '../../Hooks/usePageValid'
import { useEffect } from 'react'
import styles from './AddOnsSite.module.css'

const INPUTS_DATA = [
	{
		id: 'service',
		title: 'Online service',
		description: 'Access to multiplayer games',
		priceMonthly: 1,
	},
	{
		id: 'storage',
		title: 'Larger storage',
		description: 'Extra 1TB of cloud save',
		priceMonthly: 2,
	},
	{
		id: 'profile',
		title: 'Customizable profile',
		description: 'Custom theme on your profile',
		priceMonthly: 2,
	},
]

export const AddOns = ({ title }) => {
	const { planSiteValid } = usePageValid()

	const inputs = INPUTS_DATA.map(data => <AddOnsInput key={data.id} data={data} />)

	useEffect(() => {
		planSiteValid()
	})

	return (
		<>
			<SiteHeader title={title}>Add-ons help enhance your gaming experience.</SiteHeader>
			<FormWrapper>
				<div className={styles.form}>{inputs}</div>
			</FormWrapper>
		</>
	)
}
