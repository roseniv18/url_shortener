import React from 'react'
import UilFacebook from '@iconscout/react-unicons/icons/uil-facebook'
import UilTwitter from '@iconscout/react-unicons/icons/uil-twitter'
import UilInstagram from '@iconscout/react-unicons/icons/uil-instagram'

export default function Footer() {
  return (
    <div className='flex lg:flex-row sm:flex-col justify-between bg-neutral-800 text-white lg:px-32 md:px-16 sm:px-6 py-20 w-full'>
        <span className='text-3xl font-bold sm:text-center lg:text-left cursor-default'>Shortly</span>
        <div className='flex lg:flex-row sm:flex-col sm:items-center lg:items-baseline sm:space-y-8 lg:space-x-28 
            lg:space-y-0 w-full justify-end sm:pr-0 sm:pt-10 lg:pt-0 lg:pr-20'>
                
            <ul className='space-y-2 text-center'>
                <p className='font-bold mb-4'>Features</p>
                <li className='text-gray-300 cursor-pointer hover:text-teal-500'>Link Shortening</li>
                <li className='text-gray-300 cursor-pointer hover:text-teal-500'>Branded Links</li>
                <li className='text-gray-300 cursor-pointer hover:text-teal-500'>Analytics</li>
            </ul>

            <ul className='space-y-2 text-center'>
                <p className='font-bold mb-4'>Resources</p>
                <li className='text-gray-300 cursor-pointer hover:text-teal-500'>Blog</li>
                <li className='text-gray-300 cursor-pointer hover:text-teal-500'>Developers</li>
                <li className='text-gray-300 cursor-pointer hover:text-teal-500'>Support</li>
            </ul>

            <ul className='space-y-2 text-center'>
                <p className='font-bold mb-4'>Company</p>
                <li className='text-gray-300 cursor-pointer hover:text-teal-500'>About</li>
                <li className='text-gray-300 cursor-pointer hover:text-teal-500'>Our Team</li>
                <li className='text-gray-300 cursor-pointer hover:text-teal-500'>Careers</li>
                <li className='text-gray-300 cursor-pointer hover:text-teal-500'>Contact</li>
            </ul>
        </div>

        <div className='sm:flex sm:flex-row sm:items-center sm:justify-center lg:items-baseline'>
            <div className='flex flex-row space-x-8 cursor-pointer lg:ml-20 sm:ml-0 mt-10'>
            <UilFacebook className='hover:text-teal-500'/>
            <UilTwitter className='hover:text-teal-500'/>
            <UilInstagram className='hover:text-teal-500'/>
        </div>
        </div>
    </div>
  )}
