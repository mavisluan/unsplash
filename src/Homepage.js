import React from 'react'
import TopBar from './TopBar'
import Header from './Header'
import TabControl from './TabControl'
import PhotosBoard from './PhotosBoard'
import Search from './Search'

const Homepage = ({ photos, onKeyPress, onActiveTab }) =>  (
    <div className='page'>
        <TopBar />
        <Header >
            <Search 
                onKeyPress={onKeyPress} 
                searchStyle={'home-page'}/>
            <div 
                className='search-options' 
                style={{fontSize: '20px', marginTop: '20px' }}>
                Trending searches: business, computer, nature, love, house
            </div>
        </Header>
        <TabControl onActiveTab={onActiveTab}/>
        <PhotosBoard photos={photos}/>
    </div>
)


export default Homepage