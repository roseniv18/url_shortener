import React from "react"
import {useState} from "react"

function URLContainer({ short_link, long_link }) {
  const [copied, setCopied] = useState({
    state: true,
    text: "Copy",
    styles: "px-6 py-2 text-white bg-teal-500"
  })
  const copyToClipboard = () => {
    setCopied({
        ...copied,
        state: !copied.state,
        text: copied.state ? "Copied" : "Copy",
        styles: copied.state ? "px-6 py-2 text-white bg-violet-900" : "px-6 py-2 text-white bg-teal-500"
    })
    if(copied.state) {
      return navigator.clipboard.writeText(short_link)
    } else {
      return navigator.clipboard.writeText("")
    }
  }

  return (
    <div className="w-full">
      <div className="flex flex-row md:w-full lg:w-full justify-between items-center bg-white lg:px-12 md:px-16 sm:px-6 py-2 mt-5 gap-5 relative rounded-md">
        <a href={long_link} target="_blank" noreferrer>{long_link}</a>
        <div className="flex flex-row justify-between items-center md:space-x-4 sm:space-x-2">
          <a href={long_link} target="_blank" noreferrer>{short_link}</a>
          <button className = {copied.styles} onClick={copyToClipboard}>{copied.text}</button>
        </div>
      </div>
    </div>
  )
}

export default URLContainer