import {memo} from 'react'
import {Link} from 'react-router-dom'
import Icons from '../../../../assets/sprite.svg'
import './Logo.scss'


export type LogoProps = {
  className?: string;
}

export const Logo = memo<LogoProps>(({className}) => (
  <Link to="/" className={className}>
    <svg className={className + '__svg'}>
      <use href={Icons + '#logo'}></use>
    </svg>
    <span className={className + '__text'}>eveli.todo</span>
  </Link>
));
