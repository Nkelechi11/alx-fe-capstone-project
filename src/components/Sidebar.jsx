import React from 'react'
import { NavLink } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { AiOutlineUnorderedList } from 'react-icons/ai';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='shortcut-links'>
            <div className='side-links'>
               <NavLink to='/'><AiOutlineHome /><p>Home</p></NavLink> 
            </div>  
            <div className='side-links'>  
               <NavLink to='/search'> <AiOutlineSearch /><p>Search</p></NavLink> 
            </div>
            <div className='side-links'>
              <NavLink to='/playing'> <AiOutlinePlayCircle /><p>Now Playing</p></NavLink> 
            </div>
            <div className='side-links'>
              <NavLink to='/playlist'> <AiOutlineUnorderedList /><p>Playlist</p></NavLink> 
            </div>
        </div>
    </div>
  )
}

export default Sidebar