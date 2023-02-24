import { ReactElement, useEffect, useMemo, useState } from 'react'

import CompanyTile from '../CompanyTile'

interface CompanyListingProps {
  companies: Company[]
}

const CompanyListing: React.FC<CompanyListingProps> = ({ companies }): ReactElement => {
  const [html, setHtml] = useState<JSX.Element[]>()
  useEffect(() => {
    if (companies?.length) {
      setHtml(
        companies.map((company: Company) => {
          return <CompanyTile key={company.id} company={company} />
        }),
      )
    }
  }, [companies])
  return <div>{html}</div>
}

export default CompanyListing
