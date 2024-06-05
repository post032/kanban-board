import {memo} from 'react'
import {CardType} from '../../../types.ts'
import {Droppable} from 'react-beautiful-dnd'
import Icons from '../../../../assets/sprite.svg'
import './Column.scss'
import Card from '../Card/Card.tsx'

type ColumnProps = {
  className: string
  status: string
  iconEl: string,
  title: string,
  closeColumnHandler: (a: any) => void,
  cards: CardType[],
  id: string,
}

const Column = memo<ColumnProps>(({
                                    className,
                                    status,
                                    iconEl,
                                    title,
                                    closeColumnHandler,
                                    id,
                                    cards}) => {
  return (
    <Droppable droppableId={id}>
      {(provided) => {
        return (
          <div key={id}
               {...provided.droppableProps}
               ref={provided.innerRef}
          >
            <section className={className + '__column ' + status + '__column column'}>
              <div className='column__top'>
                <h3 className='column__title'>
                  <svg className='column__svg'>
                    <use href={Icons + '#' + iconEl}></use>
                  </svg>
                  {title}
                </h3>
                <div className='column__edit'>
                  <button type='button' className='column__btn'>
                    <svg className='column__svg'>
                      <use href={Icons + '#edit'}></use>
                    </svg>
                  </button>
                  <button type='button' className='column__btn' onClick={() => closeColumnHandler(id)}>
                    <svg className='column__svg'>
                      <use href={Icons + '#basket'}></use>
                    </svg>
                  </button>
                </div>
              </div>
              <div className='column__wrap'>
                {cards.map((item, index) =>
                  (
                    <Card className='column'
                          key={item.id}
                          id={item.id}
                          index={index}
                          hash={item.hash}
                          nameCard={item.nameCard}
                    />
                  )
                )}
              </div>
              <button type='button' className='column__add-btn' title='добавить карточку'>
                <svg className='column__add-btn-svg'>
                  <use href={Icons + '#plus'}></use>
                </svg>
              </button>
            </section>
            {provided.placeholder}
          </div>
        )
      }}
    </Droppable>
  )
})
export default Column
