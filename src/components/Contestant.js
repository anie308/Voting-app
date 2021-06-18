import React from 'react'
import Card from './Card'

function Contestant() {
    return (
        <div className='mx-2 mt-6 grid grid-col-1  sm:gap-3 md:grid-cols-2 lg:grid-cols-3'>
            <Card/>
            <Card/>
            <Card/>
           
        </div>
    )
}

export default Contestant

