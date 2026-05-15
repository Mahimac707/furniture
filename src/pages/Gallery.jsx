import React, { useState } from 'react'
import Styles from '../styles/Gallery.module.css'  

const suggestion = [
  'Bed', 'sofa', 'Table', 'Chair', 'Dinning table',
  'Coffee Table', 'Showcase', 'Kitchen', 'Closet',
]

const chips = [
  'Bed', 'sofa', 'Table', 'Chair', 'Dinning table',
  'Coffee Table', 'Showcase', 'Kitchen', 'Closet',
]

function Gallery() {
  const [query, setQuery] = useState('')
  const [showSugg, setShowSugg] = useState(false)

  const filtered = suggestion.filter(s =>
    s.toLowerCase().includes(query.toLowerCase())
  )

  const pickSugg = (val) => {
    setQuery(val)
    setShowSugg(false)  
  }

  return (
    <>
      <div className={Styles.Search}>
        <div className="relative py-25">
          <h1>Choose & search your dream Item</h1>
          <div  className="flex gap-2 w-full relative">
          <input
            type='search'
            className="w-full"
            placeholder='name the item you want'
            value={query}
            onChange={e => { setQuery(e.target.value); setShowSugg(true) }}
            onFocus={() => setShowSugg(true)}
            onBlur={() => setTimeout(() => setShowSugg(false), 150)}
            autoComplete="off"
          />
          <button>Search</button>
          </div>
          {showSugg && query && filtered.length > 0 && (
          <div className={Styles.suggestions}>
            {filtered.map((s, i) => (
              <div key={i} className={Styles.suggItem} onClick={() => pickSugg(s)}>
                <span className={Styles.dot}></span> {s}
              </div>
            ))}
          </div>  
        )}

        <div className={Styles.chips}>
          {chips.map((chip, i) => (
            <button key={i} onClick={() => setQuery(chip)}>{chip}</button>
          ))}
        </div>
        </div>

      </div>  
    </>
  )
}

export default Gallery