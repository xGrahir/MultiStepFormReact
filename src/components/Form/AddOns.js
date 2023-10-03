import { SiteHeader } from '../../utilites/SiteHeader'
import { FormWrapper } from '../../utilites/FormWrapper'
import { AddOnsInput } from '../../utilites/AddOnsInput'
import { usePageValid } from '../Hooks/usePageValid'
import { useEffect } from 'react'
import styles from './AddOns.module.css'

const INPUTS_DATA = [
	{
		id:0,
		title: 'Online service',
		description: 'Access to multiplayer games',
		priceMonthly: 1,
		priceYearly: 10
	},
	{
		id:1,
		title: 'Larger storage',
		description: 'Extra 1TB of cloud save',
		priceMonthly: 2,
		priceYearly: 20
	},
	{
		id:2,
		title: 'Customizable profile',
		description: 'Custom theme on your profile',
		priceMonthly: 2,
		priceYearly: 20
	}
]

export const AddOns = ({ title }) => {

	const {planSiteValid} = usePageValid()

	const inputs = INPUTS_DATA.map(data => <AddOnsInput key={data.id} data={data}/>)

	useEffect(() => {
		planSiteValid()
	})

	return (
		<>
			<SiteHeader title={title}>Add-ons help enhance your gaming experience.</SiteHeader>
			<FormWrapper></FormWrapper>
			<div className={styles.form}>
				{inputs}
			</div>
		</>
	)
}
