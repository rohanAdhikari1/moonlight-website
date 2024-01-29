import React, { useState } from 'react'
import Cafeteria from '../../assets/Cafeteria.svg'
import Transportation from '../../assets/Transportation.svg'
import Library from '../../assets/Library.svg'
import Computer_Lab from '../../assets/Computer_Lab.svg'
import { MdArrowRightAlt } from "react-icons/md";
import { motion } from "framer-motion"
import { SlideInRightAnimationVariants, SlideInLeftAnimationVariants } from "../../assets/Animation"

const FourthSection = () => {
    const [activetab, setactivetab] = useState(0)
    const tabs = [
        {
            name: "Cafeteria",
            icon: Cafeteria,
            bg: "bg-[#ffe9ec]"
        },
        {
            name: "Transportation",
            icon: Transportation,
            bg: "bg-[#fff0f5]"
        },
        {
            name: "Library",
            icon: Library,
            bg: "bg-[#f3f0fd]"
        },
        {
            name: "Computer Lab",
            icon: Computer_Lab,
            bg: "bg-[#fff0ec]"
        },
        {
            name: "Something",
            icon: Cafeteria,
            bg: "bg-[#eff9ec]"
        },
        {
            name: "Something",
            icon: Cafeteria,
            bg: "bg-[#f4f1ed]"
        }]
    return (
        <div className='min-h-screen dark:bg-black bg-gray-50 dark:border-b-2 dark:border-white pb-16'>
            <div className='pt-10 pb-6 flex flex-col items-center justify-center'>
                <span className='text-base text-red-500 dark:text-white font-medium'>Our Services</span>
                <h1 className='font-extrabold text-slate-700 text-[32px] dark:text-white leading-13 pb-4 font-quicksand'>
                    Services We Provide
                </h1>
            </div>

            {/* contaent Section */}

            <div className='md:px-16 px-4 py-3'>
                <div className='flex flex-wrap justify-around gap-5 lg:gap-0'>
                    {tabs.map((value, key) =>
                    (<div key={key} onClick={() => setactivetab(key)} className="lg:w-1/6 cursor-pointer md:w-1/3 w-full min-h-40 lg:gap-0 lg:px-3">
                        <div className="relative w-full h-full flex">
                            <div className={`${activetab == key ? 'bg-red-500 dark:bg-red-500' : value.bg || 'bg-pink-200'} dark:bg-zinc-800 h-full max-h-[160px] w-full rounded-xl`}>
                                <div className="flex items-center justify-center flex-col h-full">
                                    {value.icon && <img className={`object-cover h-1/3 ${activetab == key ? 'invert' : 'invert-0'} dark:invert`} src={value.icon} alt={value.name} />}
                                    <div className={`font-bold mt-1 font-quicksand ${activetab == key ? 'text-white' : 'text-[#100c16]'} dark:text-white text-base text:black`}>
                                        {value.name}
                                    </div>
                                </div>

                            </div>
                            <div className={`${activetab == key ? 'bg-red-500' : 'hidden'} w-4 h-4 bottom-[-7px] left-0 right-0 mx-auto absolute rotate-45`}></div>
                        </div>
                    </div>))}
                </div>

                <div className='rounded-xl mt-10 md:px-12 md:py-12 bg-white dark:bg-zinc-800 w-full'>

                    {tabs.map((val, key) => activetab == key && (
                        <div key={key} className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                            <motion.div variants={SlideInRightAnimationVariants}
                                initial="initial"
                                whileInView="animate"
                                viewport={{
                                    once: true
                                }} className="flex items-center justify-center">
                                <img src="schoolbuilding.jpg" alt="Image" className="max-w-full rounded-2xl h-auto" />
                            </motion.div>

                            <motion.div variants={SlideInLeftAnimationVariants}
                                initial="initial"
                                whileInView="animate"
                                viewport={{
                                    once: true,
                                }}>
                                <div className="p-4">
                                    <h1 className='font-extrabold text-[32px] dark:text-white leading-6 pb-4 font-quicksand'>
                                        {tabs[activetab].name}
                                    </h1>
                                    <p className='font-quicksand text-lg leading-10 dark:text-white'>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque officia amet debitis perferendis voluptates rem fugiat iusto magnam suscipit sequi.
                                    </p>
                                    <div>
                                        <button
                                            className='flex font-quicksand bg-primary dark:bg-black dark:shadow-none dark:hover:border-slate-600 dark:hover:bg-slate-600 
                                        rounded-xl my-8 py-3 px-4 dark:text-white dark:border-white dark:border-2 shadow-2xl hover:bg-red-500 text-white transition duration-500 transform translate-x-1 translate-y-1 hover:border-red-500 ease-out shadow-primary hover:shadow-red-500'>
                                            Read More <MdArrowRightAlt className='text-2xl mt-[1px] ms-[1px]' /></button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}

                </div>

            </div>

        </div >
    )
}

export default FourthSection
