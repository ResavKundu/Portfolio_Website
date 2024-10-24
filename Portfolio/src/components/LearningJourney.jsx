import React from 'react';
import useTheme from '../Context/theme';
import { CgWebsite } from "react-icons/cg";
import { BsFillDatabaseFill } from "react-icons/bs";
import { SiSelenium } from "react-icons/si";

const LearningJourney = () => {
  const { themeMode } = useTheme();
  return (
    <>
      <div className={`${themeMode === 'dark' ? 'dark:bg-slate-900 dark:text-[#e2e8f0]' : 'bg-gradient-to-r from-[#005aa7] to-[#cecdc6]'} p-6 m-8 md:m-12 flex flex-col justify-center items-center rounded-lg font-sans dark:shadow-cyan-500/50 shadow-lg`}>
        {/* Header Section */}
        <div className="flex flex-col justify-center items-center text-[#022b7c] dark:text-white drop-shadow mb-4 sm:mb-6 md:mb-8 gap-4">
          <div className="text-2xl sm:text-3xl font-medium mb-2">Learning Journey</div>

          {/* Web Development Section */}
          <div className='flex flex-col md:flex-row  justify-center space-y-3 md:space-y-0 md:space-x-5 w-full '>
            <div className='md:my-4'>
              <CgWebsite size={50} sm:size={50} className='bg-white rounded-full p-2 text-2xl text-indigo-950' />
            </div>
            <div className='bg-[#122937] p-3 rounded-md w-full cursor-pointer hover:translate-x-4 transition-all ease-in-out duration-500 '>
              <span className='block text-blue-700 text-xl md:text-2xl  font-semibold mb-2 dark:text-[#08EFCF]'>Web Development</span>
              <span className='text-white text-md md:text-xl p-1 italic '>Started with HTML, CSS, and JavaScript and dove deep into React.js.</span>
            </div>
          </div>

          {/* Data Structure & Algorithm Section */}
          <div className='flex flex-col md:flex-row  justify-center space-y-3 md:space-y-0 md:space-x-4 w-full sm:max-w-xl md:max-w-2xl lg:max-w-7xl'>
            <div className='md:my-4'>
              <BsFillDatabaseFill size={50} sm:size={50} className='bg-white rounded-full p-2 text-2xl text-indigo-950' />
            </div>
            <div className='bg-[#122937] p-3 rounded-md w-full cursor-pointer hover:translate-x-4 transition-all ease-in-out duration-500'>
              <span className='block text-blue-700 text-xl md:text-2xl font-semibold mb-2 dark:text-[#08EFCF]'>Data Structure & Algorithm</span>
              <span className='text-white text-md md:text-xl italic  '>Studied DSA such as arrays, linked lists, stacks, and queues. Applied them to solve various algorithmic challenges and optimize code efficiency.</span>
            </div>
          </div>

          {/* Automation Testing With Java Selenium Section */}
          <div className='flex flex-col md:flex-row  justify-center space-y-3 md:space-y-0 md:space-x-4 w-full sm:max-w-xl md:max-w-2xl lg:max-w-7xl'>
            <div className='md:my-4'>
              <SiSelenium size={50} sm:size={50} className='bg-white rounded-full p-2 text-2xl text-indigo-950' />
            </div>
            <div className='bg-[#122937] p-3 rounded-md w-full cursor-pointer hover:translate-x-4 transition-all ease-in-out duration-500'>
              <span className='block text-blue-700 text-xl md:text-2xl font-semibold mb-2 dark:text-[#08EFCF]'>Automation Testing With Java Selenium</span>
              <span className='text-white text-md md:text-xl p-1 italic'>Studied Automation Testing with Java Selenium, TestNG, and Cucumber Framework.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearningJourney;
