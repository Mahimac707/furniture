import React from 'react'
import { useNavigate } from 'react-router-dom'
import Styles from '../styles/Home.module.css'

function Home() {

  const navigate = useNavigate();
  return (
    <>
    <div className={`${Styles.heroContent} relative`}>
      <div className={Styles.Content}>
      <h1 className={Styles.fadeItem} style={{ animationDelay: '0.2s' }}>
        Furniture, decor, and beyond
      </h1>
      <h2 className={Styles.fadeItem} style={{ animationDelay: '0.6s' }}>
        Welcome to Mahima Living
      </h2>
      <button onClick={() => navigate('/gallery')} className={`${Styles.fadeItem} bg-black/40 text-sm  border-2 rounded-2xl px-3 py-2 cursor-grab 
      tracking-widest transition-all duration-300 ease-in-out hover:bg-white hover:text-black`}>
        SHOP NOW 
      </button>
      </div>
    </div>

  <div className={`${Styles.herofrist} py-8 z-10 bg-black/10`}>
  <div className={Styles.frist}>

    <div className={Styles.leftCol}>
      <img src="/images/sofa.jpg" alt="sofa" className={Styles.bigImg} />
    </div>

    <div className={Styles.rightCol}>
      <h1 className="text-5xl text-amber-800">About Modern Homes</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Minus commodi quibusdam blanditiis quia cupiditate laborum
        fugiat fuga dolore aut! Aperiam necessitatibus repellendus
        temporibus libero ducimus consequatur voluptatum expedita
        sunt obcaecati.
      </p>

     <button onClick={()=> navigate('/contact')}
     className="border-2 rounded-2xl bg-blue-600 text-amber-50 px-2 py-2 w-50 cursor-grab"
     >Get in Touch</button>
  </div>

  </div>
</div>

    </>
  )
}

export default Home
