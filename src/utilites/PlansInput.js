import styles from './PlansInput.module.css'
import { useEffect } from 'react'

export const PlansInput = ({ data, isSwitched, action, isSelected }) => {

	const selectHandler = () => {
		const price = isSwitched ? data.priceYear : data.priceMonth

		action({price: price, name: data.name})
	}

	const checked = isSelected === data.name

	useEffect(() => {
		if(checked) {
			selectHandler()
		}
	}, [checked, isSwitched])

	return (
		<div className={styles['form-field']}>
			<input onClick={selectHandler} defaultChecked={checked} type='radio' id={data.name} name={data.option}/>
			<label htmlFor={data.name}>
				<div className={styles.wrap}>
					<div className={`${styles.icon} ${styles[`${data.name}`]}`}></div>
					<div className={styles['label-text']}>
						<h3>{data.name[0].toUpperCase() + data.name.slice(1)}</h3>
						<p className={styles.price}>${isSwitched ? `${data.priceYear}/yr` : `${data.priceMonth}/mo`}</p>
						{isSwitched ? <p className={styles.months}>2 months free</p>:''}
					</div>
				</div>
			</label>
		</div>
	)
}
