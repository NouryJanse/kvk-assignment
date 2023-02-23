import { ReactElement } from 'react'

import CompanyTile from '../CompanyTile'

interface CompanyListingProps {
  companies: Company[]
}

const CompanyListing: React.FC<CompanyListingProps> = ({ companies }): ReactElement => {
  return (
    <div>
      {companies?.length
        ? companies.map((company: Company) => {
            return <CompanyTile key={company.id} company={company} />
          })
        : ''}
    </div>
  )
}

export default CompanyListing
