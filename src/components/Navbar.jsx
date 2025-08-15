import React from 'react'
import '../components/Navbar'
import logo from '../assets/logo.png'
import { FaUpload } from 'react-icons/fa6';
import { FaBell } from 'react-icons/fa6';
import { AiOutlineSearch } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="logo" className='logo' />

        <div className='nav-search'>
          <input type='text'  placeholder='search'/>
          <AiOutlineSearch />
        </div>
       
        <div className='right-side'>
        <div className='navbar-upd'>
          <FaUpload />
        </div>
        <div className='navbar-notify'>
          <FaBell />
        </div>
        <div>
            <button className='navbar-signup'>Sign In</button>
        </div>
        </div>

    </div>
  )
}

export default Navbar

