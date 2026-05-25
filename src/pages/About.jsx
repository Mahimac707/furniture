import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PhotoGrid from '../components/PhotoGrid'
import { fetchPhotosByCategory } from '../redux/features/photoSlice'
import Style from '../styles/About.module.css'

const categories = [
    { key: 'sofa', label: 'Sofa' },
    { key: 'kitchen', label: 'Kitchen' },
    { key: 'bed', label: 'Bed' },
    { key: 'diningTable', label: 'Dining Table' },
    { key: 'closet', label: 'Closet' },
]

function About() {
    const dispatch = useDispatch()
    const { categories: photos, loading, error } = useSelector((state) => state.photo)

    useEffect(() => {
        categories.forEach(({ key }) => {
            dispatch(fetchPhotosByCategory(key))
        })
    }, [dispatch])

    return (
        <>
            <div className={Style.container}>
                <h1 className={Style.title}>Services</h1>
                <p className={Style.subtitle}>Handmade for Your Home</p>

                <div className={Style.cardGrid}>
                    <div className={Style.card}>
                        <h2>Consciously Crafted</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className={Style.card}>
                        <h2>Thoughtful & Functional</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className={Style.card}>
                        <h2>Loved By Homeowners</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>

            <div className={Style.categorySection}>
                {categories.map(({ key, label }) => (
                    <div key={key} className={Style.categoryItem}>
                        <h2 className={Style.categoryTitle}>{label}</h2>
                        
                        <PhotoGrid 
                            photos={photos[key]}
                            loading={loading}
                            error={error}
                        />
                        
                    </div>
                ))}
            </div>
        </>
    )
}

export default About