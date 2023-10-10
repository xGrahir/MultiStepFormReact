import styles from './SummarySite.module.css'
import { SiteHeader } from '../../../utilites/SiteHeader'
import { FormWrapper } from '../../../utilites/FormWrapper'
import { useSelector, useDispatch } from 'react-redux'
import { useCallback, useEffect } from 'react'
import { pageActions } from '../../../store'
import { usePageValid } from '../../Hooks/usePageValid'

export const SummarySite = ({ title }) => {
	const plan = useSelector(state => state.data.plan)
	const planAddOns = useSelector(state => state.data.addOns)
	const dispatch = useDispatch()
	const {planSiteValid} = usePageValid()
	const addOns = Object.keys(planAddOns)

	const planTitle = plan.name[0].toUpperCase() + plan.name.slice(1)
	const planOption = plan.option[0].toUpperCase() + plan.option.slice(1)


    let totalPrice = 0
	let planPrice 

    plan.option === 'yearly' ? planPrice = plan.price : planPrice = plan.price * 12

	const changeHandler = useCallback((e) => {
		e.preventDefault()
		dispatch(pageActions.changePageByClickOnNumber(1))
	}, [dispatch])

	const addOnsToShow = addOns.map(item => {;
        const singleItem = planAddOns[item]
		console.log(singleItem.price);
		if (singleItem.checked) {
            let price = parseInt(singleItem.price)

			if(plan.option === 'monthly') {
				price *= 12
			} else {
				price *= 10
			}

            totalPrice += price

			return (
				<div className={styles['summary-info']} key={singleItem.title}>
					<p className={styles.text}>{singleItem.title}</p>
					<p className={styles.price}>+${price}/yr</p>
				</div>
			)
		} else {
			return null
		}
	})

    totalPrice += planPrice

	useEffect(() => {
		planSiteValid()

	}, [planSiteValid])

	return (
		<>
			<SiteHeader title={title}>Double-check everything looks OK before confirming</SiteHeader>
			<FormWrapper>
				<div className={styles['summary']}>
					<div className={styles['summary-field']}>
						<div className={styles['summary-head']}>
							<div>
								<p>
									{planTitle} ({planOption})
								</p>
								<button onClick={changeHandler}>Change</button>
							</div>
							<div>
								<p className={styles.price}>${planPrice}/yr</p>
							</div>
						</div>
						<div className={styles['summary-body']}>
							{addOnsToShow}
						</div>
					</div>
					<div className={styles.total}>
						<p className={styles.text}>Total (per year)</p>
						<p className={styles['summary-price']}>${totalPrice}/yr</p>
					</div>
				</div>
			</FormWrapper>
		</>
	)
}
