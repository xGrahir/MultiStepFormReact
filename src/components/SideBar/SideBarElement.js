import styles from './SideBarElement.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { pageActions } from '../../store'

export const SideBarElement = ({ element, step }) => {
	const dispatch = useDispatch()
	const validation = useSelector(state => state.data.pageIsValid)

	const changeSiteHandler = () => {
		if (validation) {
			dispatch(pageActions.changePageByClick(element - 1))
		}
	}

	return (
		<button onClick={changeSiteHandler} className={`${styles.element} ${step + 1 === element && styles.active}`}>
			{element}
		</button>
	)
}
