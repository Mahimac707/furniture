const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY

const FURNITURE_KEYWORDS = [
    'furniture', 'sofa', 'chair', 'table', 'bed', 'desk',
    'cabinet', 'shelf', 'couch', 'wardrobe', 'closet',
    'interior', 'room', 'living', 'bedroom', 'wooden', 'decor'
  ]
export async function searchPhotos(query, page = 1) {
  const furnitureQuery = `${query} wooden furniture interior design`

  const [unsplashRes] = await Promise.allSettled([
    fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(furnitureQuery)}&per_page=15&page=${page}`,
      { headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` } }
    ),
  ])

  let photos = []

  if (unsplashRes.status === 'fulfilled' && unsplashRes.value.ok) {
    const data = await unsplashRes.value.json()
    const mapped = data.results
    .filter((p) => {
        const text = `${p.alt_description || ''} ${p.description || ''}`.toLowerCase()
        return FURNITURE_KEYWORDS.some((kw) => text.includes(kw))
      })
    .map((p) => ({
      id: 'u_' + p.id,
      url: p.urls.regular,
      thumb: p.urls.small,
      alt: p.alt_description || query,
      photographer: p.user.name,
      link: p.links.html,
    }))
    photos = [...photos, ...mapped]
  }

  return photos.slice(0, 15)
}