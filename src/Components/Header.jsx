import React from 'react'
import logo from '../assets/logo.png'

export const Header = () => {
  return (
    <div className='header'>
        <img src={logo} className='logo-img'></img>
        <div className='phone'>
            <p>Feel free to reach us</p>
            +91 -9342232571 
        </div>
    </div>
  )
}
