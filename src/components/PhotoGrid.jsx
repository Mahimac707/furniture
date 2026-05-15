import React from 'react'
import Styles from '../styles/Gallery.module.css'

function PhotoGrid({ photos, loading, error }) {
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

  if (photos.length === 0) {
    return null
  }

  return (
    <div className={Styles.grid}>
      {photos.map((photo) => (
        <a
        
          key={photo.id}
          href={photo.link}
          target="_blank"
          rel="noopener noreferrer"
          className={Styles.card}
        >
          <div className={Styles.imgWrap}>
            <img
              src={photo.thumb}
              alt={photo.alt}
              loading="lazy"
            />
          </div>
          <div className={Styles.cardBody}>
            <p className={Styles.photographer}>{photo.photographer}</p>
            <span className={Styles.sourceBadge}>{photo.source}</span>
          </div>
        </a>
      ))}
    </div>
  )
}

export default PhotoGrid