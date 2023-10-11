import styles from './SideBarElement.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { pageActions } from '../../store'

export const SideBarElement = ({ element, step }) => {
	const dispatch = useDispatch()
	const validation = useSelector(state => state.data.pageIsValid)
	const planName = useSelector(state => state.data.plan.name)

	const changeSiteHandler = (e) => {
		if((element === 4 || element === 3) && !planName) {
			return
		}

		if(validation) {
			dispatch(pageActions.changePageByClickOnNumber(element - 1))
		}
	}

	return (
		<button onClick={changeSiteHandler} className={`${styles.element} ${step + 1 === element && styles.active}`}>
			{element}
		</button>
	)
}
