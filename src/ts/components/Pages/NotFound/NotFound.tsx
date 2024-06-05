import {FC} from 'react'
import {Link} from "react-router-dom";

const NotFound: FC = () => {
  return (
    <>
      <p>Стрница не найдена. Перейдите на страницу <Link to='/project'>Проекты</Link></p>
    </>
  )
}

export default NotFound
