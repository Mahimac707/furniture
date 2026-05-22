import React from 'react'

function Footer() {
  return (
    <div className="bottom-0 left-0 right-0 text-center bg-amber-950 text-amber-50">
      <p className="px-4 py-4">&copy; {new Date().getFullYear()} <bold>Mahima Living</bold>. All rights reserved</p>
    </div>
  )
}

export default Footer
