import React from 'react'
import { FaMobileAlt } from 'react-icons/fa'
import logo from '../assets/logo.png'

export const Header = () => {
  return (
    <div className='header'>
        <img src={logo} className='logo-img'></img>
        <div className='phone' style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <p style={{ margin: '0 0 5px 0', fontSize: '12px', color: '#0d0c0c' }}>Feel free to reach us</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FaMobileAlt style={{ fontSize: '16px', color: '#d51212' }} />
              <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#d51212' }}>+91 - 9342232571</span>
            </div>
        </div>
    </div>
  )
}
