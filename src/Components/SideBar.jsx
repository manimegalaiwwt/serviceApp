import React from 'react'
import { FaHome, FaInfoCircle, FaTools, FaCogs, FaPhoneAlt, } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'

export default function SideBar() {
  return (
    <div className='sidebar'>
        <h3 className='sidebar-title'>Menu</h3>
        <ul className='sidebar-nav'>
           <li className=''>
            <NavLink to="/" className='nav-item'>
              <FaHome icon></FaHome> 
              <span>Home</span>
            </NavLink>
           </li>
           <li>
            <NavLink to="/about" className='nav-item'>
              <FaInfoCircle className='icon'></FaInfoCircle>
              <span>About</span>
            </NavLink>
           </li>
           <li>
            <NavLink to='/service' className='nav-item'>
              <FaTools className="icon" />
              <span>Services</span>
            </NavLink>
           </li>
           <li>
             <NavLink to="/process" className='nav-item'>
              <FaCogs className="icon" />
              <span>Process</span>
             </NavLink>
           </li>
           <li>
            <NavLink to='/contact' className='nav-item'>
              <FaPhoneAlt  />
              <span>Contact</span>
            </NavLink>
           </li>
        </ul>

    </div>
  )
}
