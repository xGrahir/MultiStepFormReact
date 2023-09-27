import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { dataActions } from '../../store'

export const useCheckInput = () => {
	const [isValid, setIsValid] = useState(false)
	const [isTouched, setIsTouched] = useState(false)
	const [value, setValue] = useState()
	const dispatch = useDispatch()

	const checkEmail = e => {

		let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
		
		const mail = e.target.value

		if (mail.match(validRegex)) {
			dispatch(dataActions.changeValidation({mail: true}))
			dispatch(dataActions.updateData({mail: mail}))
		} else {
			dispatch(dataActions.changeValidation({mail: false}))
		}
		setIsTouched(true)
	}

	const checkName = e => {

		const name = e.target.value.trim()

		if (name.length >= 3) {
			dispatch(dataActions.changeValidation({name: true}))
			dispatch(dataActions.updateData({name: name}))
		} else {
			dispatch(dataActions.changeValidation({name: false}))
		}
		setIsTouched(true)
	}

    const checkPhoneNumber = e => {
        let validRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im
        
        const phone = e.target.value.replace(/\s/g,'').trim()

        if(phone.match(validRegex)) {
            dispatch(dataActions.changeValidation({phone: true}))
			dispatch(dataActions.updateData({phone: phone}))
        } else {
            dispatch(dataActions.changeValidation({phone: false}))
        }
		setIsTouched(true)
    }

	const checkIfTouched = () => {
		setIsTouched(true)
	}

	return { checkEmail, checkName, checkPhoneNumber, checkIfTouched, isTouched }
}
