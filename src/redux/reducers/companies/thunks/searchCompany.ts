import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

async function searchCompanyAPI(query: string): Promise<Company> {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/companies?search=${query}`)
  return response.data
}

const searchCompanyThunk = createAsyncThunk('companies/searchCompany', async (query: string) => {
  const company = await searchCompanyAPI(query)
  return company.data
})

export default searchCompanyThunk
