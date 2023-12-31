import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = { page: 0 }
const dataInitial = {
	personal: { name: '', mail: '', phone: '' },
	personalValidation: { name: false, mail: false, phone: false },
	plan: { price: '', name: '', option: 'monthly' },
	addOns: {
		service: { checked: false, price: 0 },
		storage: { checked: false, price: 0 },
		profile: { checked: false, price: 0 },
	},
	pageIsValid: false,
}

const pageSlice = createSlice({
	name: 'page',
	initialState: initialState,
	reducers: {
		changePage(state, action) {
			state.page += action.payload
		},
		changePageByClickOnNumber(state, action) {
			state.page = action.payload
		},
	},
})

const dataSlice = createSlice({
	name: 'data',
	initialState: dataInitial,
	reducers: {
		updatePersonalData(state, action) { // update personal info from Personal Site
			state.personal = { ...state.personal, ...action.payload }
		},
		updatePlanData(state, action) { // updates plan (price, name)
			state.plan = { ...state.plan, ...action.payload }
		},
		changePersonalValidation(state, action) { //Validation for PersonalSite
			state.personalValidation = { ...state.personalValidation, ...action.payload }
		},
		changePageValid(state, action) {
			state.pageIsValid = action.payload
		},
		changePlanOption(state, action) { // set plan option monthly/yearly
			state.plan = { ...state.plan, ...action.payload }
		},
		changeAddOnsStatus(state, action) {
			const value = Object.keys(state.addOns).filter(item => item === action.payload.name)

			if (state.addOns[value].checked) {
				state.addOns[value].checked = false
			} else {
				state.addOns[value].checked = true
			}

			state.addOns[value] = { ...state.addOns[value], price: action.payload.price, title: action.payload.title }
		},
	},
})

const store = configureStore({ reducer: { page: pageSlice.reducer, data: dataSlice.reducer } })

export default store
export const pageActions = pageSlice.actions
export const dataActions = dataSlice.actions
