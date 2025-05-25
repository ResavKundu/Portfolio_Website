import React from 'react'
import useTheme from '../Context/theme'
import { RiShareBoxLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
export const Self_Developed_App = () => {
    const {themeMode}=useTheme();
  return (
     <>
        <div className={` ${themeMode === 'dark' ? 'dark:bg-slate-900 dark:text-[#e2e8f0]':'bg-gradient-to-r from-[#b2fefa] to-[#0ed2f7]'} text-white p-6 m-8 md:m-12 rounded-lg dark:shadow-cyan-500/50 shadow-lg  pb:5`}>
            <div>
                <div className='flex justify-center item-center text-2xl md:text-3xl'>
                    <div className='text-3xl font-medium mb-4 text-blue-900 text-center dark:text-white dark:shadow-slate-300 dark:drop-shadow-md'>Self-Developed Apps</div>
                </div>
                <div className='grid grid-cols-1 gap-10 lg:gap-32 md:grid-cols-2 lg:grid-cols-3 w-full px-2 mt-4 lg:px-24 '>
                    <div className='w-full bg-[#041e46] dark:bg-cyan-950 py-5 px-6  gap-4 flex  flex-col rounded-2xl text-[#2ae4d1] text-lg md:text-xl dark:text-white relative transition-transform duration-300 hover:-translate-y-5 '>
                          <div className='text-center font-md text-2xl md:text-3xl text-[#5c7aff] dark:text-white'>E-Commerce Website</div>
                          <div className='w-[50px] h-[2px] bg-[#17c3b2] ml-auto mr-auto'></div>
                          <div className='text-slate-100 text-xl md:text-2xl  dark:text-sky-300'>Modern, scalable, and secure online store.</div>
                          <div className='flex justify-start gap-3'>
                              <FaReact className=''size={30} title='React'/>
                              <IoLogoJavascript className='text-amber-500 text-2xl ' size={30} md:size={30} title='JavaScript'/>
                              <RiTailwindCssFill size={30} title='Tailwind'/>
                              <SiMongodb size={30} className='text-green-500' title='MongoDB'/>
                          </div>
                          <div>
                          <div className=' flex justify-between items-center '>
                          <NavLink 
                              to="https://full-stack-e-commerce-website-kbch.vercel.app/" 
                              aria-label="Go to page"
                            >
                          <RiShareBoxLine 
                            className="text-sky-600 cursor-pointer hover:text-sky-300 text-[20px] md:text-[25px]" 
                          />
                        </NavLink>
                            <div className='text-sky-600 hover:text-sky-300 cursor-pointer flex items-center'><FaGithub /><div>Github</div></div>
                            </div>
                          </div>
                    </div>
                    <div className='hidden md:block  w-full bg-[#041e46] dark:bg-cyan-950 py-5 px-6  gap-4 flex  flex-col rounded-2xl text-[#2ae4d1] text-xl dark:text-white relative transition-transform duration-300 hover:-translate-y-5 '>
                          <div className='text-center font-md text-3xl bg-[#072653] dark:bg-cyan-900 dark:text-white h-14 rounded-md animate-pulse'></div>
                          <div className='w-[50px] h-[2px] bg-[#072653] dark:bg-cyan-900 ml-auto mr-auto my-2  animate-pulse'></div>
                          <div className='bg-[#072653] dark:bg-cyan-900 text-2xl font-sans dark:text-sky-300 h-[110px] animate-pulse rounded-lg'></div>
                          <div className='flex justify-start gap-3 mt-4 '>
                              <div className='bg-[#072653]  dark:bg-cyan-900 h-6 w-6 animate-bounce rounded-sm'></div>
                              <div className='bg-[#072653]  dark:bg-cyan-900 h-6 w-6 animate-pulse rounded-sm'></div>
                              <div className='bg-[#072653]  dark:bg-cyan-900 h-6 w-6 animate-pulse rounded-sm'></div>
                              <div className='bg-[#072653]  dark:bg-cyan-900 h-6 w-6 animate-bounce rounded-sm'></div>
                          </div>
                          <div>
                          <div className=' flex justify-between items-centers'>
                            <div size={25} className='bg-[#072653] dark:bg-cyan-900 h-6 w-6 animate-pulse mt-2 rounded-sm'/>
                            <div className='bg-[#072653] dark:bg-cyan-900 h-6 w-20 animate-bounce mt-2 rounded-sm'></div>
                            </div>
                          </div>
                    </div>
                    <div className='hidden lg:block  w-full bg-[#041e46] dark:bg-cyan-950 py-5 px-6  gap-4 flex  flex-col rounded-2xl text-[#2ae4d1] text-xl dark:text-white relative transition-transform duration-300 hover:-translate-y-5 '>
                          <div className='text-center font-md text-3xl bg-[#072653] dark:bg-cyan-900  dark:text-white  h-14 rounded-md animate-pulse'></div>
                          <div className='w-[50px] h-[2px] bg-[#072653] dark:bg-cyan-900 ml-auto mr-auto my-2  animate-pulse'></div>
                          <div className='bg-[#072653] dark:bg-cyan-900 text-2xl font-sans dark:text-sky-300 h-[110px] animate-pulse rounded-lg'></div>
                          <div className='flex justify-start gap-3 mt-4'>
                              <div className='bg-[#072653] dark:bg-cyan-900 h-6 w-6 animate-bounce rounded-sm'></div>
                              <div className='bg-[#072653] dark:bg-cyan-900 h-6 w-6 animate-pulse rounded-sm'></div>
                              <div className='bg-[#072653] dark:bg-cyan-900 h-6 w-6 animate-pulse rounded-sm'></div>
                              <div className='bg-[#072653] dark:bg-cyan-900 h-6 w-6 animate-bounce rounded-sm'></div>
                          </div>
                          <div>
                          <div className=' flex justify-between items-centers'>
                            <div size={25} className='bg-[#072653] dark:bg-cyan-900 h-6 w-6 animate-pulse mt-2 rounded-sm'/>
                            <div className='bg-[#072653] dark:bg-cyan-900 h-6 w-20 animate-bounce mt-2s rounded-sm'></div>
                            </div>
                          </div>
                    </div>
                </div>
                
             </div>
        </div>        
     </>
  )
}
// linear-gradient(90deg, #b2fefa 0%, #0ed2f7 100%)