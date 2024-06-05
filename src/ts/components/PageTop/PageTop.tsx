import {FC} from 'react'
import './PageTop.scss'
import Icons from '../../../assets/sprite.svg'
import {Breadcrumbs} from '../Breadcrumbs/Breadcrumbs.tsx'

type PageTopProps = {
  title: string,
  parent: string,
  linkParent: string,
  current: string,
  iconParent: string
  buttonName?: string,
  iconName: string,
  namePage: string,
  addColumns: () => void
}

const PageTop: FC<PageTopProps> = ({
                                     title,
                                     parent,
                                     linkParent,
                                     current,
                                     iconParent,
                                     buttonName,
                                     iconName,
                                     namePage,
                                     addColumns
                                   }) => {
  return (
    <section className='page-top'>
      <div className='page-top__wrapper'>
        <div className='page-top__top'>
          <h1 className='page-top__title'>{title}</h1>
          <Breadcrumbs
            className='page-top'
            parent={parent}
            linkParent={linkParent}
            current={current}
            iconParent={iconParent}
          /></div>
        <div className='page-top__bottom'>
          <div className='page-top__info'>
            <svg className='page-top__svg'>
              <use href={Icons + '#' + iconName}></use>
            </svg>
            <h2 className='page-top__name'>{namePage}</h2>
          </div>
          {buttonName ?
            <button type='button' onClick={addColumns} className='page-top__btn btn'>{buttonName}</button> : null
          }
        </div>
      </div>
    </section>
  )
}

export default PageTop
