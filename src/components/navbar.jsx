import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import'./navbar.css'
import logo from '../assets/logo1.webp'
const Navbar = () => {

 
  return (


   <div className='navbar'>
    <div className='main_img'>
      <img className='img' src={logo} alt="" />
    </div>
<ul className='main-navbar'>

    <li className='list'>
       <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}> Home </NavLink>
    </li>

    <li className='list'> 
    <NavLink to="/about_Us" className={({ isActive }) => (isActive ? 'active' : 'inactive')}> About Us </NavLink>
    </li>

    <li className='list'> 
    <NavLink  to="/contact_Us" className={({ isActive }) => (isActive ? 'active' : 'inactive')}> Contact Us </NavLink> 
    </li>
</ul>
   </div>
  )
}

export default Navbar