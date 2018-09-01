import React from 'react'
import PhotoButtons from './PhotoButtons'

const Photo = ({ photo }) => (
    <div>
        <a href={photo.links.html}>
            <img 
                src={photo.urls.regular} 
                alt={photo.description} 
                style={{objectFit:'cover'}}/>
        </a>
       <PhotoButtons photo={photo} />
    </div>

  )

export default Photo