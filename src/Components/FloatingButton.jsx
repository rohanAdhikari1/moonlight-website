import React from 'react'
import { Link } from 'react-router-dom'

const FloatingButton = () => {
    return (
        <div className='z-20 fixed top-[15%] right-[120px] md:right-[140px] md:top-[25%]'>
            <div className='absolute z-10 flex w-[80px] h-[80px] text-center items-center justify-items-center'>
                <a href='https://moonlightmodel.com.np/admission/' className="text-white font-bold">
                    <div>
                        <div className='absolute top-[11px] left-[11px] fb rotate-[28deg] h-[11px] w-[11px]'></div>
                        <div className='absolute top-[30px] left-[6px] fb h-[11px] w-[11px]'></div>
                        <div className='absolute top-[50px] left-[11px] fb rotate-[-25deg] h-[11px] w-[11px]'></div>
                        <div className='absolute top-[65px] left-[24px] fb rotate-[-53deg] h-[11px] w-[11px]'></div>
                        <div className='absolute top-[73px] left-[43px] fb rotate-[-80deg] h-[11px] w-[11px]'></div>
                        <div className='absolute top-[72px] left-[62px] fb rotate-[-106deg] h-[11px] w-[11px]'></div>
                        <div className='absolute top-[62px] left-[80px] fb rotate-[-133deg] h-[11px] w-[11px]'></div>
                        <div className='absolute top-[45px] left-[91px] fb rotate-[-160deg] h-[11px] w-[11px]'></div>
                        <div className='absolute top-[25px] left-[93px] fb rotate-[-187deg] h-[11px] w-[11px]'></div>
                        <div className='absolute top-[7px] left-[87px] fb rotate-[-209deg] h-[11px] w-[11px]'></div>
                        <div className='absolute top-[-7px] left-[73px] fb rotate-[-238deg] h-[11px] w-[11px]'></div>
                        <div className='absolute top-[-13px] left-[52px] fb rotate-[-267deg] h-[11px] w-[11px]'></div>
                        <div className='absolute top-[-10px] left-[34px] fb rotate-[-289deg] h-[11px] w-[11px]'></div>
                        <div className='absolute top-[-2px] left-[20px] fb rotate-[-320deg] h-[11px] w-[11px]'></div>
                    </div>
                    <h4 className='absolute bg-primary rounded-full w-[80px] h-[78px] text-center items-center pt-3 left-[16px] top-[1px]'>Apply Now!</h4>
                </a>
            </div>
        </div>
    )
}

export default FloatingButton
