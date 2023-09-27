import { useDispatch, useSelector } from "react-redux"
import { dataActions } from "../../store"

export const usePageValid = () => {

    const dispatch = useDispatch()
    const data = useSelector(state => state.data)

    const personalSiteValid = () => {
        const personalValid = Object.values(data.personalValidation).every(Boolean)

        if(personalValid) {
            dispatch(dataActions.changePageValid(true))
        }
    }

    const planSiteValid = () => {
        const planCost = data.plan
        if(planCost.price) {
            dispatch(dataActions.changePageValid(true))
        }
    }

    return {personalSiteValid, planSiteValid}
}