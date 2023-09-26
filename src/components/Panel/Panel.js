import styles from './Panel.module.css'
import {PersonalSite}  from './PersonalSite'
import { PlanSite } from './PlanSite'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { infoActions } from '../../store'
 
export const Panel = () => { 

	const [isButtonEnabled, setButtonEnabled] = useState(false)
	const [numberOfSite, changeNumberOfSite] = useState(1)
	const dispatch = useDispatch()

	const enableButtonHandler = () => {
		setButtonEnabled(true)
	}

	const nextSite = e => {
		e.preventDefault()

		// if(isButtonEnabled) {
		// 	setButtonEnabled(false)
		// 	changeNumberOfSite(prev => prev+1)
		// }
		if(numberOfSite < 4 ) {
			changeNumberOfSite(prev => prev+1)
			dispatch(infoActions.updateSite(1))
		}
	}

	const prevSite = (e) => {
		e.preventDefault()

		if(numberOfSite === 0) {
			return
		}
		if(numberOfSite > 1 ) {
			changeNumberOfSite(prev => prev-1)
			dispatch(infoActions.updateSite(-1))
		}
	}

	return (
		<>
			<form className={styles.wrapper} onSubmit={nextSite}>
				<div className={styles.panel}>
					<div className={`${styles['site-hide']} ${numberOfSite === 1 && styles.show}`}><PersonalSite enableButtonHandler={enableButtonHandler}/></div>
					<div className={`${styles['site-hide']} ${numberOfSite === 2 && styles.show}`}><PlanSite /></div>
				</div>
				<div className={styles.actions}>
					<button onClick={prevSite} className={`${styles['action-back']} ${numberOfSite > 1 && styles.enabled}`}>Go Back</button>
					<button type="submit" className={styles['action-next']}>Next Step</button>
				</div>
			</form>
		</>
	)
}
