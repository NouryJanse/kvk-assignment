import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

async function getCompanyAPI(companyId: number): Promise<Company> {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/companies/${companyId}/details`)
  return response.data
}

const getCompanyThunk = createAsyncThunk('companies/getCompany', async (companyId: number) => {
  const company = await getCompanyAPI(companyId)
  return company.data[0]
})

export default getCompanyThunk
