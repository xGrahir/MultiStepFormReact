import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = { siteNumber: 1, error: 0 }
const personalDataInitial = { personal: { name: '', mail: '', phone: '' }}

const infoSlice = createSlice({
	name: 'info',
    initialState: initialState,
    reducers: {
        updateSite(state, action) {
            state.siteNumber += action.payload
        },
        setError(state, action) {
            state.error = 1
        },
        discardError(state, action) {
            state.error = 0
        }
    }
})

const personalDataSlice = createSlice({
    name: 'personal',
    initialState: personalDataInitial,
    reducers: {
        updateName(state, action) {
            state.personal = {...action.payload}
        },
    }
})

const store = configureStore({reducer: {info: infoSlice.reducer, personal: personalDataSlice.reducer }})

export default store
export const infoActions = infoSlice.actions
export const personalActions = personalDataSlice.actions
