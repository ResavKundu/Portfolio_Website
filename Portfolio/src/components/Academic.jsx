import React from 'react';
import { IoIosSchool } from "react-icons/io";
import { FaSchoolFlag } from "react-icons/fa6";
import useTheme from '../Context/theme';
const Academic = () => {
  const {themeMode}=useTheme();
  return (
    <div className={`${themeMode=='dark' ?'dark:bg-slate-900 dark:text-[#e2e8f0]':'bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500' } text-white p-6 m-10 md:m-12 rounded-lg dark:shadow-cyan-500/50 shadow-lg relative`}>
       <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center text-blue-900 dark:text-white">Academics</h1>
       {/* <div className='hidden md:block absolute top-[140px] w-full h-[2px] bg-red-500'></div> */}
  <div className=" flex flex-col md:flex-row justify-between items-center space-y-8 md:space-x-8 md:px-8 lg:px-24 md:overflow-y-scroll md:h-[300px]">
    <div className="flex flex-row md:flex-col items-center gap-2">
      <div className="flex flex-row  bg-white rounded-full p-3 mb-2 z-10">
        <IoIosSchool size={40} className=" text-black " />
      </div>
      <div className="max-w-[400px] bg-gray-800 dark:bg-cyan-950 p-4 rounded-md text-green-300 md:flex flex-col items-center justify-center ">
        <h3 className="text-2xl font-medium mb-1 text-blue-700 dark:text-white">B.Tech (ECE)</h3>
        <p className="text-lg">2019 - 2023</p>
        <p className="text-xl md:text-center">Ramkrishna Mahato Government College</p>
      </div>
    </div>
    <div className="flex flex-row  md:flex-col items-center gap-2">
      <div className="flex flex-row md:flex-col bg-white rounded-full p-3 mb-2 z-10">
        <FaSchoolFlag  size={40} className=" text-black" />
      </div>
      <div className="max-w-[400px] bg-gray-800 dark:bg-cyan-950 p-4 rounded-md text-green-300 md:flex flex-col items-center justify-center">
        <h3 className="text-2xl font-medium mb-1 text-blue-700 dark:text-white">Intermediate (Science)</h3>
        <p className="text-lg">2019</p>
        <p className="text-xl">Garhbeta High School</p>
      </div>
    </div>
    <div className="flex flex-row md:flex-col items-center gap-2">
      <div className="flex flex-row md:flex-col bg-white rounded-full p-3 mb-2 z-10">
        <FaSchoolFlag size={40} className=" text-black"/>
      </div>
      <div className=" max-w-[400px] md:max-w-[400px] bg-gray-800 dark:bg-cyan-950 p-4 rounded-md text-green-300 md:flex flex-col items-center justify-center">
        <h3 className="text-2xl font-medium mb-1 text-blue-700 dark:text-white">Metrics (X th)</h3>
        <p className="text-lg">2017</p>
        <p className="text-xl ">Garhbeta High School</p>
      </div>
    </div>
  </div>
  </div>
  );
};

export default Academic;