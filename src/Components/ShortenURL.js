import {React, useEffect, useState} from 'react'
import bg_shorten_desktop from '../images/bg-shorten-desktop.svg'
import bg_shorten_mobile from '../images/bg-shorten-mobile.svg'
import getShortCode from '../services/shrtco'
import ShortenedURLS from './ShortenedURLS'
import { nanoid } from 'nanoid'

function ShortenURL(isMobile) {

    const img = isMobile === true ? bg_shorten_mobile : bg_shorten_desktop

    const [url, setUrl] = useState('')
    const [short_url_arr, setShortUrlArr] = useState([])

    const handleChange = (event) => {
      setUrl(event.target.value)
    }

    const getShortenedUrl = async (url) => {
      if(url !== '') {

        await getShortCode(url).then(data => {
          setShortUrlArr(arr => { 
            
            return [
              ...arr, 
                {
                  short: data, 
                  long: url
                }
          ]

          })
        })

      } else {
        alert('No URL entered')
      }
    }

  return (
    <div className='flex flex-col items-center justify-center lg:w-3/4 h-auto sm:w-full relative -mt-12'
    > 
        <div 
            className='flex md:flex-row sm:flex-col sm:space-y-2 md:space-y-0 h-auto m-0 m-auto lg:w-full items-center justify-center 
            md:space-x-4 sm:space-x-0 rounded-md
            sm:w-full sm:px-4 sm:py-8 md:py-8'
            style={{background: `url(${img}) no-repeat center hsl(257, 27%, 26%)`}}
        >

        <input className='bg-white text-gray-800 placeholder:text-gray-400 py-2 lg:px-6 sm:px-2 h-10 lg:w-2/3 sm:w-full md:w-full rounded-md sm:mb-5 md:mb-auto' 
                placeholder='Shorten a link here...' 
                name="url"
                id="url"
                onChange={handleChange}/>

        <button className='text-white bg-teal-500 h-10 lg:px-6 sm:px-3 py-2 rounded-md hover:bg-teal-300 cursor-pointer sm:w-full md:w-1/2 lg:w-auto' 
                onClick = {() => getShortenedUrl(url)}>Shorten it!</button>
        </div>

        
        {short_url_arr.map(s => {
            return <ShortenedURLS short_url = {s} key = {nanoid()}/>
        })}

    </div>
    
  )
}

export default ShortenURL