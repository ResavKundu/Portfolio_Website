import React, { useState } from 'react';
import { FiPlus } from "react-icons/fi";
import useTheme from '../Context/theme';
import { LuMinus } from "react-icons/lu";
import { TiPinOutline } from "react-icons/ti";
const Certification = () => {
  const { themeMode } = useTheme(); 
  const [clickSelenium,setClickSelenium]=useState(false);
  const [clickTestNG,setClickOnTestNG]=useState(false);
  const [clickOnRestApi,setClickOnRestApi]=useState(false);
  const handleOnChangeSelenium=(e)=>{
     const {name,value}=e.target;
     setClickSelenium((prev)=>!prev)

  }
  return (
    <>
      <div className={` ${themeMode === 'dark' ? 'dark:bg-slate-900 dark:text-[#e2e8f0]':'bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500'} text-white p-6 m-10 md:m-12 rounded-lg dark:shadow-slate-300 dark:shadow-cyan-500/50 shadow-lg `}>
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center text-indigo-800 dark:text-[#e2e8f0]">Certification</h1>
        <div className="flex flex-col items-center justify-center space-y-4 md:space-y-6 lg:space-y-8">
          {/* First Certification Block */}
          <div className="relative w-full max-w-sm md:max-w-lg lg:max-w-7xl cursor-pointer"
          title='Training & Certification | Selenium'
          name="selenium"

          onClick={handleOnChangeSelenium}
          >
            <div className="relative bg-indigo-950 dark:bg-cyan-950 p-2 md:p-2 lg:p-4 text-sky-400 text-lg md:text-xl flex items-center justify-center rounded-tl-md rounded-tr-md shadow-lg transform transition-all duration-400 ease-in-out hover:bg-[#1b0342] dark:text-[#e2e8f0] hover:scale-105">
            
              <div className="text-center ">
                Training & Certification | Selenium
              </div>
             
              {
                clickSelenium ? 
                (
                  <LuMinus    className="hidden md:block absolute right-4 bottom-4 text-sky-400 dark:text-[#e2e8f0] cursor-pointer text-xl " />
                ) : 
                (
                  <FiPlus className="hidden md:block absolute right-4 bottom-4 text-sky-400 dark:text-[#e2e8f0] cursor-pointer text-xl " />
                )
              }
            </div>            
           {
              clickSelenium ?(
                <div className=' bg-slate-200 text-black px-5 py-3 rounded-bl-md rounded-br-md transform transition-all duration-500 ease-in-out hover:scale-105'>
                <div>
                
                  <span className='font-semibold text-xl '>UDEMY - </span>
                  <span className='font-semibold text-xl'>2023</span>
                </div>
                <div>
                    <span className='font-semibold text-xl '>Description : </span>
                    <span>Selenium is an open-source framework widely used for automating the testing of web applications across various browsers and platforms. I have gained significant experience in utilizing Selenium WebDriver to create automated test scripts that ensure the functionality, reliability, and cross-browser 
                    compatibility of web applications. My expertise spans developing efficient test scripts that simulate user interactions and validate core functionalities, making web testing faster and more accurate.</span>
                </div>
                <div>
                  <span className='font-semibold text-xl '>Skill Acquired : </span>
                  <span>Automated Testing ,Cross-Browser Testing ,XPath/CSS Selectors ,TestNG Integration ,Page Object Model (POM)</span>
                </div>
            </div>
              ) : (
                <div className='w-full  bg-white h-1 rounded-bl-md rounded-br-md '></div>
              )
           }
          </div>
          
          {/* Second Certification Block */}
          <div className="relative w-full max-w-sm md:max-w-lg lg:max-w-7xl cursor-pointer "
          title='Training & Certification | TestNG'
          name="TestNG"
          onClick={()=>setClickOnTestNG((prev)=>!prev)}
          >
            <div className="relative bg-indigo-950 dark:bg-cyan-950 p-2 md:p-2 lg:p-4 text-sky-400 text-lg md:text-xl flex items-center justify-center rounded-tl-md rounded-tr-md shadow-lg transform transition-all duration-400 ease-in-out hover:bg-[#1b0342] dark:text-[#e2e8f0] hover:scale-105">
              <div className="text-center ">
                Training & Certification | TestNG
              </div>
             
              {
                clickTestNG ? 
                (
                  <LuMinus    className="hidden md:block absolute right-4 bottom-4 text-sky-400 dark:text-[#e2e8f0] cursor-pointer text-xl " />
                ) : 
                (
                  <FiPlus className="hidden md:block absolute right-4 bottom-4 text-sky-400 dark:text-[#e2e8f0] cursor-pointer text-xl " />
                )
              }
            </div>            
           {
            clickTestNG ?(
                <div className=' bg-slate-200 text-black px-5 py-3 rounded-bl-md rounded-br-md transform transition-all duration-500 ease-in-out hover:scale-105'>
                <div>
                
                  <span className='font-semibold text-xl '>UDEMY - </span>
                  <span className='font-semibold text-xl'>2023</span>
                </div>
                <div>
                    <span className='font-semibold text-xl '>Description : </span>
                    <span>
                    TestNG is a powerful testing framework for Java, enabling efficient test execution, annotations, data-driven testing, and integration with tools like Maven for automation.</span>
                </div>
                <div>
                  <span className='font-semibold text-xl '>Skill Acquired : </span>
                  <span>Skills acquired in TestNG include using annotations, configuring tests, executing parallel tests, data-driven testing, integrating with Maven, and enhancing automated testing efficiency in Java.</span>
                </div>
            </div>
              ) : (
                <div className='w-full  bg-white h-1 rounded-bl-md rounded-br-md '></div>
              )
           }
          </div>

          {/* Third Certofication Block */}
          <div className="relative w-full max-w-sm md:max-w-lg lg:max-w-7xl cursor-pointer "
          title='Training & Certification | TestNG'
          name="TestNG"
          onClick={()=>setClickOnRestApi((prev)=>!prev)}
          >
            <div className="relative bg-indigo-950 dark:bg-cyan-950 p-2 md:p-2 lg:p-4 text-sky-400 text-lg md:text-xl flex items-center justify-center rounded-tl-md rounded-tr-md shadow-lg transform transition-all duration-400 ease-in-out hover:bg-[#1b0342] dark:text-[#e2e8f0] hover:scale-105">
              <div className="text-center ">
                Training & Certification | Rest Api
              </div>
             
              {
                clickOnRestApi ? 
                (
                  <LuMinus    className="hidden md:block absolute right-4 bottom-4 text-sky-400 dark:text-[#e2e8f0] cursor-pointer text-xl " />
                ) : 
                (
                  <FiPlus className="hidden md:block absolute right-4 bottom-4 text-sky-400 dark:text-[#e2e8f0] cursor-pointer text-xl " />
                )
              }
            </div>            
           {
            clickOnRestApi ?(
                <div className=' bg-slate-200 text-black px-5 py-3 rounded-bl-md rounded-br-md transform transition-all duration-500 ease-in-out hover:scale-105'>
                <div>
                
                  <span className='font-semibold text-xl '>UDEMY - </span>
                  <span className='font-semibold text-xl'>2024</span>
                </div>
                <div>
                    <span className='font-semibold text-xl '>Description : </span>
                    <span>
                    A REST API (Representational State Transfer) is a web service that allows communication between client and server over HTTP. It uses standard HTTP methods like GET, POST, PUT, and DELETE to perform CRUD operations on resources, ensuring scalability and simplicity.</span>
                </div>
                <div>
                  <span className='font-semibold text-xl '>Skill Acquired : </span>
                  <span>Skills acquired in REST API include designing and developing endpoints, handling HTTP requests and responses, performing CRUD operations, authentication and authorization, error handling, implementing RESTful principles, integrating with front-end applications, and testing APIs using tools like Postman or Swagger.</span>
                </div>
            </div>
              ) : (
                <div className='w-full  bg-white h-1 rounded-bl-md rounded-br-md '></div>
              )
           }
          </div>
        </div>
      </div>
    </>
  );
};

export default Certification;
