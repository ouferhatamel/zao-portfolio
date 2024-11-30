import './Header.css'

import { Link, NavLink } from 'react-router-dom'


export default function Header() {
  return (
    <div className='header'>
      <span className='logo'><Link to='/'>ZAO</Link></span>
      <nav>
        <ul>
          <li>
            <NavLink 
              to='/Portfolio'
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/Contact'
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
