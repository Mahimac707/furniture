import React from 'react'
import Styles from '../styles/Home.module.css'

function Home() {
  return (
    <div className={`${Styles.heroContent} relative`}>
      <div className={Styles.Content}>
      <h1 className={Styles.fadeItem} style={{ animationDelay: '0.2s' }}>
        Furniture, decor, and beyond
      </h1>
      <h2 className={Styles.fadeItem} style={{ animationDelay: '0.6s' }}>
        Welcome to Mahima Living
      </h2>
      <button className={`${Styles.fadeItem} bg-black/40 text-sm  border-2 rounded-2xl px-3 py-2 cursor-pointer tracking-widest transition-all duration-300 ease-in-out hover:bg-white hover:text-black`}>
        SHOP NOW
      </button>
      </div>
    </div>
  )
}

export default Home
