import React from 'react'

const TabControl = ({onActiveTab}) => (
    <div className='tab-control'>
        <span onClick={()=> onActiveTab('edit')}>Editorial</span>
        <span onClick={()=> onActiveTab('trend')}>Trending</span>
    </div>
)

export default TabControl