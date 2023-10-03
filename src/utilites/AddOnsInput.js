import styles from './AddOnsInput.module.css'
import { useSelector } from 'react-redux'

export const AddOnsInput = ({data}) => {

    const planOption = useSelector(state => state.data.plan.option)

	return (
		<label htmlFor={data.name} className={styles['form-field']}>
			<div className={styles.wrapper}>
				<div className={styles['form-info']}>
					<div>
						<input type='checkbox' id={data.name} />
						<span className={styles.checkmark}></span>
					</div>
					<div className={styles['form-text']}>
						<h3>{data.title}</h3>
						<p>{data.description}</p>
					</div>
				</div>
				<div className={styles.price}>
					<p>{`+$${planOption === 'monthly' ? `${data.priceMonthly}/mo`: `${data.priceYearly}/yr`}`}</p>
				</div>
			</div>
		</label>
	)
}
