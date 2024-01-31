import React from 'react'

const FisrtSection = ({ backgroundImage }) => {
    return (
        <div className='first Section dark:border-b-2 dark:border-white'>
            <div className='md:clip-irregular-shape h-0 pt-[66.64%] bg-cover bg-gradient-to-b w-full rounded dark:bg-black' style={{ backgroundImage: `url(${backgroundImage})` }}></div>
        </div>
    )
}

export default FisrtSection
