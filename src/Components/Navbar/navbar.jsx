import React, { useEffect, useState } from 'react'
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
import { FiMail } from "react-icons/fi";
import { MdModeNight, MdPermPhoneMsg } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { HiMiniAcademicCap } from "react-icons/hi2";
import { MdLightMode } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import NavLinks from './NavLinks';
import { IoClose } from "react-icons/io5";
import GoToTopButton from '../GoToTopButton';

const Navbar = ({ contacts }) => {
    const [mbmenu, setmbmenu] = useState(false);
    const [theme, settheme] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsVisible(scrollTop > 110);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    useEffect(() =>
        theme ? document.querySelector("body").classList.remove("dark") : document.querySelector("body").classList.add("dark")
        , [theme])
    return (
        <div>
            <div>
                <div className="dark:bg-black px-12 hidden md:flex text-white bg-cyan-600 h-[50px] justify-items-center items-center content-center w-full">
                    <ul className="flex">
                        <li className="flex border-r pr-4 pl-4 justify-items-center">
                            <FiMail className='my-2 mx-1' />
                            <Link to={`mailto:${contacts ? contacts.mail : "school@moonlightmodel.com.np"}`} className='text-lg'>
                                {contacts ? contacts.mail : "school@moonlightmodel.com.np"}
                            </Link>
                        </li>
                        <li className="flex border-r pr-4 pl-4">
                            <MdPermPhoneMsg className='my-2 mx-1' />
                            <Link to={`tel:${contacts ? contacts.number : "9814325847"}`} className='text-lg'>
                                {contacts ? contacts.number : "9814325847"}
                            </Link>
                        </li>
                        <li className="flex pl-4">
                            <FaLocationDot className='my-2 mx-1' />
                            <Link to={`${contacts ? contacts.map : "https://maps.app.goo.gl/3UvqBwavuEvsaTvp8"}`} className='text-lg'>
                                {contacts ? contacts.address : "Ratuwamai-4, Morang"}
                            </Link>
                        </li>
                    </ul>
                    <div className='absolute right-[150px] hidden lg:block'>
                        <button className='rounded flex border-2 border-amber-500 hover:bg-amber-500 py-1 px-3 text-lg'><HiMiniAcademicCap className='mt-[6px] mr-1' /> E-Portal</button>
                    </div>
                </div>
            </div>
            <nav className={`w-full`}>
                <div className={`z-40 dark:bg-black bg-white w-full gap-6 sm:gap-0 flex md:h-[75px] h-[55px] items-center font-medium lg:gap-9 justify-around md:duration-1000 md:ease-in-out fixed md:transition-all ${isVisible ? 'top-0 shadow-lg navbar-fixed' : 'md:static'}`}>
                    <div className='z-50'>
                        <img className='dark:invert min-w-5 h-7 md:cursor-pointer md:h-12 bg-white' src={logo} alt='logo' />
                    </div>
                    <ul className="items-center lg:gap-5 gap-3 text-base font-[inter] hidden md:flex">
                        <NavLinks />
                    </ul>
                    <div className='md:hidden'>
                        <Link to="/"><button className='rounded flex border-2 dark:text-white border-amber-500 hover:bg-amber-500 py-2 px-2 text-[11px] text-wrap'><HiMiniAcademicCap className='mt-[1px] mr-1 text-[14px]' /> E-Portal</button></Link>
                    </div>
                    <div>
                        <button className='rounded-full duration-300 dark:bg-slate-500 bg-gray-100 p-1' onClick={() => settheme(!theme)}>{theme ? <MdModeNight className='text-xl' /> : <MdLightMode className='text-xl dark:text-white' />}</button>
                    </div>
                    <div className='md:hidden z-50'>
                        <button className='rounded-full pr-4 dark:text-white' onClick={() => setmbmenu(!mbmenu)}>{mbmenu ? <IoClose className='hover:drop-shadow-2xl text-xl' /> : <FaBars className='hover:drop-shadow-2xl text-xl' />}</button>
                    </div>
                </div>
                {/* Mobile Nav */}
                <ul className={`bg-primary z-30  dark:bg-black  fixed w-full h-full top-6 bottom-0 py-10 pl-4 text-base font-quicksand md:hidden duration-500 ${mbmenu ? "left-0" : "left-[-100%]"}`}>
                    <NavLinks />
                </ul>
            </nav>
            <GoToTopButton isVisible={isVisible} />
        </div>
    )
}

export default Navbar
