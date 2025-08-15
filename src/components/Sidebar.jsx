import React from 'react'
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { AiOutlineUnorderedList } from 'react-icons/ai';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='shortcut-links'>
            <div className='side-links'>
                <AiOutlineHome /><p>Home</p>
            </div>  
            <div className='side-links'>  
               <AiOutlineSearch /><p>Search</p>
            </div>
            <div className='side-links'>
                <AiOutlinePlayCircle /><p>Now Playing</p>
            </div>
            <div className='side-links'>
                <AiOutlineUnorderedList /><p>Playlist</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar