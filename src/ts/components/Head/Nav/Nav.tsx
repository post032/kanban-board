import {FC, useState} from 'react'
import {NavLink, NavLinkProps} from 'react-router-dom'
import './Nav.scss'

type NavProps = {
  className?: string,
}

const Nav: FC<NavProps> = (({className}) => {
  const navElem = [
    {
      name: 'Задачи',
      link: '/task'
    },
    {
      name: 'Проекты',
      link: '/project'
    },
    {
      name: 'Статистика',
      link: '/stat'
    },
    {
      name: 'Финансы',
      link: '/finance'
    },
    {
      name: 'План',
      link: '/plan'
    },
    {
      name: 'Пользователи',
      link: '/users'
    }
  ]
  const [open, setOpen] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const isOpenMenu = () => {
    setOpen(!open)
    setOpenNav(!openNav)
  }
  const isActiveClassName: NavLinkProps['className'] = ({isActive}) => isActive ? className + '__link _active' : className + '__link'

  return (
    <div className={className}>
      <button type='button' onClick={isOpenMenu} className={open ? className + '__menu _opened' : className + '__menu'}>
        <span className={className + '__menu-line'}></span>
        <span className={className + '__menu-line'}></span>
        <span className={className + '__menu-line'}></span>
      </button>
      <nav className={openNav ? className + '__nav _active' : className + '__nav'}>
        {navElem.map((item, key) => {
          return (
            <NavLink key={key} onClick={() => {
              setOpenNav(false)
              setOpen(false)
            }} className={isActiveClassName} to={item.link}>{item.name}</NavLink>
          )
        })}
      </nav>
    </div>
  )
})


export default Nav
