import React from 'react'
import '../Nav/Nav.css'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='bgBlack nav'>
      <Link to='/'>Artini's Restaurant</Link>
      <NavLink to='/'>HOME</NavLink>
        <NavLink to='/ourteam'>TEAM</NavLink>
        <NavLink to='/menu'>MENU</NavLink>
        <NavLink to='/reservation'>RESERVATION</NavLink>
        <NavLink to='/contact'>CONTACT</NavLink>
        <NavLink to='/login'><button className='bgOrange colorBlack'>LOGIN</button></NavLink>
    </div>
  )
}

export default Nav