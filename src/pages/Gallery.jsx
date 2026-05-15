import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setQuery, setResults, setLoading, setError } from '../redux/features/searchSlice'
import { searchPhotos } from '../services/contentapi'
import PhotoGrid from '../components/PhotoGrid'
import Styles from '../styles/Gallery.module.css'

const chips = [
  'Bed', 'Sofa', 'Table', 'Chair', 'Dining table',
  'Coffee Table', 'Kitchen', 'Closet',
]

const suggestions = chips

function Gallery() {
  const dispatch = useDispatch()
  const { query, results, loading, error } = useSelector((state) => state.search)

  const [showSugg, setShowSugg] = useState(false)

  const filtered = suggestions.filter((s) =>
    s.toLowerCase().includes(query.toLowerCase())
  )

  const handleSearch = async (e) => {
    e?.preventDefault()
    if (!query.trim()) return

    dispatch(setLoading())
    try {
      const photos = await searchPhotos(query)
      dispatch(setResults(photos))
    } catch (err) {
      dispatch(setError(err.message))
    }
    setShowSugg(false)
  }

  const pickQuery = async (val) => {
    dispatch(setQuery(val))
    setShowSugg(false)
    dispatch(setLoading())
    try {
      const photos = await searchPhotos(val)
      dispatch(setResults(photos))
    } catch (err) {
      dispatch(setError(err.message))
    }
  }

  return (
    <>
      <form onSubmit={handleSearch}>
        <div className={Styles.Search}>
          <div className="relative py-25">
            <h1>Choose & search your dream item</h1>

            <div className="flex gap-2 w-full relative">
              <input
                type="text"
                className="w-full"
                placeholder="Name the item you want"
                value={query}                          
                onChange={(e) => {
                  dispatch(setQuery(e.target.value))  
                  setShowSugg(true)
                }}
                onFocus={() => setShowSugg(true)}
                onBlur={() => setTimeout(() => setShowSugg(false), 150)}
                autoComplete="off"
              />
              <button type="submit">Search</button>
           

            {showSugg && query && filtered.length > 0 && (
              <div className={Styles.suggestions}>
                {filtered.map((s, i) => (
                  <div
                    key={i}
                    className={Styles.suggItem}
                    onMouseDown={() => pickQuery(s)}
                  >
                    <span className={Styles.dot}></span> {s}
                  </div>
                ))}
              </div>
            )}
             </div>

            <div className={Styles.chips}>
              {chips.map((chip, i) => (
                <button
                  key={i}
                  type="button"              
                  onClick={() => pickQuery(chip)}
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>
        </div>
      </form>

      <PhotoGrid photos={results} loading={loading} error={error} />
    </>
  )
}

export default Gallery