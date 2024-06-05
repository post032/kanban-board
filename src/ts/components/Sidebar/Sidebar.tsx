import {FC, useEffect, useState} from 'react'
import Icons from '../../../assets/sprite.svg'
import './Sidebar.scss'

const Sidebar: FC = () => {
  const [openSb, setOpenSb] = useState(false)
  const isOpenSidebar = () => {
    setOpenSb(!openSb)
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const isCloseSidebar = (e) => {
    if (!e.target.closest('aside')) {
      setOpenSb(false)
    } else {
      return
    }
  }
  useEffect(() => {
    document.addEventListener('click', isCloseSidebar)
    return () => {
      document.removeEventListener('click', isCloseSidebar)
    }
  }, [])
  return (
    <aside className='sidebar'>
      <button type='button' className='sidebar__btn-open' onClick={isOpenSidebar}>
        <svg className='sidebar__svg-open'>
          <use href={Icons + '#btn-open-sb'}></use>
        </svg>
      </button>
      <div className={openSb ? 'sidebar__wrapper _active' : 'sidebar__wrapper'}>
        <div className='sidebar__top'>
          <button type='button' className='sidebar__btn'>
            <svg className='sidebar__svg'>
              <use href={Icons + '#search'}></use>
            </svg>
          </button>
          <button type='button' className='sidebar__btn'>
            <svg className='sidebar__svg'>
              <use href={Icons + '#plus'}></use>
            </svg>
          </button>
          <button type='button' className='sidebar__btn'>
            <svg className='sidebar__svg'>
              <use href={Icons + '#grid'}></use>
            </svg>
          </button>
        </div>
        <button type='button' className='sidebar__btn sidebar__btn--big'>
          <svg className='sidebar__svg'>
            <use href={Icons + '#btn-sb'}></use>
          </svg>
        </button>
        <button type='button' className='sidebar__btn sidebar__btn--search'>
          <svg className='sidebar__svg'>
            <use href={Icons + '#ask'}></use>
          </svg>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
