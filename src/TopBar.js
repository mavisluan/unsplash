import React from 'react'
import { Link } from 'react-router-dom'
import './styles/TopBar.css'

const TopBar = ({children}) => (
    <div className='top-bar'>
        <div>
            <Link to='/' className='nav-home'>
                <i className="fas fa-camera"></i>
                <span>Unsplash</span>
            </Link>
            <div>{children}</div>
        </div>
        <div className='nav-categories'>
            <div>Collections</div>
            <div>Explore</div>
            <div><i className="fas fa-ellipsis-h"></i></div>
            <div className='submit-button'>Submit a photo</div>
            <div className='vertical-line'></div>   
            <div>Login</div>
            <div className='join-button' style={{color: 'white'}}>Join Free</div>
        </div>
    </div>
)

export default TopBar 