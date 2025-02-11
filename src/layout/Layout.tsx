import styles from './Layout.module.css'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import cn from 'classnames'



function Layout() {


  return (
    <div className={cn(styles['layout'])}>
      <Header/>
      <Outlet />
    </div>
  )
}

export default Layout
