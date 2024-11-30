import './RootLayout.css'
import {Outlet} from 'react-router-dom'

// Components
import Header from '../../components/Header/Header'

export default function RootLayout() {
  return (
    <div className="rootLayout">
        <Header />
        <Outlet />
    </div>
  )
}
