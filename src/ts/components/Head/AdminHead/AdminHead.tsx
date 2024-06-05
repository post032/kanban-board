import {FC} from 'react'
import './AdminHead.scss'
import Icons from '../../../../assets/sprite.svg'
import Users from '../Users/Users.tsx';

type AdminHeadProps = {
  className?: string,
}

const AdminHead: FC<AdminHeadProps> = ({className}) => {
  const UsersEl: { price: string, name: string } =
    {
      price: '60 000',
      name: 'Назир'
    }
  return (
    <div className={className}>
      <div className={className + '__price'}>
        <p className={className + '__price-text'}>{UsersEl.price} &#x20bd;</p>
      </div>
      <button type='button' className={className + '__alert'}>
        <svg className={className + '__svg'}>
          <use href={Icons + '#call'}></use>
        </svg>
      </button>
      <Users className='users' name={UsersEl.name}/>
    </div>
  )
}

export default AdminHead
