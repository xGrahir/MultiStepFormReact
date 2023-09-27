import styles from './SideBarElement.module.css'
import { useDispatch } from 'react-redux'
import { infoActions } from '../../store'

export const SideBarElement = ({element, step}) => {

    const dispatch = useDispatch()

    const changeSiteHandler = () => {
        dispatch(infoActions.changePageByClik(element-1))
    }

    return (
        <button onClick={changeSiteHandler} className={`${styles.element} ${step+1 === element && styles.active}`}>{element}</button>
    )
}
