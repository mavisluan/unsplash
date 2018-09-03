const url = 'https://api.unsplash.com'
let token = 'Client-ID YOUR_ACCESS_KEY'

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

// GET all photos -- return an array of photo objects
export const getAll = () => 
    fetch(`${url}/photos?per_page=30`, { headers })
        .then(resp => resp.json())
        .then(data => data)

// GET curated photos-- return an array of photo objects
export const getCuratedPhotos = () => 
    fetch(`${url}/photos/curated?per_page=30`, { headers })
        .then(resp => resp.json())
        .then(data => data)

// GET a photo by Id -- return a photo object
export const getAPhotoById = (photoId) => 
    fetch(`${url}/photos/${photoId}`, { headers })
        .then(resp => resp.json())
        .then(obj => obj)

// GET a photo by random -- return a photo object
export const getARandomPhoto = () =>
    fetch(`${url}/photos/random`, { headers })
        .then(resp => resp.json())
        .then(obj => obj)

// search photos by a query -- return an array of photo objects
export const searchPhotos = (query) =>
    fetch(`${url}/search/photos?per_page=30&&query=${query}`, { headers })
        .then(resp => resp.json())
        .then(data => data.results)
