import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { tabs } from '../assets/TempTabs'
import Header from '../Components/Header'
import MiniFooter from '../Components/MiniFooter'

const TempServices = () => {
    const { id } = useParams();

    if (id > 4) {
        return <Navigate to="/404" />;
    }
    return (
        <div>
            <Header title={tabs && tabs[id].name} minititle={"Services"} backgroundImage={tabs ? tabs[id].image : ''} />
            <div className='flex flex-col w-[90%] mx-auto py-2 mb-9'>
                <div className='border-b-2 dark:boder-white'>
                    <p className='dark:text-white font-body text-[#323239] text-lg py-12'>
                        {tabs && tabs[id].description}</p>
                </div>
                <MiniFooter views='1k' />
            </div>
        </div>
    )
}

export default TempServices
