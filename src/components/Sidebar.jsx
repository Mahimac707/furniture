
import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`fixed left-0 h-full bg-white shadow-xl z-40
      transform transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      style={{ top: '65px', width: '250px' }}
    >
      <nav className="flex flex-col px-6 py-6 gap-6">
        <Link to="/" onClick={isOpen} className="text-gray-700 hover:text-black font-medium text-lg">🏠 Home</Link>
        <Link to="/gallery" onClick={isOpen} className="text-gray-700 hover:text-black font-medium text-lg">🖼️ Gallery</Link>
        <Link to="/about" onClick={isOpen} className="text-gray-700 hover:text-black font-medium text-lg">ℹ️ About</Link>
        <Link to="/cart" onClick={isOpen} className="text-gray-700 hover:text-black font-medium text-lg">🛒 Cart</Link>
      </nav>
    </div>
  )
}

export default Sidebar