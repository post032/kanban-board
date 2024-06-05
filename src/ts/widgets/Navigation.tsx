import {FC} from 'react'
import {Route, Routes} from 'react-router-dom'
import NotFound from '../components/Pages/NotFound/NotFound.tsx'
import Projects from '../components/Pages/Projects/Projects.tsx'


const Navigation: FC = () => {
  return (
    <Routes>
      <Route path='/project' element={<Projects/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}
export default Navigation
