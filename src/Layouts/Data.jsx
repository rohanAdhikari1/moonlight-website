import React from 'react'
import Header from '../Components/Header'
import MiniFooter from '../Components/MiniFooter'
import CustomReactQuery from '../CustomReactQuery'
import { HashLoader } from 'react-spinners'
import { useParams } from 'react-router-dom'

const Data = () => {
    const { apiname, id } = useParams();

    const { loading, error, data } = CustomReactQuery('/dummyblogs.json')
    if (loading || error != '') {
        return (
            <div className='flex items-center min-h-screen justify-center'>
                <HashLoader color="#12a5bf" size={100} />
            </div>
        )
    }
    return (
        <div>
            <Header title={data && data[id].title} minititle={apiname} backgroundImage={data ? data[id].image : ''} />
            <div className='flex flex-col w-[90%] mx-auto py-2 mb-9'>
                <div className='border-b-2 dark:boder-white'>
                    <p className='dark:text-white font-body text-[#323239] text-lg py-12'>
                        {data && data[id].content}</p>
                </div>
                <MiniFooter views='1k' />
            </div>
        </div>
    )
}

export default Data
