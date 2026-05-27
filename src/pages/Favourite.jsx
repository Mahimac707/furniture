import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Info from '../components/Info'
import Style from '../styles/Favourite.module.css'

function Favourite() {
    const navigate = useNavigate()
    const [favourites, setFavourites] = useState(() => {
        const saved = localStorage.getItem('favouritePhotos')  
        return saved ? JSON.parse(saved) : []
    })

    const remove = (id) => {
        const updated = favourites.filter(f => f.id !== id)
        setFavourites(updated)
        localStorage.setItem('favouritePhotos', JSON.stringify(updated))  
    }

    return (
        <>
        <div className={Style.container}>
            <button className={Style.backBtn} onClick={() => navigate(-1)}>← Back</button>
            <h1 className={Style.title}>❤️ My Favourites</h1>

            {favourites.length === 0 ? (
                <p className={Style.empty}>No favourites yet. Go add some!</p>
            ) : (
                <div className={Style.grid}>
                    {favourites.map(photo => (
                        <div key={photo.id} className={Style.card}>
                            <div className={Style.imgWrap}>
                                <img src={photo.thumb} alt={photo.alt} />
                            </div>
                            <div className={Style.cardBody}>
                                <p className={Style.photographer}>{photo.photographer}</p>
                            </div>
                            <button className={Style.removeBtn} onClick={() => remove(photo.id)}>
                                🗑️ Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
        <Info/>
        </>
    )
}

export default Favourite