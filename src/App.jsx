import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './layout/Header'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './layout/Footer'
import Favourite from './pages/Favourite'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <BrowserRouter>
     

      <Header isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex">

        <div
          className="transition-all duration-300 ease-in-out shrink-0"
          style={{ width: isOpen ? '250px' : '0px' }}
        />
        <main className="flex-1 transition-all duration-300 ease-in-out">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/about' element={<About />} />
            <Route path='/favourite' element={<Favourite/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
        </main>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App