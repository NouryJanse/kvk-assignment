import { combineReducers } from '@reduxjs/toolkit'

import companySlice from './reducers/companies/companySlice'

const rootReducer = combineReducers({
  companySlice,
})

export default rootReducer
