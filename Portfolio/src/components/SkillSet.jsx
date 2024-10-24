import React, { useState } from 'react';
import { FaCode } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaMicrochip } from "react-icons/fa6";
import { SiFramework } from "react-icons/si";
import { MdOutlineSecurity } from "react-icons/md";
import { VscAzureDevops } from "react-icons/vsc";
import { GrTechnology } from "react-icons/gr";
import useTheme from '../Context/theme';

const SkillSet = () => {
  const { themeMode } = useTheme(); 
  const [coding, setCoding] = useState(false);
  const [frameworks, setFrameworks] = useState(false);
  const [microService, setMicroService] = useState(false);
  const [database, setDatabase] = useState(false);
  const [mordernTechonology, setModernTechonology] = useState(false);
  const [webSecurity, setWebSecurity] = useState(false);

  const codingMouseEnter = () => setCoding(true);
  const codingMouseLeave = () => setCoding(false);

  const frameworkMouseEnter = () => setFrameworks(true);
  const frameworkMouseLeave = () => setFrameworks(false);

  const microserviceEnter=()=>setMicroService(true);
  const microserviceLeave=()=>setMicroService(false);

  const databaseEnter = ()=>setDatabase(true);
  const databaseLeave= ()=> setDatabase(false);

  const mordernTechonologyEnter= ()=>setModernTechonology(true);
  const mordernTechonologyLeave= ()=>setModernTechonology(false);

  const webSecurityEnter=()=>setWebSecurity(true);
  const webSecurityLeave=()=>setWebSecurity(false);
//  console.log("Database ",database)
  return (
    <>
      <div className={`${themeMode === 'dark' ? 'dark:bg-slate-900 dark:text-[#e2e8f0]':'bg-gradient-to-r from-[#005aa7] to-[#cecdc6] '} m-8 md:m-12 flex flex-col justify-center items-center p-6 rounded-lg font-sans  dark:shadow-cyan-500/50 shadow-lg `}>
        {/* Header Section */}
        <div className="flex flex-col justify-center items-center text-[#022b7c] dark:text-white drop-shadow mb-6">
          <div className="text-3xl font-medium mb-2 ">Skill Set</div>
          <div className="text-center font-medium w-full ">
            Click each card to reveal detailed skills and strengths under each category.
          </div>
        </div>

        {/* Card Container */}
        <div className="grid grid-cols-1 gap-6 md:gap-12 md:grid-cols-2 lg:grid-cols-4 w-full px-2 md:px-24  ">
          {/* Individual Skill Card */}
         {/* Coding */}
          <div
            className="h-[200px] w-full  rounded-3xl flex items-center justify-center  cursor-pointer transition-transform duration-300"
            onMouseEnter={codingMouseEnter}
            onMouseLeave={codingMouseLeave}
            style={{ perspective: '1000px' }} // Add perspective to the outer container
          >
          <div
            className="relative w-full h-full"
            style={{
              transform: coding ? 'rotateY(180deg)' : 'rotateY(0deg)', // Apply rotation based on the webSecurity state
              transformStyle: 'preserve-3d',
              transition: 'transform 0.8s',
            }}
          >
            {/* Front Side */}
            <div
              className="absolute w-full h-full bg-[#08e6cf] dark:bg-cyan-950 p-4 rounded-3xl flex flex-col items-center justify-center "
              style={{ backfaceVisibility: 'hidden' }} // Ensure backface is hidden
            >
              <FaCode className="text-[#033886] text-3xl mb-2 dark:text-slate-200" />
              <div className="font-medium text-xl text-[#033886] dark:text-slate-200">Coding</div>
            </div>

            {/* Back Side */}
            <div
              className="absolute w-full h-full bg-slate-200 p-4 rounded-3xl flex flex-col items-center justify-center "
              style={{
                transform: 'rotateY(180deg)', // Rotate this side 180deg to show on flip
                backfaceVisibility: 'hidden',
              }}
            >
              <div className="flex flex-col space-y-1 w-full uppercase ">
              <div className="flex items-center justify-between w-full ">
                  <p className="w-[210px] text-md font-semibold text-[#05224d]">Java 8 :</p>
                  <input
                    type="range"
                    value={80}
                    className="h-2 w-full bg-white rounded-lg appearance-none cursor-pointer range-lg accent-green-600"
                  />
                </div>
                <div className="flex items-center justify-between w-full">
                  <p className="w-[210px] text-md font-semibold text-[#05224d]">Python :</p>
                  <input
                    type="range"
                    value={70}
                    className="h-2 w-full bg-white rounded-lg appearance-none cursor-pointer range-lg accent-green-600"
                  />
                </div>
                <div className="flex items-center justify-between w-full">
                  <p className="w-[210px] text-md font-semibold text-[#05224d]">Objective C :</p>
                  <input
                    type="range"
                    value={65}
                    className="h-2 w-full bg-white rounded-lg appearance-none cursor-pointer range-lg accent-green-600"
                  />
                </div>
           </div>
         </div>
       </div>
       </div>
       {/* Frameworks */}

       <div
            className="h-[200px] w-full  rounded-3xl flex items-center justify-center  cursor-pointer transition-transform duration-300"
            onMouseEnter={frameworkMouseEnter}
            onMouseLeave={frameworkMouseLeave}
            style={{ perspective: '1000px' }} // Add perspective to the outer container
          >
          <div
            className="relative w-full h-full"
            style={{
              transform: frameworks ? 'rotateY(180deg)' : 'rotateY(0deg)', // Apply rotation based on the webSecurity state
              transformStyle: 'preserve-3d',
              transition: 'transform 0.8s',
            }}
          >
            {/* Front Side */}
            <div
              className="absolute w-full h-full bg-[#08e6cf] dark:bg-cyan-950 p-4 rounded-3xl flex flex-col items-center justify-center "
              style={{ backfaceVisibility: 'hidden' }} // Ensure backface is hidden
            >
              <SiFramework className="text-[#033886] text-3xl mb-2 dark:text-slate-200" />
              <div className="font-medium text-xl text-[#033886] dark:text-slate-200">Frameworks</div>
            </div>

            {/* Back Side */}
            <div
              className="absolute w-full h-full bg-slate-200 p-4 rounded-3xl flex flex-col items-center justify-center "
              style={{
                transform: 'rotateY(180deg)', // Rotate this side 180deg to show on flip
                backfaceVisibility: 'hidden',
              }}
            >
              <div className="flex flex-col space-y-1 w-full uppercase">
              <div className="flex items-center justify-between w-full">
                    <p className="w-[210px] text-md font-semibold text-[#05224d]">React:</p>
                    <input
                      type="range"
                      value={75}
                      className="h-2 w-full bg-white rounded-lg appearance-none cursor-pointer range-lg accent-green-600"
                    />
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <p className="w-[210px] text-md font-semibold text-[#05224d]">Tailwind CSS:</p>
                    <input
                      type="range"
                      value={80}
                      className="h-2 w-full bg-white rounded-lg appearance-none cursor-pointer range-lg accent-green-600"
                    />
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <p className="w-[210px] text-md font-semibold text-[#05224d]">Selenium:</p>
                    <input
                      type="range"
                      value={70}
                      className="h-2 w-full bg-white rounded-lg appearance-none cursor-pointer range-lg accent-green-600"
                    />
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <p className="w-[210px] text-md font-semibold text-[#05224d]">Test NG :</p>
                    <input
                      type="range"
                      value={70}
                      className="h-2 w-full bg-white rounded-lg appearance-none cursor-pointer range-lg accent-green-600"
                    />
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <p className="w-[210px] text-md font-semibold text-[#05224d]">Cucumber :</p>
                    <input
                      type="range"
                      value={75}
                      className="h-2 w-full bg-white rounded-lg appearance-none cursor-pointer range-lg accent-green-600"
                    />
                  </div>
           </div>
         </div>
        </div>
       </div>
       

         
     {/* Microservices */}
       
     <div
            className="h-[200px] w-full  rounded-3xl flex items-center justify-center  cursor-pointer transition-transform duration-300"
            onMouseEnter={microserviceEnter}
            onMouseLeave={microserviceLeave}
            style={{ perspective: '1000px' }} // Add perspective to the outer container
          >
          <div
            className="relative w-full h-full"
            style={{
              transform: microService ? 'rotateY(180deg)' : 'rotateY(0deg)', // Apply rotation based on the webSecurity state
              transformStyle: 'preserve-3d',
              transition: 'transform 0.8s',
            }}
          >
            {/* Front Side */}
            <div
              className="absolute w-full h-full bg-[#08e6cf] dark:bg-cyan-950 p-4 rounded-3xl flex flex-col items-center justify-center "
              style={{ backfaceVisibility: 'hidden' }} // Ensure backface is hidden
            >
              <FaMicrochip  className="text-[#033886] text-3xl mb-2 dark:text-slate-200" />
              <div className="font-medium text-xl text-[#033886] dark:text-slate-200 text-center">Microservices & System Design</div>
            </div>

            {/* Back Side */}
            <div
              className="absolute w-full h-full bg-slate-200 p-4 rounded-3xl flex flex-col items-center justify-center "
              style={{
                transform: 'rotateY(180deg)', // Rotate this side 180deg to show on flip
                backfaceVisibility: 'hidden',
              }}
            >
              <div className="flex flex-col space-y-1 w-full uppercase">
                <div className="flex items-center justify-between w-full">
                  <p className="w-[210px] text-md font-semibold text-[#05224d]">REST API :</p>
                  <input
                    type="range"
                    value={70}
                    className="h-2 w-full bg-white rounded-lg appearance-none cursor-pointer range-lg accent-green-600"
                  />
                </div>
                {/* <div className="flex items-center justify-between w-full">
                  <p className="w-[210px] text-md font-semibold text-[#05224d]">MongoDB :</p>
                  <input
                    type="range"
                    value={60}
                    className="h-2 w-full bg-white rounded-lg appearance-none cursor-pointer range-lg accent-green-600"
                  />
                </div> */}
           </div>
         </div>
        </div>
       </div>
    
      {/* database */}
      <div
            className="h-[200px] w-full  rounded-3xl flex items-center justify-center  cursor-pointer transition-transform duration-300"
            onMouseEnter={databaseEnter}
            onMouseLeave={databaseLeave}
            style={{ perspective: '1000px' }} // Add perspective to the outer container
          >
          <div
            className="relative w-full h-full"
            style={{
              transform: database ? 'rotateY(180deg)' : 'rotateY(0deg)', // Apply rotation based on the webSecurity state
              transformStyle: 'preserve-3d',
              transition: 'transform 0.8s',
            }}
          >
            {/* Front Side */}
            <div
              className="absolute w-full h-full bg-[#08e6cf] dark:bg-cyan-950 p-4 rounded-3xl flex flex-col items-center justify-center "
              style={{ backfaceVisibility: 'hidden' }} // Ensure backface is hidden
            >
              <FaDatabase className="text-[#033886] text-3xl mb-2 dark:text-slate-200" />
              <div className="font-medium text-xl text-[#033886] dark:text-slate-200">Database</div>
            </div>

            {/* Back Side */}
            <div
              className="absolute w-full h-full bg-slate-200 p-4 rounded-3xl flex flex-col items-center justify-center "
              style={{
                transform: 'rotateY(180deg)', // Rotate this side 180deg to show on flip
                backfaceVisibility: 'hidden',
              }}
            >
              <div className="flex flex-col space-y-1 w-full uppercase ">
                <div className="flex items-center justify-between w-full">
                  <p className="w-[210px] text-md font-semibold text-[#05224d]">SQL :</p>
                  <input
                    type="range"
                    value={75}
                    className="h-2 w-full bg-white rounded-lg appearance-none cursor-pointer range-lg accent-green-600"
                  />
                </div>
                <div className="flex items-center justify-between w-full">
                  <p className="w-[210px] text-md font-semibold text-[#05224d]">Mongo DB :</p>
                  <input
                    type="range"
                    value={60}
                    className="h-2 w-full bg-white rounded-lg appearance-none cursor-pointer range-lg accent-green-600"
                  />
                </div>
           </div>
         </div>
        </div>
       </div>
          


          <div
                className="h-[200px] w-full rounded-3xl flex items-center justify-center  cursor-pointer transition-transform duration-300"
                onMouseEnter={mordernTechonologyEnter}
                onMouseLeave={mordernTechonologyLeave}
                style={{ perspective: '1000px' }} // Add perspective to the outer container
              >
                <div
                  className="relative w-full h-full"
                  style={{
                    transform: mordernTechonology ? 'rotateY(180deg)' : 'rotateY(0deg)', // Apply rotation based on the webSecurity state
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.8s',
                  }}
                >
                  {/* Front Side */}
                  <div
                    className="absolute w-full h-full bg-[#08e6cf] dark:bg-cyan-950 p-4 rounded-3xl flex flex-col items-center justify-center "
                    style={{ backfaceVisibility: 'hidden' }} // Ensure backface is hidden
                  >
                    <VscAzureDevops  className="text-[#033886] text-3xl mb-2 dark:text-slate-200" />
                    <div className="font-medium text-xl text-[#033886] dark:text-slate-200">Devops</div>
                  </div>

                  {/* Back Side */}
                  <div
                    className="absolute w-full h-full bg-slate-200 p-4 rounded-3xl flex flex-col items-center justify-center "
                    style={{
                      transform: 'rotateY(180deg)', // Rotate this side 180deg to show on flip
                      backfaceVisibility: 'hidden',
                    }}
                  >
                    <div className="flex flex-col space-y-1 w-full uppercase">
                      <div className="flex items-center justify-between w-full  ">
                        <p className="w-[210px] text-md font-semibold text-[#05224d]">Git :</p>
                        <input
                          type="range"
                          value={60}
                          className="h-2 w-full bg-white rounded-lg appearance-none cursor-pointer range-lg accent-green-600"
                        />
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <p className="w-[210px] text-md font-semibold text-[#05224d]">Agile :</p>
                        <input
                          type="range"
                          value={61}
                          className="h-2 w-full bg-white rounded-lg appearance-none cursor-pointer range-lg accent-green-600"
                        />
                      </div>
                    </div>
                  </div>
                </div>
             </div>


          {/* WebSecurity */}
        <div
            className="h-[200px] w-full  rounded-3xl flex items-center justify-center  cursor-pointer transition-transform duration-300"
            onMouseEnter={webSecurityEnter}
            onMouseLeave={webSecurityLeave}
            style={{ perspective: '1000px' }} // Add perspective to the outer container
          >
          <div
            className="relative w-full h-full"
            style={{
              transform: webSecurity ? 'rotateY(180deg)' : 'rotateY(0deg)', // Apply rotation based on the webSecurity state
              transformStyle: 'preserve-3d',
              transition: 'transform 0.8s',
            }}
          >
            {/* Front Side */}
            <div
              className="absolute w-full h-full bg-[#08e6cf] dark:bg-cyan-950 p-4 rounded-3xl flex flex-col items-center justify-center "
              style={{ backfaceVisibility: 'hidden' }} // Ensure backface is hidden
            >
              <GrTechnology className="text-[#033886] text-3xl mb-2 dark:text-slate-200" />
              <div className="font-medium text-xl text-[#033886] dark:text-slate-200">Modern Technology</div>
            </div>

            {/* Back Side */}
            <div
              className="absolute w-full h-full bg-slate-200 p-4 rounded-3xl flex flex-col items-center justify-center "
              style={{
                transform: 'rotateY(180deg)', // Rotate this side 180deg to show on flip
                backfaceVisibility: 'hidden',
              }}
            >
              <div className="flex flex-col space-y-1 w-full">
                <div className="flex items-center justify-between w-full uppercase">
                  <p className="w-[210px] text-md font-semibold text-[#05224d]">Mechine Learning :</p>
                  <input
                    type="range"
                    value={45}
                    className="h-2 w-full bg-white rounded-lg appearance-none cursor-pointer range-lg accent-green-600"
                  />
                </div>
                {/* <div className="flex items-center justify-between w-full">
                  <p className="w-[210px] text-md font-semibold text-[#05224d]">MongoDB :</p>
                  <input
                    type="range"
                    value={60}
                    className="h-2 w-full bg-white rounded-lg appearance-none cursor-pointer range-lg accent-green-600"
                  />
                </div> */}
           </div>
         </div>
  </div>
       </div>


          
        </div>
      </div>
    </>
  );
};

export default SkillSet;
