import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

async function getCompaniesAPI(): Promise<Company[]> {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/companies`)
  return response.data
}

const getCompaniesThunk = createAsyncThunk('companies/getCompanies', async () => {
  const reponse = await getCompaniesAPI()
  return reponse.data
})

export default getCompaniesThunk
