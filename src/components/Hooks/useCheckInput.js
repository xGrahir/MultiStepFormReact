import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { dataActions } from '../../store'

export const useCheckInput = () => {
	const [isTouched, setIsTouched] = useState(false)
	const dispatch = useDispatch()

	const checkEmail = e => {

		let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
		
		const mail = e.target.value

		if (mail.match(validRegex)) {
			dispatch(dataActions.changePersonalValidation({mail: true}))
			dispatch(dataActions.updatePersonalData({mail: mail}))
		} else {
			dispatch(dataActions.changePersonalValidation({mail: false}))
		}
		setIsTouched(true)
	}

	const checkName = e => {

		const name = e.target.value.trim()

		if (name.length >= 3) {
			dispatch(dataActions.changePersonalValidation({name: true}))
			dispatch(dataActions.updatePersonalData({name: name}))
		} else {
			dispatch(dataActions.changePersonalValidation({name: false}))
		}
		setIsTouched(true)
	}

    const checkPhoneNumber = e => {
        let validRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im
        
        const phone = e.target.value.replace(/\s/g,'').trim()

        if(phone.match(validRegex)) {
            dispatch(dataActions.changePersonalValidation({phone: true}))
			dispatch(dataActions.updatePersonalData({phone: phone}))
        } else {
            dispatch(dataActions.changePersonalValidation({phone: false}))
        }
		setIsTouched(true)
    }

	const checkIfTouched = () => {
		setIsTouched(true)
	}

	return { checkEmail, checkName, checkPhoneNumber, checkIfTouched, isTouched }
}
