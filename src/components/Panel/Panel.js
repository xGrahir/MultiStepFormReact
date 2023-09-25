import styles from './Panel.module.css'

export const Panel = () => {
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.panel}>Tu będzie treść</div>
				<div className={styles.actions}>
					<button className={styles['action-back']}>Go Back</button>
					<button className={styles['action-next']}>Next Step</button>
				</div>
			</div>
		</>
	)
}
