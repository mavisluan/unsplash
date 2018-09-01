import React from 'react'
import './styles/PhotoButtons.css'

const PhotoButtons = ({ photo: {links, likes, user }}) => (
    <div>
        <div className='top-buttons'>
            <div className='like'>
                <i className="fas fa-heart"></i> {likes}
            </div>
            <div className='collection'>
                <i className="fas fa-plus"></i> collect
            </div>
        </div>
        <div className='bottom-buttons'>
            <div className='user' >
                <a  href={user.links.html}>
                    <div 
                        className='image' 
                        style={{ backgroundImage: `url(${user.profile_image.small})`}}>
                    </div>
                </a>  
                <a  href={user.links.html}>{user.name}</a>
            </div>
            <div className='download'>
                <a href={links.download} >
                    <i className="fas fa-arrow-down"></i>
                </a>            
            </div>
        </div> 
    </div>
)

export default PhotoButtons