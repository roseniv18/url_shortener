import React from 'react'
import illustration_working from '../images/illustration-working.svg'

function Main() {
  return (
    <section className='flex lg:flex-row sm:flex-col-reverse lg:px-32 md:px-16 sm:px-6 pt-2 pb-8 justify-between mb-12'>     
        <div className='flex flex-col lg:space-y-4 mt-12 lg:text-left sm:text-center sm:space-y-6'>
            <h1 className='text-5xl font-bold text-gray-700'>More than just shorter links</h1>
            <span>Build your brand's recognition and get detailed insights on how your links are performing.</span>
            <button className='bg-teal-500 rounded-full py-4 px-6 text-white w-1/3 hover:bg-teal-300 sm:w-1/2'>Get Started</button>
        </div>
        <img src={illustration_working} className='lg:w-2/5 sm:w-full'></img>
    </section>
  ) 
}

export default Main