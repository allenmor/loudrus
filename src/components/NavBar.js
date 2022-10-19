import React from 'react'
import logo from '../images/logo.png'
import './NavBar.css'

function NavBar() {
  return (
    <div className='navbar-container'>
        <img className='logo' src={logo}/>
    </div>
  )
}


export default NavBar