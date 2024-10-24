import React from 'react'
import { SiCognizant } from "react-icons/si";
import useTheme from '../Context/theme';

export const WorkExperience = () => {
    const {themeMode}=useTheme();
  return (
    <>
         <div className={`${themeMode=='dark' ?'dark:bg-slate-900 dark:text-[#aecaee]':'bg-gradient-to-r from-[#c9f7f4] to-[#06bce0]'} text-white p-6 m-10 md:m-12 rounded-lg dark:shadow-cyan-500/50 shadow-lg  overflow-y-hidden`}>
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center text-blue-900 dark:text-white">Work Experience</h1>
            <div className=" flex flex-col md:flex-row justify-around items-center space-y-8 md:space-x-8 md:px-8 lg:px-24 max-w-full overflow-y-scroll">                
               <div className="flex flex-row md:flex-col items-center gap-2">
                    <div className="bg-white rounded-full p-2 mb-2 ">
                        <SiCognizant  size={40} className=" text-black " />
                    </div>
                    <div className="max-w-[400px] md:w-[300px] bg-gray-800 dark:bg-cyan-950 p-4 rounded-md text-green-300 md:flex flex-col items-center justify-center ">
                        <h3 className="text-2xl font-medium mb-1 text-blue-700 dark:text-white md:text-center">Pogramme Analysisit Trainee</h3>
                        <p className="text-lg">2024</p>
                        <p className="text-xl md:text-center">Cognizant</p>
                    </div>
                </div>
               <div className="flex flex-row md:flex-col items-center gap-2 ">
                    <div className="bg-white rounded-full p-2 mb-2 ">
                        <SiCognizant  size={40} className=" text-black " />
                    </div>
                    <div className="max-w-[400px]  md:w-[300px] bg-gray-800 dark:bg-cyan-950 p-4  rounded-md text-green-300 md:flex flex-col items-center justify-center ">
                        <h3 className="pr-8 md:pr-0 text-2xl font-medium mb-1 text-blue-700 dark:text-white ">QEA Trainee</h3>
                        <p className="text-lg">2023</p>
                        <p className="text-xl md:text-center">Cognizant</p>
                </div>
               </div>
              
            </div>  
  </div>
    </>
  )
}
// linear-gradient(90deg, #b2fefa 0%, #0ed2f7 100%)
// linear-gradient(90deg, #48c6ef 0%, #6f86d6 100%)
// linear-gradient(90deg, #a8c0ff 0%, #3f2b96 100%)
// linear-gradient(90deg, #1c92d2 0%, #f2fcfe 100%)
