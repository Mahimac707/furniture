import React, { useState } from 'react'
import Style from '../styles/Contact.module.css'

const options = [
  'I know about it from promos and print ads',
  'My friends and family have recommended your company',
  'I came across it on social media',
  'I saw it among the search engine results',
]

function Contact() {
  const [selected, setSelected] = useState(null)
  const [comment, setComment] = useState('')

  return (
    <div className={Style.container}>
      <div className={Style.content}>

        <div className={Style.left}>
          <h2 className={Style.heading}>Thank you <br /> for visiting us.</h2>
          <p className={Style.sub}>Before you leave, we would love to know<br /> how you discovered us.</p>
        </div>

        <div className={Style.right}>
          {options.map((opt, i) => (
            <button
              key={i}
              className={`${Style.optBtn} ${selected === i ? Style.optActive : ''}`}
              onClick={() => {
                setSelected(i)
                setComment(prev => prev ? prev + '\n' + opt : opt)}
              }
            >
              {opt}
            </button>
          ))}
          <textarea className="border rounded-2xl h-20 text-indigo-500 bg-white/50"
           placeholder='comment....'
           value={comment}
           onChange={(e) => setComment(e.target.value)}/>
          <button className="border rounded-2xl w-50 py-2 bg-indigo-500 text-amber-50  ease-in-out cursor-grab active:scale-95 transition-transform">Send</button>
        </div>

      </div>
    </div>
  )
}

export default Contact