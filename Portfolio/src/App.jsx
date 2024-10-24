import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/Navbar/NavBar.jsx'
import Body from './components/Navbar/Main/Body.jsx'
import SkillSet from './components/SkillSet.jsx'
import Academic from './components/Academic.jsx'
import { ThemeProvider } from './Context/theme.js'
import Certification from './components/Certification.jsx'
import Hobby from './components/Hobby.jsx'
import Footer from './components/Footer.jsx'
import { Self_Developed_App } from './components/Self_Developed_App.jsx'
import { WorkExperience } from './components/WorkExperience.jsx'
import LaerningJourney from './components/LearningJourney.jsx'
function App() {
  const [themeMode,setThemeMode]=useState("light");
  const [isSelected,setSelected]=useState(false);
  const lightTheme=()=>{
      setThemeMode("light")
  }
  const darkTheme=()=>{
      setThemeMode("dark");
  }

  useEffect(()=>{
      document.querySelector('html').classList.remove('light','dark')
      document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        document.title = "Come back soon!";
      } else {
        document.title = "Welcome to My Website!";
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <>
      <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
       <div className='dark:bg-slate-800'>
       <NavBar/>
        <Body/>
        <WorkExperience/>
        <Self_Developed_App/>
        <SkillSet/>
        <LaerningJourney/>
        <Academic/>
        <Certification/>
        <Hobby/>
        <Footer/>
       </div>
    </ThemeProvider>
    </>
  )
}

export default App
