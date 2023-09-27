import styles from './Panel.module.css'
import { PersonalSite } from './PersonalSite'
import { PlanSite } from './PlanSite'
import { useDispatch, useSelector } from 'react-redux'
import { infoActions } from '../../store'
 
export const Form = () => {

	const dispatch = useDispatch()
	const page = useSelector(state => state.info.page)

	const title = {
		0: 'Personal Info',
		1: 'Select your plan',
		2: 'Pick add-ons',
		3: 'Finishing up'
	}

	const pages = [
		<PersonalSite title={title[page]}/>,
		<PlanSite title={title[page]}/>
	]

	const nextStep = () => {
		if(page <= pages.length) {
			dispatch(infoActions.changePage(1))
		}
	}
	
	const prevStep = () => {
		if(page>0) {
			dispatch(infoActions.changePage(-1))
		}
	}

	return (
		<>
			<form className={styles.wrapper}>
				<div className={styles.panel}>
					{pages[page]}
				</div>
				<div className={styles.actions}>
					<button onClick={prevStep} type="button" className={`${styles['action-back']} ${styles.enabled}`}>Go Back</button>
					<button onClick={nextStep} type="button" className={styles['action-next']}>Next Step</button>
				</div>
			</form>
		</>
	)
}
