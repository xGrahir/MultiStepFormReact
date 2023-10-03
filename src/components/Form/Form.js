import styles from './Panel.module.css'
import { PersonalSite } from './PersonalSite'
import { PlanSite } from './PlanSite'
import { AddOns } from './AddOns'
import { useDispatch, useSelector } from 'react-redux'
import { pageActions, dataActions } from '../../store'
 
export const Form = () => {

	const dispatch = useDispatch()
	const page = useSelector(state => state.page.page)
	const validation = useSelector(state => state.data.pageIsValid)

	const title = {
		0: 'Personal Info',
		1: 'Select your plan',
		2: 'Pick add-ons',
		3: 'Finishing up'
	}

	const pages = [
		<PersonalSite title={title[page]}/>,
		<PlanSite title={title[page]}/>,
		<AddOns title={title[page]} />,
		4
	]

	const nextStep = () => {
		if(page < pages.length-1 && validation) {
			dispatch(pageActions.changePage(1))
			dispatch(dataActions.changePageValid(false))
		}
	}
	
	const prevStep = () => {
		if(page>0 && validation) {
			dispatch(pageActions.changePage(-1))
			dispatch(dataActions.changePageValid(false))
		}
	}

	return (
		<>
			<form className={styles.wrapper}>
				<div className={styles.panel}>
					{pages[page]}
					{/* <AddOns title={title[page]}/> */}
					{/* <PlanSite title={title[page]}/>, */}
				</div>
				<div className={styles.actions}>
					<button onClick={prevStep} type="button" className={`${styles['action-back']} ${styles.enabled}`}>Go Back</button>
					<button onClick={nextStep} type="button" className={styles['action-next']}>Next Step</button>
				</div>
			</form>
		</>
	)
}
