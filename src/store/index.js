import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = { page: 0 }
const dataInitial = { personal: { name: '', mail: '', phone: '' }, validation: {name: false, mail: false, phone: false}}

const infoSlice = createSlice({
	name: 'info',
    initialState: initialState,
    reducers: {
        changePage(state, action) {
            state.page += action.payload
        },
        changePageByClik(state, action) {
            state.page = action.payload
        },

    }
})

const dataSlice = createSlice({
    name: 'data',
    initialState: dataInitial,
    reducers: {
        updateData(state, action) {
            state.personal =  {...state.personal, ...action.payload}
        },
        changeValidation(state, action) {
            state.validation = {...state.validation, ...action.payload}
        }
    }
})


const store = configureStore({reducer: {info: infoSlice.reducer, data: dataSlice.reducer }})

export default store
export const infoActions = infoSlice.actions
export const dataActions = dataSlice.actions
