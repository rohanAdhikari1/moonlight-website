import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import { SlideInRightTextAnimationVariants } from "../assets/Animation"

const Header = ({ title, backgroundImage }) => {
    return (
        <div className='w-full h-auto dark:border-b-2 dark:border-white'>
            <div className='min-h-[30vh] md:min-h-[60vh] relative shadow-inner bg-cover bg-no-repeat bg-center w-full rounded dark:bg-black' style={{ backgroundImage: "url('/school.jpg')" }}>
                <div className='absolute h-full w-full bg-gradient-to-t from-[#0c0d0e] to-transparent from-0% to-100%'>
                    <div className='bottom-[15%] absolute flex flex-col ms-[6%]'>
                        <motion.div
                            variants={SlideInRightTextAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true
                            }} className='text-white text-xl md:text-2xl leading-6 font-bold font-quicksand'>Mission & Vission</motion.div>
                        <motion.div
                            variants={SlideInRightTextAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true
                            }} className='flex flex-row mt-4'>
                            <div className='text-white md:text-lg leading-3 font-quicksand'>
                                <Link to='/' className='hover:text-primary mt-1'>Home</Link> {'>'}
                            </div>
                            <div className='text-white md:text-lg ms-2 leading-3 font-quicksand'>
                                Mission & Vision
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
