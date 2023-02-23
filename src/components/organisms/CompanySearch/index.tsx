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

  useEffect(() => {
    if (!companies || companies?.length < 1) {
      // @ts-ignore:next-line
      dispatch(getCompanies())
    }
  }, [])

  useEffect(() => {
    if (status.searchCompany === REDUX_STATE.REJECTED || status.getCompanies === REDUX_STATE.REJECTED) {
      toast.error('Something seems wrong on our side, no results were found...')
    }
    if (
      status.searchCompany === REDUX_STATE.FULFILLED &&
      status.getCompanies === REDUX_STATE.FULFILLED &&
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

  return (
    <div>
      <div className="flex flex-row mb-4">
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
              // @ts-ignore:next-line
              dispatch(searchCompany(searchQuery))
              return e
            }}
          />
        </div>
      </div>
      <div>
        <CompanyListing companies={searchedCompanies.length ? searchedCompanies : companies} />
      </div>
    </div>
  )
}

export default CompanySearch
