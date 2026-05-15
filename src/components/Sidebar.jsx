import { Link } from 'react-router-dom'

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Overlay — click outside to close */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed left-0 top-0 h-full bg-black/20 shadow-2xl z-50
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        style={{ width: '260px' }}
      >

        {/* Sidebar Top — Logo + X */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <h2 className="text-amber-950 text-lg font-bold tracking-widest">
            Mahima Living
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-amber-950 text-xl hover:text-amber-400 transition-colors duration-200 cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col px-4 py-6 gap-2">
          <Link to="/" onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 text-white hover:text-amber-400 hover:bg-white/10 font-medium text-lg px-4 py-3 rounded-xl transition-all duration-200">
            🏠 <span>Home</span>
          </Link>
          <Link to="/gallery" onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 text-white hover:text-amber-400 hover:bg-white/10 font-medium text-lg px-4 py-3 rounded-xl transition-all duration-200">
            🖼️ <span>Gallery</span>
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 text-white hover:text-amber-400 hover:bg-white/10 font-medium text-lg px-4 py-3 rounded-xl transition-all duration-200">
            ℹ️ <span>About</span>
          </Link>
          <Link to="/cart" onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 text-white hover:text-amber-400 hover:bg-white/10 font-medium text-lg px-4 py-3 rounded-xl transition-all duration-200">
            🛒 <span>Cart</span>
          </Link>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-6 left-0 right-0 text-center text-amber-950 text-sm">
          © 2025 Mahima Living
        </div>

      </div>
    </>
  )
}

export default Sidebar