import React, {FC} from 'react'
import Header from "../../components/Head/Header/Header.tsx";
import Sidebar from '../../components/Sidebar/Sidebar.tsx'
import './Layout.scss'


export type LayoutProps = {
  children: React.ReactNode
}

export const Layout: FC<LayoutProps> = ({children}) => (
  <>
    <Header className='header'/>
    <main className="main">
      <div className="main__wrapper">
        <Sidebar/>
        {children}
      </div>
    </main>
  </>
)
