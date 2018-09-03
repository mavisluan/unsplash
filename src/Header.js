import React from 'react'
import './styles/Header.css'

const Header = ({children, dailyPhoto }) => { 
    if (dailyPhoto) {
        const src = (dailyPhoto.urls) ? dailyPhoto.urls.regular : "https://images.unsplash.com/photo-1535270541768-3cf9fa45641c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjIxNjI0fQ&s=95912db82bcf288412a88cbbe64c3a76"

        const author = (dailyPhoto.user) ? dailyPhoto.user.name : 'Yeo Khee'

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
    
} 
    

   


export default Header