import styles from './SideBar.module.css'
import { SideBarElement } from './SideBarElement'

export const SideBar = () => {

    const sideBarElements = [1,2,3,4]

    const elements = sideBarElements.map(element => <SideBarElement element = {element}/>)

	return (
		<div className={styles.background}>
			<div className={styles.container}>
                {elements}
            </div>
		</div>
	)
}
