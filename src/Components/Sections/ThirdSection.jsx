import React from 'react'
import { SlideUpAnimationVariants } from "../../assets/Animation"
import { motion } from "framer-motion"

const ThirdSection = ({ data }) => {
    return (
        <div className='min-h-screen dark:bg-black bg-slate-100 dark:border-b-2 dark:border-white pb-16'>
            <div className='pt-10 pb-6 flex flex-col items-center justify-center'>
                <h1 className='font-extrabold text-[32px] text-primary dark:text-white leading-6 pb-4 font-quicksand'>
                    Welcome Message
                </h1>
            </div>
            <div className="flex justify-around flex-wrap gap-6 lg:gap-0 p-8 lg:flex-row md:flex-row sm:flex-col">
                {data && data.map((item, key) =>
                    <motion.div key={key} variants={SlideUpAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true
                        }} className="md:w-1/3 sm:w-full px-0 lg:px-4">
                        <div className="rounded-xl dark:border-2 dark:border-white drop-shadow-2xl px-8 dark:bg-black bg-white pb-5">
                            <div className='border-b'>
                                <div className='flex flex-col items-center justify-center py-6'>
                                    <img src='/school.jpg' className='rounded-full object-cover h-28 w-28 drop-shadow-sm' alt='Head Photo' />
                                    <h1 className='mt-4 font-bold dark:text-white text-lg uppercase font-quicksand'>{item.name}</h1>
                                    <span className='capitalize mt-1 text-red-500 dark:text-white text-sm font-semibold font-quicksand'>{item.designation}</span>
                                </div>
                            </div>
                            <div>
                                <p className='mt-4 dark:text-white font-russonOne'>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" className="w-6 pr-2 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentcolor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path></svg>
                                    {item.message}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </div >
    )
}

export default ThirdSection
