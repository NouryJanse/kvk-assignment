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
  return (
    <div className="grid xs:grid-cols-1 lg:grid-flow-col gap-3">
      <div className="lg:col-span-10 xl:col-span-11">{html}</div>
      <div className="lg:col-span-1 xl:col-span-1">
        <img
          className="signatureImage max-w-md xl:max-w-xl object-cover h-2/4"
          src="https://www.architour.nl/wp-content/uploads/2021/12/The-Valley01_PV-scaled.jpg"
          alt="signatureImage"
        />
      </div>
    </div>
  )
}

export default CompanyListing
