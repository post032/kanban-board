import {memo} from 'react'
import {Link} from 'react-router-dom'
import Icons from '../../../assets/sprite.svg'
import './Breadcrumbs.scss'

export type BreadcrumbsProps = {
  className: string,
  iconParent: string,
  linkParent: string,
  parent: string,
  current: string
}

export const Breadcrumbs = memo<BreadcrumbsProps>(({className, parent, linkParent, current, iconParent}) => (
  <div className={className + '__breadcrumbs breadcrumbs'}>
    <svg className='breadcrumbs__svg'>
      <use href={Icons + '#' + iconParent}></use>
    </svg>
    <Link to={linkParent} className='breadcrumbs__parent'>{parent}</Link> {parent ? '/' : ''} <span
    className='breadcrumbs__current'>{current}</span>
  </div>
))
