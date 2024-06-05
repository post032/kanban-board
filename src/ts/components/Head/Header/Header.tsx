import {FC} from 'react'
import {Logo} from "../Logo"
import Nav from '../Nav/Nav.tsx'
import AdminHead from "../AdminHead/AdminHead.tsx"
import './Header.scss'

type HeaderOriginProps = {
  className?: string,
}

const Header: FC<HeaderOriginProps> = (({className}) => {
  return (
    <header className={className}>
      <div className={className + '__container container'}>
        <Logo className='logo'/>
        <Nav className='nav'/>
        <AdminHead className='admin-head'/>
      </div>
    </header>
  )
})

export default Header
