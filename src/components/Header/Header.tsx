import React from 'react'
import { Link } from 'react-router-dom'
import ActionButton from '../ActionButton/ActionButton'
import './Header.css'

const Header = () => {
  return (
    <header className='header d-f jc-sb align-center'>
      <div className="header-logo"><img src="images/logo.svg" alt="Glass Huts" /></div>
      <nav>
        <ul className="nav-list d-f">
          <li className="nav-list-item"><Link to="/">Home</Link></li>
          <li className="nav-list-item"><Link to="hut">The Hut</Link></li>
          <li className="nav-list-item"><Link to="area">The area</Link></li>
          <li className="nav-list-item"><a href="">Booking</a></li>
          <li className="nav-list-item"><a href="">About us</a></li>
          <li className="nav-list-item"><a href="">Faq</a></li>
        </ul>
      </nav>
      <ActionButton title='Book now'/>
       
    </header>
  )
}

export default Header