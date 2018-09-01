import React from 'react'
import TopBar from './TopBar'
import Search from './Search'
import PhotosBoard from './PhotosBoard'

const SearchPage = ({photos, onKeyPress, title}) => (
    <div className='page'>
        <TopBar>
            <Search onKeyPress={onKeyPress} searchStyle={'search-page'}/>
        </TopBar>
        <div className='search-title'>{title} pictures</div>
        <PhotosBoard photos={photos}/>
    </div>
)

export default SearchPage