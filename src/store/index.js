import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = { page: 0 }
const dataInitial = {
	personal: { name: '', mail: '', phone: '' },
	personalValidation: { name: false, mail: false, phone: false },
	plan: { price: '', name: '', option: 'monthly' },
	addOns: {
		service: { checked: false, price: '' },
		storage: { checked: false, price: '' },
		profile: { checked: false, price: '' },
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
		updatePersonalData(state, action) {
			state.personal = { ...state.personal, ...action.payload }
		},
		updatePlanData(state, action) {
			state.plan = { ...state.plan, ...action.payload }
		},
		changePersonalValidation(state, action) {
			state.personalValidation = { ...state.personalValidation, ...action.payload }
		},
		changePageValid(state, action) {
			state.pageIsValid = action.payload
		},
		changePlanOption(state, action) {
			state.plan = { ...state.plan, ...action.payload }
		},
		changeAddOnsStatus(state, action) {
			const value = Object.keys(state.addOns).filter(item => item === action.payload.name)
			console.log(state.addOns[value]);
		}
	},
})

const store = configureStore({ reducer: { page: pageSlice.reducer, data: dataSlice.reducer } })

export default store
export const pageActions = pageSlice.actions
export const dataActions = dataSlice.actions
