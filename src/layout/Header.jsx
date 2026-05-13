import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'

function Header({ isOpen, setIsOpen }) {
  return (
    <>
      <header className="absolute top-3 left-8 right-8 z-50 bg-white/10 backdrop-blur-md rounded-[40px] shadow-md"
      style={{
        left: isOpen ? '278px' : '32px',   // 260px sidebar + 18px gap
        right: '32px',
      }}
      >
        <div className="flex items-center justify-between px-6 py-4">

          {/* Only hamburger — no ✕ here anymore */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-amber-950 cursor-pointer hover:text-amber-600 transition-colors duration-200"
          >
            ☰
          </button>

          <Link to='/'>
            <h1 className="text-2xl font-bold tracking-wide text-amber-950 transition-colors duration-200">
              Mahima Living
            </h1>
          </Link>

          <Link to="/contact" className="text-sm font-medium text-amber-950 border border-amber-950/40 px-4 py-2 rounded-full hover:bg-amber-400 hover:text-black hover:border-amber-400 transition-all duration-300">
            Contact
          </Link>

        </div>
      </header>

      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export default Header