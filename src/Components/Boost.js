import React from 'react'
import bg_desktop from '../images/bg-boost-desktop.svg'

function Boost() {
  return (
    <section className='w-full bg-violet-900 flex flex-col items-center justify-center py-12'
    style={{background: `url(${bg_desktop}) no-repeat right hsl(257, 27%, 26%)`}}>
        <h2 className='text-white text-3xl text-center font-bold mb-6'>Boost your links today</h2>
        <button className='bg-teal-500 text-lg text-white py-2 px-8 rounded-full hover:bg-teal-300'>Get Started</button>
    </section>
  )
}

export default Boost