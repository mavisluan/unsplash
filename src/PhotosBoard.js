import React from 'react'
import Photo from './Photo'

const PhotosBoard = ({ photos }) => (
    <div className='board'>
        {photos.map(photo => (
            <div key={photo.id} className='board-item'>
                <Photo photo={photo} />
            </div>
        ))}
    </div>
)

export default PhotosBoard