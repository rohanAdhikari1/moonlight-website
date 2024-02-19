import React from 'react'
import { MdArrowRightAlt } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import CustomReactQuery from '../../CustomReactQuery'
import { SlideInRightAnimationVariants, SlideUpAnimationVariants } from "../../assets/Animation"
import { HashLoader } from 'react-spinners'

const EighthSection = () => {
    const { loading, error, data } = CustomReactQuery('dummyblogs.json')

    const loadingdiv = <div className='flex items-center min-h-screen justify-center'>
        <HashLoader color="#12a5bf" size={100} />
    </div>;


    const items = <div className='flex flex-wrap gap-5 lg:gap-0 justify-around py-12 pt-20'>
        {data && data.map((item, key) => (<motion.div key={key}
            variants={SlideUpAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
                once: true
            }} className='w-full lg:w-1/3 lg:px-5 lg:py-5'>
            <div className="rounded-xl dark:border-2 dark:border-white drop-shadow-2xl dark:bg-zinc-800 bg-white pb-6 group">
                <div className='flex flex-col'>
                    <div className='bg-cover rounded-t-xl rounded-b-[11rem] bg-center h-0 pt-[56.64%] w-full drop-shadow-sm' style={{ backgroundImage: `url(${item.image})` }}></div>
                    <div className='mt-8 px-10'><h2 className='text-lg dark:text-white text-gray-700 capitalize leading-7 font-semibold'>{item.date}</h2></div>
                </div>
                <div className='flex flex-col pt-9'>
                    <Link to={`data/blog/${key}`}><h1 className='px-6 truncate font-semibold hover:text-primary cursor-pointer dark:text-white text-gray-700 text-lg capitalize font-quicksand'>
                        {item.title}</h1></Link>
                    <div className='flex flex-row items-center pt-3'>
                        <div className="flex-start ps-6 pe-2 justify-between overflow-hidden">
                            <p className='truncate dark:text-white font-quicksand'>
                                {item.content}
                            </p>
                        </div>
                        <div className="flex-end pe-8  overflow-hidden">
                            <Link to={`data/blog/${key}`}><button className='rounded-full text-white px-1 py-1 hover:bg-red-500 bg-primary hover-bg-red dark:bg-black dark:hover:bg-primary'>
                                <MdArrowRightAlt className='text-2xl' />
                            </button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>))}
    </div>;

    return (
        <div className='min-h-screen dark:bg-black bg-slate-100 dark:border-b-2 dark:border-white pb-16'>
            <div className='md:px-16 px-4 py-24'>
                <motion.div variants={SlideInRightAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: true
                    }}><span className='text-sm font-mono text-primary dark:text-white'>Blogs</span>
                    <h1 className='font-extrabold text-[32px] dark:text-white text-gray-700 leading-6 font-quicksand'>
                        Latest Blogs
                    </h1></motion.div>
                {loading || error != '' ? loadingdiv : items}
            </div>
        </div>
    )
}

export default EighthSection
