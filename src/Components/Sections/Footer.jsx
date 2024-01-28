import React from 'react'
import logo from '../../assets/darklogo.png'
import { Link } from 'react-router-dom'
import { links } from "../Navbar/Links";
import { FiMail } from "react-icons/fi";
import { MdPermPhoneMsg } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = ({ slogan }) => {
    return (
        <div className='min-h-screen flex flex-col bg-[#524466] dark:bg-black'>
            <footer className='relative min-h-screen'>
                <div className='absolute w-{calc(100% + 1.3px)} overflow-hidden leading-[0]'>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" className='relative block h-[190px] w-full' viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
                    </svg>
                </div>
                <div className="container mx-auto flex md:my-60 my-52 flex-wrap items-center justify-between py-3 px-3 mt-[160px] md:mt-[145px] relative">
                    <div className="md:w-1/2 w-full">
                        <div className="flex flex-wrap justify-between py-3 px-3 relative">
                            <div className="w-full">
                                <div className="md:ps-1">
                                    <img src={logo} className='max-h-[90px] w-full object-contain' alt='Logo' />
                                </div>
                            </div>
                            <div className="w-full md:ps-5 py-5">
                                <p className='text-white leading-8 px-4 text-lg font-quicksand'>{slogan}</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 w-full px-3 md:pt-8 pt-4">
                        <div className="flex-col md:flex-row flex flex-wrap gap-5 font-quicksand justify-around">
                            <div className="flex-1">
                                <h2 className='text-white font-bold text-xl'>Navigation</h2>
                                <ul className='leading-10 py-3 text-lg text-white'>
                                    {links.map((navtext, key) => (
                                        <li key={key} className='hover:text-primary hover:underline'><Link>{navtext.name}</Link></li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex-1">
                                <h2 className='text-white font-bold text-xl'>Contact Info</h2>
                                <ul className='py-3 text-lg text-white'>
                                    <li className="flex hover:text-primary hover:underline justify-items-center py-2">
                                        <FiMail className='my-1 mx-2' />
                                        <Link to="mailto:school@moonligtmodel.com.np" className='text-lg '>
                                            school@moonligtmodel.com.np
                                        </Link>
                                    </li>
                                    <li className="flex hover:text-primary hover:underline py-1">
                                        <MdPermPhoneMsg className='my-1 mx-2' />
                                        <Link to="tel:+9779814325847" className='text-lg'>
                                            9814325847
                                        </Link>
                                    </li>
                                    <li className="flex hover:text-primary hover:underline py-2">
                                        <FaLocationDot className='my-1 mx-2' />
                                        <Link to="https://maps.app.goo.gl/3UvqBwavuEvsaTvp8" className='text-lg'>
                                            Ratuwamai-4, Morang
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-10 left-0 right-0 p-4 text-white">
                    <div className='flex justify-between flex-wrap md:px-24 gap-4'>
                        <div className='flex-start font-quicksand'>© Copyright 2024 Moonlight Model English Academy All Rights Reserved</div>
                        <div className='flex-end font-quicksand'>Developed by: <Link to='' className='underline underline-offset-4 hover:text-primary'>Rohan Adhikari</Link></div>
                    </div>
                </div>
            </footer >
        </div >
    )
}

export default Footer
