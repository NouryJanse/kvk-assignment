import { ReactElement, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast'
import RootState from '../../../types/RootState'
import { getCompany, getCompanies } from '../../../redux/reducers/companies/companySlice'
import REDUX_STATE from '../../../constants/REDUX_STATE'

const Detail: React.FC = (): ReactElement => {
  const params = useParams()
  const dispatch = useDispatch()
  const companies: Company[] = useSelector((state: RootState) => state.companySlice.data.companies)
  const status = useSelector((state: RootState) => state.companySlice.status)
  const [company, setCompany] = useState<Company>({} as Company)

  useEffect(() => {
    if (params.id && companies.length) {
      const currentCompany = companies.find((companyInList: Company) => {
        return Number(companyInList.id) === Number(params.id)
      })
      if (currentCompany) setCompany(currentCompany as Company)
    }
  }, [params.id, companies, company])

  useEffect(() => {
    if (status.getCompany === REDUX_STATE.FULFILLED && company.id) {
      toast(`${company.name} was fetched`, {
        icon: '👏',
      })
    }
  }, [status.getCompany])

  useEffect(() => {
    if (!companies.length) {
      // @ts-ignore:next-line
      dispatch(getCompanies())
    }
  }, [])

  useEffect(() => {
    // @ts-ignore:next-line
    dispatch(getCompany(params.id))
  }, [])

  if (status.getCompany === REDUX_STATE.REJECTED) {
    toast.error('Sorry, no results were found.')
  }

  return (
    <div>
      <Toaster position="bottom-right" />
      {company.id ? (
        <div>
          <p>{company.name}</p>
          <img src={company.logo} alt="" />
          <p>{company.catchPhrase}</p>
          <p>{company.city}</p>
          <p>{company.website}</p>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Detail
