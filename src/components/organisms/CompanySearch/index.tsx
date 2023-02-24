import { ReactElement, useEffect, useRef, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useSelector, useDispatch } from 'react-redux'
import { debounce } from 'ts-debounce'

import { Button, CompanyListing, Textfield } from '../..'
import { REDUX_STATE } from '../../../constants'
import { getCompanies, resetSearchedCompanies, searchCompany } from '../../../redux/reducers/companies/companySlice'
import RootState from '../../../types/RootState'

const CompanySearch: React.FC = (): ReactElement => {
  const companies = useSelector((state: RootState) => state.companySlice.data.companies)
  const searchedCompanies = useSelector((state: RootState) => state.companySlice.data.searchedCompanies)
  const status = useSelector((state: RootState) => state.companySlice.status)
  const dispatch = useDispatch()
  const [searchQuery, setSearchQuery] = useState('')
  const [listedCompanies, setListedCompanies] = useState<Company[] | null>(null)

  useEffect(() => {
    if (!companies || companies?.length < 1) {
      // @ts-ignore:next-line
      dispatch(getCompanies())
    }
  }, [])

  useEffect(() => {
    if (status.searchCompany === REDUX_STATE.REJECTED || status.getCompanies === REDUX_STATE.REJECTED) {
      toast.error('Er lijkt bij ons iets mis te zijn, er zijn geen resultaten gevonden...')
    }
    if (
      status.searchCompany === REDUX_STATE.FULFILLED &&
      status.getCompanies === REDUX_STATE.FULFILLED &&
      searchQuery !== '' &&
      searchedCompanies.length === 0
    ) {
      toast('No results found!', {
        icon: '😔',
      })
    }
  }, [status])

  const debouncedInputChange = useRef(
    debounce(async (data: string) => {
      setSearchQuery(data)
      if (data) {
        // @ts-ignore:next-line
        dispatch(searchCompany(data))
      } else {
        // @ts-ignore:next-line
        dispatch(resetSearchedCompanies())
      }
    }, 250),
  ).current

  const onType = (event: React.ChangeEvent<HTMLInputElement>): void => {
    debouncedInputChange(event.target.value)
  }

  useEffect(() => {
    if (searchQuery !== '' && searchedCompanies.length > 0) {
      setListedCompanies(searchedCompanies)
    } else if (searchQuery === '' && companies.length > 0) {
      setListedCompanies(companies)
    } else if (searchQuery !== '' && searchedCompanies.length === 0) {
      setListedCompanies(null)
    }
  }, [companies, searchedCompanies, searchQuery])

  return (
    <div>
      <div className="flex flex-row mb-5">
        <Textfield
          name="companyName"
          label="Zoek op bedrijf, KVK-nummer of trefwoord"
          placeholder="Zoek in kvk.nl"
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void => onType(e)}
        />

        <div className="flex self-end">
          <Button
            label="Zoek"
            type="button"
            buttonStyle="primary"
            disabled={false}
            fullwidth={false}
            noedge={false}
            classes=""
            onClick={(e): React.MouseEvent<HTMLButtonElement> => {
              if (searchQuery) {
                // @ts-ignore:next-line
                dispatch(searchCompany(searchQuery))
              }
              return e
            }}
          />
        </div>
      </div>
      <div>
        {listedCompanies ? (
          <CompanyListing companies={listedCompanies} />
        ) : (
          'Oeps! Het lijkt erop dat er geen resultaten zijn voor jouw ingevoerde zoektermen.'
        )}
      </div>
    </div>
  )
}

export default CompanySearch
