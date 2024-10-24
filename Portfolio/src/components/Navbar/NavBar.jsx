import React, { useEffect, useState } from 'react';
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import useTheme from '../../Context/theme';
import { GoSun } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";

const NavBar = () => {
    const { themeMode, lightTheme, darkTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    // Track the scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked;
        if (darkModeStatus) {
            darkTheme();
        } else {
            lightTheme();
        }
    };

    const handleDownloadResume = () => {
        const resumeUrl = 'https://drive.google.com/file/d/1QRBoLrtIwEYE19m-WKwZIkFZXTqgZgS2/view?usp=drive_link';
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.setAttribute('download', 'My_Resume.pdf'); // Specify the file name
        document.body.appendChild(link);
        link.click();
        link.remove();
        
    };

    return (
        <>
        <div className={`transition-all duration-300 ${isScrolled ? 'h-[60px]' : 'h-[90px] md:h-[130px]'} bg-gradient-to-r from-[#3457f5] to-[#6928aa] text-[#ffff99] shadow-lg flex items-center sticky top-0 z-20  ease-in-out duration-500 `}>
            <div className='w-full p-2 md:p-4 pl-4 md:pl-8 dark:bg-slate-900 dark:text-white'>
                <div className='flex justify-between items-center'>
                    <div>
                        <div className={` ${isScrolled ? 'text-2xl md:text-4xl ':'text-2xl md:text-5xl'}   font-bold tracking-wider drop-shadow-lg`}>
                            Resav Kundu
                        </div>
                        <div className={`${isScrolled ? 'hidden':''} md:p-2 text-sm md:text-2xl italic tracking-tight`}>
                            Froentend Developer & Automation Tester
                        </div>
                    </div>
                    <div className='flex md:flex-row text-center justify-center items-center space-x-1 md:space-x-4'>
                        <div className='flex justify-center items-center space-x-1 md:space-x-4'>
                        <FaInstagram
                            // size={isScrolled ? 20 : 30} // Decrease the size when scrolled
                            // md: size={isScrolled ? 30 : 40} // Adjust the size for larger screens
                            className={`hover:ease-out cursor-pointer ${isScrolled ? 'text-xl md:text-3xl' : 'text-2xl md:text-4xl'}`}
                            onClick={() => window.open('https://www.instagram.com/_resav_?utm_source=qr&igsh=MTFoOWY1aHh4cHRnNg==', '_blank', 'noopener,noreferrer')}
                        />


                            <CiLinkedin
                               className={`hover:ease-out cursor-pointer ${isScrolled ? 'text-xl md:text-3xl' : 'text-2xl md:text-4xl'}`}
                                onClick={() => window.open('https://www.linkedin.com/in/resav-kundu-0b0a8b223?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', '_blank', 'noopener,noreferrer')}
                            />
                            <FaGithub
                                className={`hover:ease-out cursor-pointer ${isScrolled ? 'text-xl md:text-3xl' : 'text-2xl md:text-4xl'}`}
                                onClick={() => window.open('https://github.com/ResavKundu', '_blank', 'noopener,noreferrer')}
                            />
                            <CiMail
                                className={`hover:ease-out cursor-pointer ${isScrolled ? 'text-xl md:text-3xl' : 'text-2xl md:text-4xl'}`}
                                onClick={() => window.location.href = 'mailto:resav8515@gmail.com'}
                            />
                            <input
                                type="checkbox"
                                onChange={onChangeBtn}
                                checked={themeMode === 'dark'}
                                className='hidden'
                                id="themeToggle"
                            />
                            <label htmlFor="themeToggle" className='cursor-pointer'>
                                {themeMode === 'dark' ? (
                                    <IoMoonOutline className={`hover:ease-out cursor-pointer ${isScrolled ? 'text-xl md:text-3xl' : 'text-2xl md:text-4xl'}`} />
                                ) : (
                                    <GoSun className={`hover:ease-out cursor-pointer ${isScrolled ? 'text-xl md:text-3xl font-bold' : 'text-2xl md:text-4xl'}`} />
                                )}
                            </label>
                        </div>
                        <button className={ ` ${isScrolled ? 'min-h-[20px] md:min-h-[26px] min-w-[20px] md:min-w-[50px] p-0.5 px-2 md:p-1 text-sm md:text-md  font-semibold ':'min-h-[20px] md:min-h-[56px] min-w-[30px] md:min-w-[100px] p-0.5 md:p-3 text-sm md:text-xl '} text-[#002d72]   bg-[#27d8c6] rounded-md hover:bg-sky-500 transition-all duration-400 ease-in-out `}
                            onClick={handleDownloadResume}
                        >
                            Download Resume
                        </button>
                    </div>
                </div>
                
            </div>
            
        </div>
        <div className={`${themeMode === 'dark' ? 'dark:bg-gradient-to-r from-[#11998e] to-[#38ef7d]' : 'bg-gradient-to-r from-[#fc466b] to-[#fb3fd2]'} h-2 w-full `} >
     
            </div>
            </>
    );
};

export default NavBar;

// linear-gradient(90deg, #ad5389 0%, #3c1053 100%)
// linear-gradient(90deg, #fc466b 0%, #3f5efb 100%)
// className={` ${themeMode === 'dark' ? 'dark:bg-slate-900 dark:text-[#e2e8f0]' : 'bg-gradient-to-r from-[#fc466b] to-[#fb3fd2]'
//        }
// linear-gradient(90deg, #11998e 0%, #38ef7d 100%)