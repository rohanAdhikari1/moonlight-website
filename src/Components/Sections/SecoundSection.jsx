import React from 'react'
import schoolbuilding from '../../assets/schoolbuilding.jpg'
import { motion } from "framer-motion"
import { SlideInRightAnimationVariants, SlideInLeftAnimationVariants } from "../../assets/Animation"

const SecoundSection = () => {
    return (
        <div className='min-h-screen flex py-10 md:flex-row flex-col items-center'>
            <motion.div
                variants={SlideInRightAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                    once: true
                }}
                className='md:ps-[90px] px-2 flex-1 flex items-center justify-center rounded-lg drop-shadow-lg'>
                <img src={schoolbuilding} className='md:w-11/12 object-cover drop-shadow-lg rounded-lg' alt='School' />
            </motion.div>
            <motion.div variants={SlideInLeftAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                    once: true
                }} className='flex-1 text-gray-700 flex align-top h-full'>
                <div className='py-5 px-4 md:pe-[80px]'>
                    <span className='text-base text-primary dark:text-white'>Welcome To</span>
                    <h1 className='font-extrabold text-[32px] dark:text-white leading-6 pb-4 font-quicksand'>
                        Introduction
                    </h1>
                    <p className='font-quicksand text-lg leading-10 dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, praesentium. Ut enim quae porro cupiditate. Delectus porro aliquid sunt at, qui, unde hic perferendis maiores labore laboriosam optio! Similique in culpa magni excepturi, amet porro veniam quae eaque mollitia sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fuga in qui accusamus eaque alias hic saepe, nemo nihil nesciunt ratione, minima molestias sed voluptate aut commodi modi delectus voluptas assumenda est, harum possimus neque? Nostrum non quia quas iusto unde voluptatum tempora, vero alias nihil aliquid officia provident eius!
                    </p>
                    <div>
                        <button className='font-quicksand dark:shadow-none dark:hover:border-slate-600 dark:hover:bg-slate-600 rounded-full my-8 py-3 px-4 text-primary dark:text-white dark:border-white border-2 shadow-2xl hover:bg-red-500 hover:text-white transition duration-500 transform translate-x-1 translate-y-1 hover:border-red-500 ease-out shadow-primary hover:shadow-red-500 border-primary'>Read More</button>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default SecoundSection
