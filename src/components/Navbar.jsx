import React from 'react'
import '../components/Navbar'
import logo from '../assets/logo.png'
import { FaUpload } from 'react-icons/fa6';
import { FaBell } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="logo" className='logo' />
        <div className='right-side'>
        <div className='navbar-upd'>
          <FaUpload />
        </div>
        <div className='navbar-notify'>
          <FaBell />
        </div>
        <div className='navbar-signup'>
            <button>Sign In</button>
        </div>
        </div>
    </div>
  )
}

export default Navbar

