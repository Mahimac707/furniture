
import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'

function Header() {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="absolute top-3 left-8 right-8 z-50 bg-white/10 backdrop-blur-md rounded-[40px] shadow-md">
        <div className="flex items-center justify-between px-6 py-4">

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-amber-950 cursor-pointer"
          >
            {isOpen ? '✕' : '☰'}
          </button>

          <Link to='/'>
          <h1 className="text-2xl font-bold tracking-wide text-amber-950">
            Mahima Living
          </h1>
          </Link>

          <Link to="/contact" className="text-xl font-medium text-amber-950 hover:text-amber-400">
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