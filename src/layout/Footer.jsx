import React from 'react'

function Footer({ isOpen }) {
  return (
    <div
      className="bottom-0 text-center bg-amber-950 text-amber-50 transition-all duration-300 ease-in-out"
      style={{
        marginLeft: isOpen ? '260px' : '0px',
      }}
    >
      <p className="px-4 py-4">
        &copy; {new Date().getFullYear()} <strong>Mahima Living</strong>. All rights reserved
      </p>
    </div>
  )
}

export default Footer