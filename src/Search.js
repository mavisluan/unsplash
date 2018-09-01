import React from 'react'
import './styles/Search.css'

const Search = ({onKeyPress, searchStyle}) => (
    <div>
        <div className={searchStyle}>
            <div><i className="fas fa-search"></i></div>
            <div>
                <input 
                    type='text'  
                    placeholder='Search free high-resolution photos'
                    onKeyPress={onKeyPress} />
            </div>
            <div><i className="fas fa-times"></i></div>
        </div>
    </div>  
)

export default Search