import styles from './AddOnsInput.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { dataActions } from '../store'

export const AddOnsInput = ({data}) => {
    const planOption = useSelector(state => state.data.plan.option)
	const addOns = useSelector(state => state.data.addOns)
	const dispatch = useDispatch()

	const price = planOption === 'monthly' ? `${data.priceMonthly}/mo` : `${data.priceYearly}/yr`

	const checkHandler = (e) => {
		const priceToSend = price.replace(/[^\d]*$/, '') // Removes everything after digit

		dispatch(dataActions.changeAddOnsStatus({name: e.target.value, price: priceToSend, title: data.title}))
	}
	
	// Check if checked is set to true (simply compare id of item to key in store, if the same then get this item and then take his checked value)
	const currentInput = Object.keys(addOns).filter(item => item === data.id)
	const isChecked = addOns[currentInput].checked

	return (
		<label htmlFor={data.id} className={styles['form-field']}>
			<div className={styles.wrapper}>
				<div className={styles['form-info']}>
					<div>
						<input onClick={checkHandler} defaultChecked={isChecked} type='checkbox' id={data.id} value={data.id}/>
						<span className={styles.checkmark}></span>
					</div>
					<div className={styles['form-text']}>
						<h3>{data.title}</h3>
						<p>{data.description}</p>
					</div>
				</div>
				<div className={styles.price}>
					<p>{`+$${price}`}</p>
				</div>
			</div>
		</label>
	)
}
