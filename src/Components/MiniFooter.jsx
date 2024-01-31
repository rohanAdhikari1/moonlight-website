import React from 'react'
import { MdOutlineRemoveRedEye } from "react-icons/md";

const MiniFooter = ({ views }) => {
    return (
        <div className='flex py-5 justify-between flex-wrap gap-3'>
            <div className='flex-start font-quicksand'>{/* share goes here*/}</div>
            <div className='flex-end font-quicksand flex items-center dark:text-white'><MdOutlineRemoveRedEye className='text-lg dark:text-white text-[#323239] me-2' /> {views} Views</div>
        </div>
    )
}

export default MiniFooter
