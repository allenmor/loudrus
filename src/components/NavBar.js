import React from 'react'
import bud from '../images/bud.png'
import './NavBar.css'

function NavBar() {
  return (
    <div className='navbar-container'>
      <img className='bud-logo' src={bud}/>
      <div className='logo-text'>
      <h1>! LOUD 'R' US !</h1>
      <p className='est'>EST. 2022</p>
      <a href='tel:6468830663'><p className='number'>646-883-0663</p></a>
      </div>
      <img className='bud-logo'src={bud}/>
    </div>
  )
}


export default NavBar