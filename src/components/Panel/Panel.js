import styles from './Panel.module.css'
import { PersonalSite } from './PersonalSite'
import { PlanSite } from './PlanSite'

export const Panel = () => {
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.panel}><PlanSite /></div>
				<div className={styles.actions}>
					<button className={styles['action-back']}>Go Back</button>
					<button className={styles['action-next']}>Next Step</button>
				</div>
			</div>
		</>
	)
}
