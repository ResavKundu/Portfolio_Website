import React from 'react'
import { AiTwotoneExperiment } from "react-icons/ai";
import { GoOrganization } from "react-icons/go";
import { SlOrganization } from "react-icons/sl";
import { SiKnowledgebase } from "react-icons/si";
import useTheme from '../../../Context/theme';
const Body = () => {
    const { themeMode } = useTheme(); 
  return (
    <>
      <div>
      <div
        className={`relative text-[#ffff99] ${
     themeMode === 'dark' ? 'dark:bg-slate-900 dark:text-[#e2e8f0]' : 'bg-gradient-to-r from-[#89f7fe] to-[#66a6ff]'
        } m-8 md:m-12 flex flex-col justify-center items-center p-4 rounded-lg shadow-lg dark:shadow-cyan-500/50`}
      >
            <div className='flex justify-center items-center mb-4 '>
                <div className='text-[#085fe2] text-4xl font-medium dark:text-white'>Summary</div>
            </div>

  
            <div className=' grid grid-cols-1 md:grid-cols-2 p-8 px-3  lg:grid-cols-4 gap-8 w-full'>
                <div className='relative bg-[#041e46] dark:bg-cyan-950 rounded-3xl grid grid-rows-2 justify-items-end items-center p-8 transform transition-transform duration-300 hover:scale-105'>
                    <AiTwotoneExperiment className='absolute top-[-20px] left-8 text-5xl bg-red-500 p-1 rounded-full text-white cursor-pointer hover:scale-110 transition-transform duration-300' />
                    <div className='  text-[#085fe2] text-5xl dark:text-white'>0Y 2M</div>
                    <div className=' text-[#08e6cf] text-xl'>of Total Experience</div>
                </div>
                <div className='bg-[#041e46] dark:bg-cyan-950 rounded-3xl grid grid-rows-2 justify-items-end p-8 transform transition-transform duration-300 hover:scale-105'>
                    <GoOrganization className='absolute top-[-20px] left-8 text-5xl bg-yellow-500 p-1 rounded-xl text-white cursor-pointer hover:scale-110 transition-transform duration-300'/>
                    <div className='text-[#085fe2] text-5xl dark:text-white'>1</div>
                    <div className='text-[#08e6cf] text-xl'>Different Organizations</div>
                </div>
                <div className='bg-[#041e46] dark:bg-cyan-950 rounded-3xl grid grid-rows-2 justify-items-end p-8 items-center transform transition-transform duration-300 hover:scale-105'>
                    <SlOrganization className='absolute top-[-20px] left-8 text-5xl bg-lime-500 p-1 rounded-xl text-white cursor-pointer hover:scale-110 transition-transform duration-300'/>
                    <div className='text-[#085fe2] text-5xl dark:text-white'>0</div>
                    <div className='text-[#08e6cf] text-xl'>Different Clients</div>
                </div>
                <div className='bg-[#041e46] dark:bg-cyan-950 rounded-3xl grid grid-rows-2 justify-items-end p-8 transform transition-transform duration-300 hover:scale-105'>
                    <SiKnowledgebase className='absolute top-[-20px] left-8 text-5xl bg-orange-500 p-1 rounded-xl text-white cursor-pointer hover:scale-110 transition-transform duration-300'/>
                    <div className='text-[#085fe2] text-5xl dark:text-white'>8</div>
                    <div className='text-[#08e6cf] text-xl'>Techstack Learning</div>
                </div>
            </div>
        </div>
      </div>


    </>
  )
}

export default Body