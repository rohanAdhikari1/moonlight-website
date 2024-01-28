import React from 'react'
import school from "../../assets/school.jpg"

const FisrtSection = () => {
    return (
        <div className='first Section'>
            <img src={school} className='md:clip-irregular-shape h-full object-cover w-full rounded dark:bg-black' alt='School' />
        </div>
    )
}

export default FisrtSection
