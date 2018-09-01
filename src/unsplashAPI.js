const url = 'https://api.unsplash.com'
let token = 'Client-ID YOUR_ACCESS_KEY'

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

// GET all photos -- return an array of photo objects
export const getAll = () => 
    fetch(`${url}/photos`, { headers })
        .then(resp => resp.json())
        .then(data => data)

// GET curated photos-- return an array of photo objects
export const getCuratedPhotos = () => 
    fetch(`${url}/photos/curated`, { headers })
        .then(resp => resp.json())
        .then(data => data)

// GET a photo by Id -- return a photo object
export const getAPhotoById = (photoId) => 
    fetch(`${url}/photos/${photoId}`, { headers })
        .then(resp => resp.json())
        .then(obj => obj)


// GET a photo's statistics  (total downloads, likes, views)
export const getAPhotoStatistics = (photoId) => 
    fetch(`${url}/photos/${photoId}/statistics`, { headers })
        .then(resp => resp.json())
        .then(obj => obj)


// GET a photo by random -- return a photo object
export const getARandomPhoto = () =>
    fetch(`${url}/photos/random`, { headers })
        .then(resp => resp.json())
        .then(obj => obj)


// Track a photo download


// search photos by a query -- return an array of photo objects
export const searchPhotos = (query) =>
    fetch(`${url}/search/photos?query=${query}`, { headers })
        .then(resp => resp.json())
        .then(data => data.results)

// search collections -- Get a single page of collection results for a query.
// (title, cover_photo, curated, featured, description, tags, links, user)
export const searchCollectionsPhotos = (query) =>
    fetch(`${url}/search/collections?query=${query}`, { headers })
        .then(resp => resp.json())
        .then(data => data.results)

// Search users -- Get a single page of user results for a query.
export const searchUsers = (query) =>
    fetch(`${url}/search/users?query=${query}`, { headers })
        .then(resp => resp.json())
        .then(data => data.results)

// Get a single page from the list of all collections.
export const getCollections = () =>
    fetch(`${url}/collections`, {headers})
        .then(resp => resp.json())
        .then(data => data)

// Get a single page from the list of featured collections.
export const getFeaturedCollections = () =>
    fetch(`${url}/collections/featured`, {headers})
        .then(resp => resp.json())
        .then(data => data)
    
// Get a single page from the list of curated collections.
export const getCuratedCollections = () =>
    fetch(`${url}/collections/curated`, {headers})
        .then(resp => resp.json())
        .then(data => data)

// Get A collection
// Retrieve a single collection. To view a user’s private collections, the read_collections scope is required.
export const getACollection = (id) =>
    fetch(`${url}/collections/${id}`, {headers})
        .then(resp => resp.json())
        .then(obj => obj)


// Get a collection’s photos
export const getPhotosByCollectionId = (id) =>
    fetch(`${url}/collections/${id}/photos`, {headers})
        .then(resp => resp.json())
        .then(data => data)

// List a collection’s related collections
// Retrieve a list of collections related to this one.
export const getRelatedCollections = (id) =>
    fetch(`${url}/collections/${id}/related`, {headers})
        .then(resp => resp.json())
        .then(data => data)


// Totals
//Get a list of counts for all of Unsplash.
export const getTotalCounts = () =>
    fetch(`${url}/stats/total`, {headers})
        .then(resp => resp.json())
        .then(obj => obj)

// Get the overall Unsplash stats for the past 30 days.
export const getTotalCounts = () =>
    fetch(`${url}/stats/month`, {headers})
        .then(resp => resp.json())
        .then(obj => obj)
