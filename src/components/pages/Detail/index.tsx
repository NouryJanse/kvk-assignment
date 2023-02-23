import { ReactElement, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import RootState from '../../../types/RootState'
import { getCompany, getCompanies } from '../../../redux/reducers/companies/companySlice'
import REDUX_STATE from '../../../constants/REDUX_STATE'

const Detail: React.FC = (): ReactElement => {
  const params = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const companies: Company[] = useSelector((state: RootState) => state.companySlice.data.companies)
  const status = useSelector((state: RootState) => state.companySlice.status)
  const [company, setCompany] = useState<Company>({} as Company)
  const defaultImage = `https://picsum.photos/300?  ${Math.random()}` // the appended random results in the expected behavior but is not a desired fix
  const [image, setImage] = useState(defaultImage)

  useEffect(() => {
    if (params.id && companies.length) {
      const currentCompany = companies.find((companyInList: Company) => {
        return Number(companyInList.id) === Number(params.id)
      })
      if (currentCompany) setCompany(currentCompany as Company)
    }
  }, [params.id, companies])

  useEffect(() => {
    if (status.getCompany === REDUX_STATE.FULFILLED && company.id) {
      toast(`${company.name} was fetched`, {
        icon: '👏',
      })
    }
  }, [status])

  if (status.getCompanies === REDUX_STATE.REJECTED || status.getCompany === REDUX_STATE.REJECTED) {
    toast.error('Sorry, no results were found.')
  }

  // if the page is refreshed it will fetch all the companies too
  useEffect(() => {
    if (!companies.length) {
      // @ts-ignore:next-line
      dispatch(getCompanies())
    }
    if (company.id && company?.fetchComplete !== true) {
      // @ts-ignore:next-line
      dispatch(getCompany(params.id))
    }
  }, [company])

  return (
    <div>
      {company.id ? (
        // should be refactored into a seperate component
        <div>
          <div className="flex flex-row justify-between">
            <h1 className="text-4xl pb-4">{company.name}</h1>
            <span
              onClick={(): void => {
                navigate('/')
              }}
              role="presentation"
              className="self-center font-bold text-green hover:underline cursor-pointer"
            >
              Terug naar home
            </span>
          </div>

          <img
            src={image}
            alt=""
            width="300px"
            height="300px"
            onMouseEnter={(): void => setImage(company.logo)}
            onMouseLeave={(): void => setImage(defaultImage)}
          />

          <span className="block">Our motto: {company.catchPhrase}</span>
          <span className="block">Located in: {company.city}</span>

          <a href={company.website} target="_blank" rel="noreferrer" className="hover:font-bold underline">
            {company.website}
          </a>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Detail
