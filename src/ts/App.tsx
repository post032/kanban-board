import {FC} from 'react'
import '../scss/App.scss'
import {BrowserRouter} from 'react-router-dom'
import {Layout} from './widgets/Layout'
import Navigation from './widgets/Navigation.tsx'

const App: FC = () => {

  return (
    <BrowserRouter>
      <Layout>
        <Navigation/>
      </Layout>
    </BrowserRouter>
  )
}

export default App
