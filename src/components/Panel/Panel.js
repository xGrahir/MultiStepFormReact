import styles from './Panel.module.css'
import {PersonalSite}  from './PersonalSite'
import { PlanSite } from './PlanSite'
import { useState } from 'react'
 
export const Panel = () => {

	const [isButtonEnabled, setButtonEnabled] = useState(false)
	const [numberOfSite, changeNumberOfSite] = useState(0)

	const enableButtonHandler = () => {
		setButtonEnabled(true)
	}

	const nextSite = e => {
		e.preventDefault()

		console.log(numberOfSite);

		if(isButtonEnabled) {
			setButtonEnabled(false)
			changeNumberOfSite(prev => prev+1)
		}

		return false
	}

	const prevSite = (e) => {
		e.preventDefault()

		if(numberOfSite === 0) {
			return
		}
		changeNumberOfSite(prev => prev-1)
		setButtonEnabled(true)
	}

	return (
		<>
			<form className={styles.wrapper} onSubmit={nextSite}>
				<div className={styles.panel}>
					{numberOfSite === 0 && <PersonalSite enableButtonHandler={enableButtonHandler}/>}
					{numberOfSite === 1 && <PlanSite />}
				</div>
				<div className={styles.actions}>
					<button onClick={prevSite} className={`${styles['action-back']} ${numberOfSite > 0 && styles.enabled}`}>Go Back</button>
					<button type="submit" className={styles['action-next']}>Next Step</button>
				</div>
			</form>
		</>
	)
}
