import React from 'react'
import './styles/Header.css'

const Header = ({children, dailyPhoto }) => { 
    const src = (dailyPhoto.urls) ? dailyPhoto.urls.regular : ''
    const author = (dailyPhoto.user) ? dailyPhoto.user.name : 'author'

    return (
        <div>
            <div className='header-container' style={{
                backgroundImage: `url(${src})` }}>
                <div className='header'>
                    <span className='title'>Unsplash</span>
                    <div>
                        <p>Beautiful, free photos.</p>
                        <p>Gifted by the world's most generous community of photographers.</p>  
                    </div>
                    {children}
                </div>
            </div>
            <div className='header-photo-info'>
                <span>Photo of the Day by <a href='https://unsplash.com/@yokeboy'>{author}</a></span>
                <span>Read more about the Unsplash License</span>
                <span>Proud supporter of the Unsplash community</span>
            </div>
        </div>
    )
    
} 
    

   


export default Header