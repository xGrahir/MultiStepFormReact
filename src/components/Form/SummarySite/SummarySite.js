import styles from './SummarySite.module.css'
import { SiteHeader } from '../../../utilites/SiteHeader'
import { FormWrapper } from '../../../utilites/FormWrapper'

export const SummarySite = ({ title }) => {
	return (
		<>
			<SiteHeader title={title}>Double-check everything looks OK before confirming</SiteHeader>
			<FormWrapper>
				<div className={styles['summary']}>
					<div className={styles['summary-field']}>
						<div className={styles['summary-head']}>
							<div>
								<p>Test</p>
								<button>Change</button>
							</div>
							<div>
								<p className={styles.price}>price</p>
							</div>
						</div>
						<div className={styles['summary-body']}>
							<div className={styles['summary-info']}>
								<p className={styles.text}>Online service</p>
								<p className={styles.price}>price</p>
							</div>
							<div className={styles['summary-info']}>
								<p className={styles.text}>Online service</p>
								<p className={styles.price}>price</p>
							</div>
						</div>
					</div>
					<div className={styles.total}>
						<p className={styles.text}>Total (per year)</p>
						<p className={styles['summary-price']}>price</p>
					</div>
				</div>
			</FormWrapper>
		</>
	)
}
