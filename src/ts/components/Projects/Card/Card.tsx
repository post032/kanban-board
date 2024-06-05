import {FC} from 'react'
import {Draggable} from 'react-beautiful-dnd'
import user from '../../../../assets/users/user.png'
import user2 from '../../../../assets/users/user2.png'
import Icons from '../../../../assets/sprite.svg'
import './Card.scss'
import {Link} from "react-router-dom"

type CardProps = {
  className: string,
  hash: string,
  nameCard: string,
  id: string,
  index: number
}

const Card: FC<CardProps> = (({className, hash, nameCard, id, index}) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => {
        return (
          <article className={className + '__card card'}
                   ref={provided.innerRef}
                   {...provided.draggableProps}
                   {...provided.dragHandleProps}
                   style={{
                     userSelect: "none",
                     background: snapshot.isDragging ? 'lightblue' : 'lightcoral',
                     ...provided.draggableProps.style
                   }}
          >
            <div className='card__wrap'>
              <div className='card__implementer'>
                <div className='card__block-img'>
                  <img src={user} className='card__img'/>
                  <img src={user2} className='card__img'/>
                </div>
                <svg className='card__svg'>
                  <use href={Icons + '#color-arrow'}></use>
                </svg>
              </div>
              <div className='card__info'>
                <Link to='/' className='card__name'>
            <span className='card__hash'>
              {hash} :
            </span> {nameCard}
                </Link>
              </div>
            </div>
          </article>
      )
      }}
    </Draggable>
  )
})
export default Card
