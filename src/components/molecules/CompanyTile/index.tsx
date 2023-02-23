import { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import StyledCompanyTile from './styled'
import icon from './icon.svg'

interface CompanyTileProps {
  company: Company
}

const CompanyTile: React.FC<CompanyTileProps> = ({ company }): ReactElement => {
  const navigate = useNavigate()

  return (
    <StyledCompanyTile
      role="presentation"
      key={company.id}
      onClick={(): void => navigate(`/${company.id}`)}
      onKeyDown={(): void => {
        navigate(`/${company.id}`)
      }}
    >
      <div className="flex inline-flex flex-col md:flex-row">
        <h2 className="text-xs md:text-lg lg:text-xl font-medium">{company.name}</h2>
        <span className="md:pl-6  text-xs md:text-md lg:text-lg self-center">Adres: {company.city}</span>
      </div>
      <img src={icon} className="arrow w-4 sm:w-6 md:w-7" alt="logo" />
    </StyledCompanyTile>
  )
}
export default CompanyTile
