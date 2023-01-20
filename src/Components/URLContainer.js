import React from "react"
import {useState} from "react"

function URLContainer({ short_link, long_link }) {
  const [copied, setCopied] = useState({
    state: true,
    text: "Copy",
    styles: "bg-teal-500"
  })
  const copyToClipboard = () => {
    setCopied({
        ...copied,
        state: !copied.state,
        text: copied.state ? "Copied" : "Copy",
        styles: copied.state ? "bg-violet-900" : "bg-teal-500"
    })
    if(copied.state) {
      return navigator.clipboard.writeText(short_link)
    } else {
      return navigator.clipboard.writeText("")
    }
  }

  return (
    <div className="w-full">
      <div className="flex md:flex-row sm:flex-col md:w-full lg:w-full justify-between md:items-center bg-white lg:px-12 md:px-16 sm:px-6 py-2 mt-5 gap-5 relative rounded-md">
        <a href={long_link} target="_blank" rel="noreferrer">{long_link}</a>
        <div className="flex md:flex-row md:items-center sm:flex-col md:space-x-4 sm:space-y-2 sm:my-2">
          <a href={long_link} target="_blank" rel="noreferrer" className="text-teal-500">{short_link}</a>
          <button className = {`rounded-md px-6 py-2 text-white ${copied.styles}`} onClick={copyToClipboard}>{copied.text}</button>
        </div>
      </div>
    </div>
  )
}

export default URLContainer