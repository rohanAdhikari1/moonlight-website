import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GoChevronUp } from "react-icons/go";
import { GoChevronDown } from "react-icons/go";
import { links } from "./Links";
const NavLinks = () => {
    const [heading, setheading] = useState("");
    return (
        <>
            {links.map((link, key) => (
                <div key={key} className='z-20 px-3 font-normal md:cursor-pointer'>
                    <div className='group hidden md:block'>
                        {
                            link.submenu ? (
                                <>
                                    <span className='flex justify-between items-center font-[inter] text-gray-800 dark:text-white'>{link.name}
                                        <span className='text-xl inline'>
                                            <GoChevronUp className='group-hover:rotate-180' />
                                        </span>
                                    </span>
                                    <div className='absolute top-31 w-[250px] items-center hidden group-hover:block hover:block'>
                                        <div className='py-3'>
                                            <div className='w-4 h-4 left-3 absolute mt-1 drop-shadow-lg bg-white dark:bg-black rotate-45'></div>
                                        </div>
                                        <div className='bg-white dark:bg-black rounded drop-shadow-lg border-b-2 border-cyan-600'>
                                            {
                                                link.sublinks.map((sublink, key) => (
                                                    <div key={key} className='border-b-[1px] px-5 py-1 border-cyan-600 w-full'>
                                                        <li className='text-sm my-2.5 '>
                                                            <Link to={sublink.link} className='font-[inter] font-normal text-[17px] dark:text-white text-gray-800 hover:text-primary'>{sublink.name}</Link></li>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div></>
                            ) : (<Link to={link.link}> <span className='font-[inter] text-gray-800 dark:text-white'>{link.name}</span></Link>)
                        }
                    </div>
                    {/* mobile menus */}
                    <div className='md:hidden py-3'>
                        {
                            link.submenu ? (
                                <>
                                    <span className='font-[inter] text-white flex justify-between items-center ' onClick={() => heading !== link.name ? setheading(link.name) : setheading("")}>{link.name}
                                        <span className='text-xl pr-5'>
                                            {
                                                heading == link.name ? <GoChevronUp /> : <GoChevronDown />
                                            }
                                        </span></span>
                                    <div className={`${heading == link.name ? "md:hidden" : "hidden"}`}>
                                        <div className='pt-2'>
                                            {
                                                link.sublinks.map((sublink, key) => (
                                                    <div key={key} className='px-3 py-2 my-1 w-full rounded bg-white dark:bg-black'>
                                                        <li className='text-sm'>
                                                            <Link to={sublink.link} className='font-[inter] text-sm dark:text-white text-gray-800 hover:text-primary'>{sublink.name}</Link></li>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div></>
                            ) : (<Link to={link.link}> <span className='text-white  font-[inter] '>{link.name}</span></Link>)
                        }
                    </div>
                </div >
            ))}
        </>
    )
}

export default NavLinks
