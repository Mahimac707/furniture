import React from 'react'

function Footer({ isOpen }) {
  return (
    <div
      className="bottom-0 text-center bg-amber-800 text-amber-50 transition-all duration-300 ease-in-out"
      style={{
        marginLeft: isOpen ? '260px' : '0px',
      }}
    >
      <p className="border-t border-amber-400 py-6 text-center text-amber-400 text-xs">
        &copy; {new Date().getFullYear()} <strong>Mahima Living</strong>. All rights reserved
      </p>
    </div>
  )
}

export default Footer