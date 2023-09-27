import { useState } from 'react'

export const useCheckInput = () => {
	const [isValid, setIsValid] = useState(true)
	const [isTouched, setIsTouched] = useState(false)
	const [value, setValue] = useState()

	const checkEmail = e => {
		let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
		
		const mail = e.target.value

		if (mail.match(validRegex)) {
			setIsValid(true)
			setValue(mail)
		} else {
			setIsValid(false)
		}
		setIsTouched(true)
	}

	const checkName = e => {

		const name = e.target.value.trim()

		if (name.length >= 3) {
			setIsValid(true)
			setValue(name)
		} else {
			setIsValid(false)
		}
		setIsTouched(true)
	}

    const checkPhoneNumber = e => {
        let validRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im
        
        const number = e.target.value.replace(/\s/g,'').trim()

        if(number.match(validRegex)) {
            setIsValid(true)
			setValue(number)
        } else {
            setIsValid(false)
        }
		setIsTouched(true)
    }

	const checkIfTouched = () => {
		setIsTouched(true)
	}

	return { checkEmail, checkName, checkPhoneNumber, checkIfTouched, isValid,  isTouched, value  }
}
