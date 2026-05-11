
import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'

function Header() {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <div className="flex items-center justify-between px-6 py-4">

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl cursor-pointer"
          >
            {isOpen ? '✕' : '☰'}
          </button>

          <Link to='/'>
          <h className="text-xl font-bold tracking-wide text-gray-800">
            Mahima Living
          </h>
          </Link>

          <Link to="/contact" className="text-sm font-medium text-gray-700 hover:text-black">
            Contact
          </Link>

        </div>
      </header>

      {/* pass isOpen to Sidebar */}
      <Sidebar isOpen={isOpen} />
    </>
  )
}

export default Header