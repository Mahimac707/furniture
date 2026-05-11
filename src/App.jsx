import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './layout/Header'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <BrowserRouter>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* wrapper for sidebar + content together */}
      <div className="flex mt-16">

        {/* Sidebar space holder */}
        <div
          className="transition-all duration-300 ease-in-out shrink-0"
          style={{ width: isOpen ? '250px' : '0px' }}
        />

        {/* Main content */}
        <main className="flex-1 transition-all duration-300 ease-in-out">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  )
}

export default App