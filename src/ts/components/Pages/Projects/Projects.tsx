import { FC, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import {ColumnType} from '../../../types.ts'
import PageTop from '../../PageTop/PageTop'
import Kanban from '../../Projects/Kanban/Kanban'
import Modal from '../../Modal/Modal'
import './Projects.scss'
import data from '../../../../data/data'


const Projects: FC = () => {
  const columnData = useMemo(() => {
    return data.columns
  }, [])
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const [columns, setColumns] = useState<{ [key: string]: ColumnType }>(columnData)
  const [addModalColumn, setAddModalColumn] = useState(false)
  const closeModalHandler = (): void => {
    setAddModalColumn(false)
    document.body.classList.remove('modal-wrap')
  }
  const addColumns = (): void => {
    setAddModalColumn(true)
    document.body.classList.add('modal-wrap')
  }

  return (
    <section className='projects'>
      <PageTop
        title='Проекты'
        parent='CRM - система'
        linkParent='/'
        current='Процессы'
        iconParent='play'
        buttonName='Добавить столбец'
        iconName='wave'
        namePage='Процессы проекта CRM - система'
        addColumns={addColumns}
      />
      <Kanban
        columns={columns}
        setColumns={setColumns}
      />
      {addModalColumn &&
        createPortal(
          <Modal
            columns={columns}
            setColumns={setColumns}
            setAddModalColumn={setAddModalColumn}
            onClose={closeModalHandler}
          />,
          document.body
        )}
    </section>
  )
}

export default Projects
