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
    >
      <img src={logo} className="App-logo" alt="logo" />
    </nav>
  )
}

export default Header
