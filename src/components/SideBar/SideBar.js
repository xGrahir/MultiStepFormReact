import styles from './SideBar.module.css'
import { SideBarElement } from './SideBarElement'
import { useSelector } from 'react-redux'

const sideBarElements = [1, 2, 3, 4]

export const SideBar = () => {

	const step = useSelector(state => state.info.page)

    const elements = sideBarElements.map(element => <SideBarElement step={step} key={element} element={element}/>)

	return (
		<div className={styles.background}>
			<div className={styles.container}>
                {elements}
            </div>
		</div>
	)
}
