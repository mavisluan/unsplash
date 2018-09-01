import React from 'react'
import './styles/Header.css'

const Header = ({children}) => (
    <div>
        <div className='header-container'>
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
            <span>Photo of the Day by Yeo Khee</span>
            <span>Read more about the Unsplash License</span>
            <span>Proud supporter of the Unsplash community</span>
        </div>
    </div>
)
   


export default Header