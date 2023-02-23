import { ReactElement } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import CompanyListing from '../../molecules/CompanyListing'

const Home: React.FC = (): ReactElement => {
  const params = useParams()

  return <div>{!params?.id ? <CompanyListing /> : <Outlet />}</div>
}

export default Home
