import { SiteHeader } from '../../../utilites/SiteHeader'
import { FormWrapper } from '../../../utilites/FormWrapper'
import { PlansInput } from '../../../utilites/PlansInput'
import { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dataActions } from '../../../store'
import { usePageValid } from '../../Hooks/usePageValid'
import styles from './PlanSite.module.css'

const INPUTS_DATA = [
	{ name: 'arcade', priceYear: 90, priceMonth: 9, id: 0, option: 'offer' },
	{ name: 'advanced', priceYear: 120, priceMonth: 12, id: 1, option: 'offer' },
	{ name: 'pro', priceYear: 150, priceMonth: 15, id: 2, option: 'offer' },
]

export const PlanSite = ({ title }) => {
	const dispatch = useDispatch()
	const [isSwitched, setIsSwitched] = useState(false)
	const { planSiteValid } = usePageValid()
	const selected = useSelector(state => state.data.plan)

	const switchHandler = useCallback(() => {
		setIsSwitched(prev => !prev)

		if (!isSwitched) {
			dispatch(dataActions.changePlanOption({ option: 'yearly' }))
		} else {
			dispatch(dataActions.changePlanOption({ option: 'monthly' }))
		}
	}, [dispatch, isSwitched])

	const getInfoHandler = data => {
		dispatch(dataActions.updatePlanData(data))
	}

	useEffect(() => {
		planSiteValid()

		if (selected.option === 'yearly') {
			setIsSwitched(true)
		}
	}, [planSiteValid, selected.option])

	const inputs = INPUTS_DATA.map(input => (
		<PlansInput
			isSelected={selected.name}
			action={getInfoHandler}
			isSwitched={isSwitched}
			key={input.id}
			data={input}
		/>
	))

	return (
		<>
			<SiteHeader title={title}>You have the option of monthly or yearly billing.</SiteHeader>
			<FormWrapper>
				<div className={styles.form}>
					{inputs}
					<div className={styles['switch-box']}>
						<p className={!isSwitched ? styles.switched : ''}>Monthly</p>
						<label className={styles.switch}>
							<input checked={isSwitched ? true : false} type='checkbox' onChange={switchHandler} />
							<span className={styles.slider}></span>
						</label>
						<p className={isSwitched ? styles.switched : ''}>Yearly</p>
					</div>
				</div>
			</FormWrapper>
		</>
	)
}
