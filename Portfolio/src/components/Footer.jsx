import React, { useState } from 'react'
import ContactUsPage from './ContactUsPage';

const Footer = () => {
  const [contactUsBtn,setContactUsBtn]=useState(false);
  const handleContactUs=()=>{
   setContactUsBtn(true)
  }
  return (
    <>
        <div>
            <div className='h-0.5 w-full bg-[#66a6ff]'></div>
            <div className='text-white pb-8 p-2 px-4 md:pb-6 bg-cyan-950'>
              <div className='flex justify-between cursor-pointer'>
                <div>@ 2024 Resav Kundu. All rights reserverd.</div>
                <div className='cursor-pointer'
                  onClick={handleContactUs}
                >Contact Us</div>
              </div>
            </div>
        </div>
        {
          contactUsBtn ? 
          (
            <ContactUsPage
              onClose={()=>setContactUsBtn(false)}
            />
          ) :
          (
            <div></div>
          )
        }
    </>
  )
}

export default Footer