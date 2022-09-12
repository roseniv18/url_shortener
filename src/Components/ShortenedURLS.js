import React from 'react'
import {useState} from 'react'

function ShortenedURLS({ short_url }) {

  const [copied, setCopied] = useState({
    state: true,
    text: 'Copy',
    styles: 'px-6 py-2 text-white bg-teal-500'
  })

  const copyToClipboard = () => {
    setCopied(copied => (
      {
        ...copied,
        state: !copied.state,
        text: copied.state ? 'Copied' : 'Copy',
        styles: copied.state ? 'px-6 py-2 text-white bg-violet-900' : 'px-6 py-2 text-white bg-teal-500'
      }
    ))

    if(copied.state) {
      return navigator.clipboard.writeText(short_url.short)
    } else {
      return navigator.clipboard.writeText('')
    }
    
  }

  return (
    <div className='w-full'>
       { short_url.short !== undefined && short_url.long !== undefined
     ?
     <div className='flex flex-row md:w-full lg:w-full justify-between items-center bg-white lg:px-24 md:px-16 sm:px-6 py-2 mt-5 gap-5 relative rounded-md'>
      <p>{short_url.long}</p>

      <div className='flex flex-row justify-between items-center md:space-x-4 sm:space-x-2'>
        <p>{short_url.short}</p>
        <button className = {copied.styles} onClick={copyToClipboard}>{copied.text}</button>
      </div>
    </div>
    :
    ''
    }
    </div>
 
    
  )
}

export default ShortenedURLS