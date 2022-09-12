import React from 'react'
import { useState } from 'react'
import { Divide as Hamburger } from 'hamburger-react'
import '../App.css'
import MobileNav from './MobileNav'

function Navbar(isMobile) {

  const [isOpen, setOpen] = useState(false)



  return (
        <nav className='flex flex-row items-center justify-between space-x-12 lg:px-32 md:px-16 sm:px-6 pt-8'>
          <span className='gray-800 text-3xl font-bold cursor-pointer'>Shortly</span>

        
          {isMobile ? 
                isOpen ? 
                <MobileNav /> : '' 
          : ''
}

    <div className='flex flex-row items-center justify-between space-x-12 sm:hidden lg:block w-full'> 
            

            <div className='flex lg:flex-row lg:space-x-8 lg:relative lg:top-0 lg:w-full lg:bg-transparent items-center lg:justify-between lg:py-0'>

              <div className='flex lg:flex-row lg:space-x-8 text-md lg:text-gray-500 font-bold items-center lg:space-y-0'>
                <span className='cursor-pointer hover:text-gray-800'>Features</span>
                <span className='cursor-pointer hover:text-gray-800'>Pricing</span>
                <span className='cursor-pointer hover:text-gray-800'>Resources</span>
              </div>
              
              <div className='lg:space-x-8 text-md lg:flex-row lg:space-y-0'> 
                <span className='lg:text-gray-500 font-bold cursor-pointer hover:text-gray-800'>Login</span>
                <button className='rounded-full bg-teal-500 text-white py-2 px-6 cursor-pointer hover:bg-teal-300'>Sign Up</button>
              </div>
      
            </div>
            </div>

        <Hamburger toggled={isOpen} toggle={setOpen}/>
        </nav>
  )
}

export default Navbar