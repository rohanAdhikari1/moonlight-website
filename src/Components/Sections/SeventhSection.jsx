import React from 'react'
import { MdArrowRightAlt } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import { SlideInRightAnimationVariants, SlideUpAnimationVariants } from "../../assets/Animation"

const SeventhSection = () => {
    return (
        <div className='min-h-[200px] dark:bg-black bg-slate-100 dark:border-b-2 dark:border-white'>
            <div className='md:px-16 px-4 py-24'>
                <motion.div variants={SlideInRightAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: true
                    }}><span className='text-sm font-mono text-primary dark:text-white'>Key Notes</span>
                    <h1 className='font-extrabold text-[32px] dark:text-white text-gray-700 leading-6 font-quicksand'>
                        Our Course Category
                    </h1></motion.div>
                <div className='flex flex-wrap gap-5 lg:gap-0 justify-around py-12 pt-24 md:px-5 px-3'>
                    <motion.div variants={SlideUpAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true
                        }} className='w-full lg:w-1/3 lg:px-5'>
                        <div className="rounded-xl dark:border-2 dark:border-white drop-shadow-2xl px-8 dark:bg-black bg-white pb-10 group">
                            <div className='absolute top-0 right-6 flex  gap-4 flex-row'>
                                <div className='bg-red-500 duration-1000 transition-all w-[3px] h-10 group-hover:h-20'></div>
                                <div className='bg-primary w-[5px] duration-1000 transition-all h-20 group-hover:h-10'></div>
                            </div>
                            <div className='border-b'>
                                <div className='flex flex-col items-center justify-center pb-4 pt-8'>
                                    <div className='rounded-full bg-cover bg-center h-28 w-28 drop-shadow-sm' style={{ backgroundImage: `url(${'/school.jpg'})` }}></div>
                                    <Link><h1 className='mt-6 font-semibold hover:text-primary cursor-pointer dark:text-white text-gray-700 text-lg uppercase font-quicksand'>Early Childhood Education</h1></Link>
                                </div>
                            </div>
                            <div className='flex items-center flex-col'>
                                <p className='mt-6 px-1 dark:text-white text-center font-quicksand'>
                                    Activity Based Learning Thematic Curriculum Pastoral Caring Homeroom Tutoring .....
                                </p>
                                <span
                                    className='flex font-quicksand text-current font-semibold hover:text-primary cursor-pointer pt-2 dark:text-white dark:hover:text-slate-400'>
                                    Read More <MdArrowRightAlt className='text-2xl mt-[1px] ms-[1px]' /></span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={SlideUpAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true
                        }} className='w-full lg:w-1/3 lg:px-5'>
                        <div className="rounded-xl dark:border-2 dark:border-white drop-shadow-2xl px-8 dark:bg-black bg-white pb-10 group">
                            <div className='absolute top-0 right-6 flex  gap-4 flex-row'>
                                <div className='bg-red-500 duration-1000 transition-all w-[3px] h-10 group-hover:h-20'></div>
                                <div className='bg-primary w-[5px] duration-1000 transition-all h-20 group-hover:h-10'></div>
                            </div>
                            <div className='border-b'>
                                <div className='flex flex-col items-center justify-center pb-4 pt-8'>
                                    <div className='rounded-full bg-cover bg-center h-28 w-28 drop-shadow-sm' style={{ backgroundImage: `url(${'/school.jpg'})` }}></div>
                                    <Link><h1 className='mt-6 font-semibold hover:text-primary cursor-pointer dark:text-white text-gray-700 text-lg uppercase font-quicksand'>Basic Level Education</h1></Link>
                                </div>
                            </div>
                            <div className='flex items-center flex-col'>
                                <p className='mt-6 px-1 dark:text-white text-center font-quicksand'>
                                    Playway Method Learning by Doing International Curriculum Progressive Pedagogies STEAM Based Approach Wellness Curriculum Hightech Classrooms .....
                                </p>
                                <span
                                    className='flex font-quicksand text-current font-semibold hover:text-primary cursor-pointer pt-2 dark:text-white dark:hover:text-slate-400'>
                                    Read More <MdArrowRightAlt className='text-2xl mt-[1px] ms-[1px]' /></span>
                            </div>
                        </div>
                    </motion.div>


                    <motion.div
                        variants={SlideUpAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true
                        }} className='w-full lg:w-1/3 lg:px-5'>
                        <div className="rounded-3xl duration-1000 transition dark:border-2 dark:border-white drop-shadow-2xl px-8 dark:bg-black bg-white pb-10 group">
                            <div className='absolute top-0 right-6 flex  gap-4 flex-row'>
                                <div className='bg-red-500 duration-1000 transition-all w-[3px] h-10 group-hover:h-20'></div>
                                <div className='bg-primary w-[5px] duration-1000 transition-all h-20 group-hover:h-10'></div>
                            </div>
                            <div className='border-b'>
                                <div className='flex flex-col items-center justify-center pb-6 pt-8'>
                                    <div className='rounded-full bg-cover bg-center h-28 w-28 drop-shadow-sm' style={{ backgroundImage: `url(${'/school.jpg'})` }}></div>
                                    <Link><h1 className='mt-6 font-semibold hover:text-primary cursor-pointer dark:text-white text-gray-700 text-lg uppercase font-quicksand'>Secondary Level Education</h1></Link>
                                </div>
                            </div>
                            <div className='flex items-center flex-col'>
                                <p className='mt-6 px-1 dark:text-white text-center font-quicksand'>
                                    Progressive Pedagogies  STEAM Based Approach Curriculum as Reconstruction  Wellness Curriculum  Hightech Classrooms  Holistic Growth ..
                                </p>
                                <span
                                    className='flex font-quicksand text-current font-semibold hover:text-primary cursor-pointer pt-2 dark:text-white dark:hover:text-slate-400'>
                                    Read More <MdArrowRightAlt className='text-2xl mt-[1px] ms-[1px]' /></span>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    )
}

export default SeventhSection
