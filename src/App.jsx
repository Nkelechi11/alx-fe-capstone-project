import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Search from './Pages/Search'
import NowPlaying from './Pages/NowPlaying'
import Playlist from './Pages/Playlist'

const App = () => {
      return (
      <>
        <Navbar />
        <Sidebar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/playing' element={<NowPlaying />} />
          <Route path='/playlist' element={<Playlist />} />
        </Routes>
      
   
    </>
  )
}
export default App