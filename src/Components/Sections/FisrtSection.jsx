import React from 'react'

const FisrtSection = ({ backgroundImage }) => {
    return (
        <div className='first Section dark:border-b-2 dark:border-white'>
            <img src={backgroundImage} className='md:clip-irregular-shape h-full object-cover w-full rounded dark:bg-black' alt='School' />
        </div>
    )
}

export default FisrtSection
