import { SiteHeader } from '../../utilites/SiteHeader'
import { FormWrapper } from '../../utilites/FormWrapper'
import { Input } from '../../utilites/Input'
import { useState } from 'react'
import styles from './PlanSite.module.css'

const INPUTS_DATA = [
	{ name: 'arcade', priceYear: 90, priceMonth: 9, id: 0, option: 'offer' },
	{ name: 'advanced', priceYear: 120, priceMonth: 12, id: 1, option: 'offer' },
	{ name: 'pro', priceYear: 150, priceMonth: 15, id: 2, option: 'offer' },
]

export const PlanSite = ({title}) => {

    const [isSwitched, setIsSwitched] = useState(false)

    
    const switchHandler = () => {
        setIsSwitched(prev => !prev)
    }
    
    const inputs = INPUTS_DATA.map(input => <Input isSwitched={isSwitched} key={input.id} data={input} />)

	return (
		<>
			<SiteHeader title={title}>You have the option of monthly or yearly billing.</SiteHeader>
			<FormWrapper>
				<div className={styles.form}>
					{inputs}
					<div className={styles['switch-box']}>
						<p className={!isSwitched ? styles.switched : ''}>Monthly</p>
						<label className={styles.switch}>
							<input type='checkbox' onChange={switchHandler}/>
							<span className={styles.slider}></span>
						</label>
						<p className={isSwitched ? styles.switched : ''}>Yearly</p>
					</div>
				</div>
			</FormWrapper>
		</>
	)
}
