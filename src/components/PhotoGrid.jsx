import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Styles from '../styles/Gallery.module.css'

function PhotoGrid({ photos, loading, error }) {
  const navigate = useNavigate()
  const [favourites, setFavourites] = useState(() => {
    const saved = localStorage.getItem('favouritePhotos')
    return saved ? JSON.parse(saved) : []
  })

  const toggleFavourite = (e, photo) => {
    e.preventDefault()      
    e.stopPropagation()

    setFavourites(prev => {
      const exists = prev.find(f => f.id === photo.id)
      const updated = exists ? prev.filter(f => f.id !== photo.id) : [...prev, photo]
      localStorage.setItem('favouritePhotos', JSON.stringify(updated))
      return updated
    })
    navigate('/favourite')
  }

  if (loading) {
    return (
      <div className={Styles.stateBox}>
        <div className={Styles.spinner} />
        <p>Finding photos...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className={Styles.stateBox}>
        <p className={Styles.errorText}>Something went wrong: {error}</p>
      </div>
    )
  }

  if (!photos || photos.length === 0) return null

  return (
    <div className={Styles.grid}>
      {photos.map((photo) => {
        const isFav = favourites.some(f => f.id === photo.id)
        return (
          <a
            key={photo.id}
            href={photo.link}
            target="_blank"
            rel="noopener noreferrer"
            className={Styles.card}
          >
            <div className={Styles.imgWrap}>
              <img src={photo.thumb} alt={photo.alt} loading="lazy" />

              <button
                className={`${Styles.heartBtn} ${isFav ? Styles.heartActive : ''}`}
                onClick={(e) => toggleFavourite(e, photo)}
                title={isFav ? 'Remove from favourite' : 'Add to favourite'}
              >
                ❤️
              </button>
            </div>

            <div className={Styles.cardBody}>
              <p className={Styles.photographer}>{photo.photographer}</p>
            </div>
          </a>
        )
      })}
    </div>
  )
}

export default PhotoGrid