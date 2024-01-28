import React, { useState, useEffect } from 'react';
import { IoMdArrowUp } from "react-icons/io";

const GoToTopButton = ({ isVisible }) => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            className={`fixed z-20 bottom-5 right-10 dark:bg-black bg-amber-500 text-white  
            px-2 py-2 md:cursor-pointer rounded-full transition-opacity duration-500 ease-in-out ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-full'}`}
            onClick={scrollToTop}
        >
            <IoMdArrowUp className='text-2xl' />
        </button>
    );
};

export default GoToTopButton;
