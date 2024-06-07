import { FC } from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import './Kanban.scss'
import Column from '../Column/Column'
import {ColumnType} from '../../../types.ts'


type KanbanProps = {
  columns: { [key: string]: ColumnType }
  setColumns: (a: { [key: string]: ColumnType }) => void
}

const Kanban: FC<KanbanProps> = ({ columns, setColumns }) => {
  const closeColumnHandler = (id: string | number) => {
    const newColumns = {...columns}
    delete newColumns[id]
    setColumns({
      ...newColumns
    })
  }
  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return
    const { source, destination } = result

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId]
      const destColumn = columns[destination?.droppableId]
      const sourceItems = [...sourceColumn.cards]
      const destItems = [...destColumn.cards]
      const [removed] = sourceItems.splice(source.index, 1)
      destItems.splice(destination.index, 0, removed)
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          cards: sourceItems,
        },
        [destination?.droppableId]: {
          ...destColumn,
          cards: destItems,
        },
      })
    } else {
      const column = columns[source.droppableId]
      const copiedItems = [...column.cards]
      const [removed] = copiedItems.splice(source.index, 1)
      copiedItems.splice(destination.index, 0, removed)
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          cards: copiedItems,
        },
      })
    }
  }

  return (
    <section className='kanban'>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className='kanban__wrap'>
          {Object.entries(columns).map(([id, item]) => {
            return (
              <Column
                key={id}
                id={id}
                iconEl={item.icon}
                title={item.name}
                closeColumnHandler={closeColumnHandler}
                status={item.status}
                className='kanban'
                cards={item.cards}
              />
            )
          })}
        </div>
      </DragDropContext>
    </section>
  )
}

export default Kanban
