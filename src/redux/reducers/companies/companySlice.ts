import { createSlice } from '@reduxjs/toolkit'
import { getCompaniesThunk, searchCompanyThunk, getCompanyThunk } from './thunks'

import { REDUX_STATE } from '../../../constants'
import LogHelper from '../../../helpers/LogHelper'

export const initialState = {
  data: { companies: [] as Company[] },
  status: {
    getCompanies: 'initial',
    searchCompany: 'initial',
    getCompany: 'initial',
  },
  error: {},
}

export const getCompanies = getCompaniesThunk
export const searchCompany = searchCompanyThunk
export const getCompany = getCompanyThunk

export const companySlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCompanies.pending, (state) => {
      state.status.getCompanies = REDUX_STATE.LOADING
      state.error = {}
    })
    builder.addCase(getCompanies.rejected, (state) => {
      state.status.getCompanies = REDUX_STATE.REJECTED
      LogHelper({ logType: 'error', message: 'An error occurred' })
      state.error = {}
    })
    builder.addCase(getCompanies.fulfilled, (state, action) => {
      state.status.getCompanies = REDUX_STATE.FULFILLED
      if (action !== null && action.payload) {
        state.data.companies = action.payload
      }
      state.error = {}
    })

    builder.addCase(searchCompany.pending, (state) => {
      state.status.searchCompany = REDUX_STATE.LOADING
      state.error = {}
    })
    builder.addCase(searchCompany.rejected, (state) => {
      state.status.searchCompany = REDUX_STATE.REJECTED
      LogHelper({ logType: 'error', message: 'An error occurred' })
      state.error = {}
    })
    builder.addCase(searchCompany.fulfilled, (state, action) => {
      state.status.searchCompany = REDUX_STATE.FULFILLED
      if (action !== null && action.payload) {
        state.data.companies = action.payload
      }
      state.error = {}
    })

    builder.addCase(getCompany.pending, (state) => {
      state.status.getCompany = REDUX_STATE.LOADING
      state.error = {}
    })
    builder.addCase(getCompany.rejected, (state) => {
      state.status.getCompany = REDUX_STATE.REJECTED
      LogHelper({ logType: 'error', message: 'An error occurred' })
      state.error = {}
    })
    builder.addCase(getCompany.fulfilled, (state, action) => {
      // eslint-disable-next-line prefer-destructuring
      const companies: Company[] = state.data.companies
      if (action?.payload) {
        state.data.companies = companies.map((company: Company) => {
          return company.id === action.payload.id ? { ...company, ...action.payload } : company
        })
      }
      // state.data.companyDetail = action.payload
      state.status.getCompany = REDUX_STATE.FULFILLED
      state.error = {}
    })
  },
})

// export const { resetCompanySliceStatus } = companySlice.actions

export default companySlice.reducer
