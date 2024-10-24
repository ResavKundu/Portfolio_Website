import React from 'react'
import useTheme from '../Context/theme'
import { PiPaintBrush } from "react-icons/pi";
import { MdSportsFootball } from "react-icons/md";
import { MdLocalMovies } from "react-icons/md";
import { FaCameraRetro } from "react-icons/fa";
import { GiCommercialAirplane } from "react-icons/gi";
const Hobby = () => {
    const {themeMode}=useTheme()
  return (
    <>
        <>
        <div className={` ${themeMode === 'dark' ? 'dark:bg-slate-900 dark:text-[#e2e8f0]':'bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500'} text-white p-6 m-8 md:m-12 rounded-lg dark:shadow-cyan-500/50 shadow-lg  pb:5`}>
            <div>
                <div className='flex justify-center item-center text-2xl md:text-3xl'>
                    <div className='text-3xl font-medium mb-4 text-blue-900 dark:text-white'>Hobbies</div>
                </div>
                <div className='grid grid-cols-1 gap-10 md:gap-12 md:grid-cols-2 lg:grid-cols-5 w-full px-2  md:px-24'>
                  <div className='bg-[#041e46] dark:bg-cyan-950 py-5 px-7 gap-3 flex items-center justify-center flex-col rounded-2xl text-[#2ae4d1] dark:text-white relative transition-transform duration-300 hover:-translate-y-5'>
                        <PiPaintBrush  className='text-5xl '/>
                        <div className='text-2xl  text-blue-600 font-sans dark:text-[#2ae4d1]'>Drawing</div>
                        <div className=' text-lg p-1'> 
                            <div className='text-center pb-7 md:pb-0 '>I Love to draw life.</div>
                        </div>
                    </div>

                    <div className='bg-[#041e46] dark:bg-cyan-950 py-5 px-7 gap-3 flex items-center justify-center flex-col rounded-2xl text-[#2ae4d1] dark:text-white relative transition-transform duration-300 hover:-translate-y-5'>
                        <MdSportsFootball className='text-5xl '/>
                        <div className='text-2xl  text-blue-600 font-sans dark:text-[#2ae4d1]'>Sports</div>
                        <div className=' text-lg p-1'> 
                            <div className='text-center '>Enjoys playing and watching various sports.</div>
                        </div>
                    </div>
                    <div className='bg-[#041e46] dark:bg-cyan-950 py-5 px-7 gap-3 flex items-center justify-center flex-col rounded-2xl text-[#2ae4d1] dark:text-white relative transition-transform duration-300 hover:-translate-y-5'>
                        <MdLocalMovies  className='text-5xl '/>
                        <div className='text-2xl  text-blue-600 font-sans dark:text-[#2ae4d1]'>Movie</div>
                        <div className=' text-lg p-1'> 
                            <div className='text-center '>I love escaping through movies.</div>
                        </div>
                    </div>
                    <div className='bg-[#041e46] dark:bg-cyan-950 py-5 px-7 gap-3 flex items-center justify-center flex-col rounded-2xl text-[#2ae4d1] dark:text-white relative transition-transform duration-300 hover:-translate-y-5'>
                        <FaCameraRetro  className='text-5xl '/>
                        <div className='text-2xl  text-blue-600 font-sans dark:text-[#2ae4d1]'>Photography</div>
                        <div className=' text-lg p-1'> 
                            <div className='text-center '>I capture moments through Photography.</div>
                        </div>
                    </div>
                    <div className='bg-[#041e46] dark:bg-cyan-950 py-5 px-7 gap-3 flex items-center justify-center flex-col rounded-2xl text-[#2ae4d1] dark:text-white relative transition-transform duration-300 hover:-translate-y-5'>
                        <GiCommercialAirplane   className='text-5xl '/>
                        <div className='text-2xl  text-blue-600 font-sans dark:text-[#2ae4d1]'>Travel</div>
                        <div className=' text-lg p-1'> 
                            <div className='text-center '>Loves discovering new cultures and destinations.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    </>
  )
}

export default Hobby