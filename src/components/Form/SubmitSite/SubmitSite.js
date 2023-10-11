import { FormWrapper } from '../../../utilites/FormWrapper'
import styles from './SubmitSite.module.css'

export const SubmitSite = () => {
	return (
		<FormWrapper>
            <div className={styles.submit}>
                <div className={styles.icon}></div>
                <div className={styles.text}>
                    <h3 className={styles['info-head']}>Thank you!</h3>
                    <p className={styles.info}>Thanks for confirming your subscribtion! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
                </div>
            </div>
		</FormWrapper>
	)
}
