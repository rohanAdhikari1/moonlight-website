import React from 'react'

const FifthSection = () => {
    return (
        <div className='min-h-screen dark:bg-black bg-gray-50 dark:border-b-2 dark:border-white pb-16'>
            <div className='pb-6 flex flex-col items-center justify-center'>
                <span className='text-base text-red-500 dark:text-white font-medium'>Our Students</span>
                <h1 className='font-extrabold text-slate-700 text-[32px] dark:text-white leading-13 pb-4 font-quicksand'>
                    PassOut Students
                </h1>
            </div>

            <div className="grid gap-6 lg:grid-cols-5 md:grid-cols-4 grid-cols-2 px-4">

                {Array.apply(0, Array(10)).map(function (x, i) {
                    return <div className="rounded-xl dark:border-2 dark:border-white drop-shadow-2xl px-2 dark:bg-black bg-white pb-3">
                        <div className='border-b'>
                            <div className='flex flex-col items-center justify-center pt-3 pb-1'>
                                <img src='/school.jpg' className='rounded-full object-cover h-32 w-32 drop-shadow-sm' alt='Head Photo' />
                                <h1 className='mt-1 font-bold dark:text-white text-base uppercase font-quicksand'>Student Name</h1>
                                <span className='capitalize text-red-500 dark:text-white text-sm font-semibold font-quicksand'>User Current Position</span>
                            </div>
                        </div>
                        <div>
                            <p className='dark:text-white font-russonOne text-center mt-1'>
                                YEAR: 2061
                            </p>
                        </div>
                    </div>;
                })}


            </div>
        </div>
    )
}

export default FifthSection
