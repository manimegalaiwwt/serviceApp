import React from 'react'
import logo from '../assets/logo.png'

export const Header = () => {
  return (
    <div className='header'>
        <img src={logo} className='logo-img'></img>
        <div className='phone' style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
            <p style={{ margin: '0 0 5px 0' }}>Feel free to reach us</p>
            <span style={{ fontSize: '16px', fontWeight: 'bold' }}>+91 - 9342232571</span>
        </div>
    </div>
  )
}
