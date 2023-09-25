import { useState } from 'react'

export const useCheckInput = () => {
	const [isValid, setIsValid] = useState(false)
	const [isTouched, setIsTouched] = useState(false)
    const [value, setValue] = useState()

	const checkEmail = e => {
		let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

		if (e.target.value.match(validRegex)) {
			setIsValid(true)
		} else {
			setIsValid(false)
		}
	}

	const checkName = e => {

		if (e.target.value.trim().length >= 3) {
			setIsValid(true)
		} else {
			setIsValid(false)
		}
	}

    const checkPhoneNumber = e => {
        let validRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im
        
        const number = e.target.value.replace(/\s/g,'').trim()

        if(number.match(validRegex)) {
            setIsValid(true)
        } else {
            setIsValid(false)
        }
    }

	const checkIfTouched = () => {
		setIsTouched(true)
	}

	return { checkEmail, checkName, checkPhoneNumber, checkIfTouched, isValid,  isTouched, value  }
}
