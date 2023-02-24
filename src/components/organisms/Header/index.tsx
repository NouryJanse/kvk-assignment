import { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../../logo.svg'

const Header: React.FC = (): ReactElement => {
  const navigate = useNavigate()
  return (
    <nav
      onClick={(): void => {
        navigate('/')
      }}
      role="presentation"
      className="shadow-md focus:pointer-events-auto cursor-pointer"
    >
      <div className="o-page-topbar c-header__topbar" />
      <img src={logo} className="App-logo" alt="logo" />
    </nav>
  )
}

export default Header
