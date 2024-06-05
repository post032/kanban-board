import {FC, useState} from 'react'
import uuid from "react-uuid"
import Icons from '../../../assets/sprite.svg'
import './Modal.scss'

type ModalProps = {
  onClose: () => void
  setColumns: (a: any) => void
  setAddModalColumn: (b: boolean) => void
  columns: any
}

const Modal: FC<ModalProps> = ({onClose, columns, setColumns, setAddModalColumn}) => {
  const [checkValue, setCheckValue] = useState('pin')
  const [nameValue, setNameValue] = useState('')

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const onNameChange = (e) => {
    setNameValue(e.target.value)
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const onCheckChange = (e) => {
    setCheckValue(e.target.value)
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const onAddColumnSubmit = (e) => {
    e.preventDefault()
    setAddModalColumn(false)
    document.body.classList.remove('modal-wrap')
    setColumns({
      ...columns,
      [uuid()]: {
        status: uuid(),
        name: nameValue,
        icon: checkValue,
        cards: [],
      },
    })
  }
  return (
    <div className='modal'>
      <button className='modal__close' onClick={onClose}>
        <span className='visually-hidden'>Закрыть</span>
      </button>
      <form className='modal__content' onSubmit={onAddColumnSubmit}>
        <div className='modal__icon'>
          <p className='modal__title'>Выбирите иконку</p>
          <div className='modal__icons'>
            <label className='modal__label'>
              <input className='visually-hidden' name='check' onClick={onCheckChange} value='pin' type='radio'/>
              <svg className='modal__svg'>
                <use href={Icons + '#pin'}></use>
              </svg>
            </label>
            <label className='modal__label'>
              <input className='visually-hidden' name='check' onClick={onCheckChange} value='finish' type='radio'/>
              <svg className='modal__svg'>
                <use href={Icons + '#finish'}></use>
              </svg>
            </label>
            <label className='modal__label'>
              <input className='visually-hidden' name='check' onClick={onCheckChange} value='check' type='radio'/>
              <svg className='modal__svg'>
                <use href={Icons + '#check'}></use>
              </svg>
            </label>
            <label className='modal__label'>
              <input className='visually-hidden' name='check' onClick={onCheckChange} value='play' type='radio'/>
              <svg className='modal__svg'>
                <use href={Icons + '#play'}></use>
              </svg>
            </label>
          </div>
        </div>
        <label className='modal__name'>
          <p className='modal__title'>Введите название столбца</p>
          <input className='modal__input' name='name' onChange={onNameChange} value={nameValue} type='text'/>
        </label>
        <button className='modal__btn btn' type='submit' disabled={nameValue === '' ? true : false}>
          Добавить
        </button>
      </form>
    </div>
  )
}
export default Modal
