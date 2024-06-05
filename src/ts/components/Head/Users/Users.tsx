import {FC} from 'react'
import {Link} from 'react-router-dom'
import Icons from '../../../../assets/sprite.svg'
import user from '../../../../assets/users/user.png'
import './Users.scss'

type UsersProps = {
  className?: string
  name: string
}

const Users: FC<UsersProps> = ({className}) => {
  return (
    <Link className={className} to=''>
      <img src={user} className={className + '__img'}/>
      <div className={className + '__item'}>
        <p className={className + '__name'}>Назир
        </p>
        <svg className={className + '__svg'}>
          <use href={Icons + '#arrow-down'}></use>
        </svg>
      </div>
    </Link>
  )
}
export default Users
