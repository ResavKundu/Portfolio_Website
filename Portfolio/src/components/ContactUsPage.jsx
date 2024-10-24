import React from 'react'
import { IoClose } from "react-icons/io5";
const ContactUsPage = ({
    onClose
}) => {
    const handleChange=()=>{

    }
  return (
    <div className='fixed w-full h-full top-0 bg-slate-300 bg-opacity-50 left-0 right-0 bottom-0 flex justify-center items-center'>
    <div className='bg-white p-4 rounded w-full max-w-2xl h-full max-h-[70%] overflow-hidden'>
       <div className='flex justify-between pb-3'>
          <h2 className='p-2 font-bold'>Contact Us</h2>
          <div className=' cursor-pointer' onClick={onClose}>
                <IoClose className='hover:bg-slate-300 rounded-full text-lg' />
            </div>
        </div>
        <form className='pb-5 p-2 gap-2 flex flex-col font-semibold overflow-y-scroll h-full '>
            <div>
            <label htmlFor='FirstName' className='text-xl font-sans font-light'>First name :  </label>
            <input type='text'
                id='FirstName'
                placeholder='Enter First Name....'
                onChange={handleChange}
                className='bg-slate-100 p-1 rounded-sm outline-none'
            />
            <label htmlFor='Lastname' className='text-xl font-sans font-light'>Last name :  </label>
            <input type='text'
                id='Lastname'
                placeholder='Enter Last Name....'
                onChange={handleChange}
                className='bg-slate-100 p-1 rounded-sm outline-none'
            />
            </div>
            <label htmlFor='contactNumber' className='text-xl font-sans font-light mt-4'>Contact Number :  </label>
            <input type='text'
                id='contactNumber'
                placeholder='Enter Last Name....'
                onChange={handleChange}
                className='bg-slate-100 p-1 rounded-sm outline-none'
            />
            <label htmlFor='email' className='text-xl font-sans font-light mt-4'>Email id :  </label>
            <input type='email'
                id='email'
                placeholder='Enter Last Name....'
                onChange={handleChange}
                className='bg-slate-100 p-1 rounded-sm outline-none'
            />
            <label htmlFor="description" className='text-xl font-sans font-light mt-4'>Description:</label>
            <textarea 
                     id="description" 
                     name='description' 
                    //  value={data.description}
                     onChange={handleChange} 
                     className='h-28 bg-slate-100 border outline-none p-2 ' 
                     placeholder='Enter product placeholder...'>

            </textarea>
            <label htmlFor="description" className='text-xl font-sans font-light mt-4'>Provide Some Feedback :</label>
            <textarea 
                     id="description" 
                     name='description' 
                    //  value={data.description}
                     onChange={handleChange} 
                     className='h-28 bg-slate-100 border outline-none p-2 ' 
                     placeholder='Enter product placeholder...'>

            </textarea>
            <button className="text-white  bg-cyan-950 rounded-md p-2 mb-9  mt-8 hover:bg-cyan-600  transition-all duration-300 ease-in-out">Submit</button>
        </form>
    </div>
    </div>    
  )
}

export default ContactUsPage