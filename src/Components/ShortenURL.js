import React, {useRef, useState, useEffect} from "react"
import bg_shorten_desktop from "../images/bg-shorten-desktop.svg"
import bg_shorten_mobile from "../images/bg-shorten-mobile.svg"
import getShortCode from "../services/shrtco"
import URLContainer from "./URLContainer"

function ShortenURL(isMobile) {
  const img = isMobile === true ? bg_shorten_mobile : bg_shorten_desktop
  const urlRef = useRef(null)
  const [urls, setUrls] = useState([])
  const [alert, setAlert] = useState({
    ok: false,
    show: true,
    msg: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const url = urlRef.current.value
    // Check if input is empty
    if(url.trim() === "") {
      setAlert({
        ok: false,
        show: true,
        msg: "Please enter a URL!"
      })
      urlRef.current.focus()
      return
    }
    getShortenedUrl(url)
  }

  const getShortenedUrl = async (url) => {
    try {
      const data = await getShortCode(url)
      if(!data.ok || data.error) {
        setAlert({
          ok: false,
          show: true,
          msg: data.error
        })
        return
      } else {
        const {short_link, original_link, code} = data.result
        setUrls(urls => {
          const newUrl = {
            id: code,
            short: short_link,
            long: original_link
          }
          return [...urls, newUrl]
        })
        setAlert({
          ok: true,
          show: true,
          msg: "Success!"
        })
      }
    }
    catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    // Remove the alert message after 3s
    const alertTimeout = setTimeout(() => {
      setAlert({
        ...alert,
        show: false
      })
    }, 3000)
    return () => {
      clearTimeout(alertTimeout)
    }
  })

    // Clear the input field and the short_url_arr array
    const clear = () => {
      urlRef.current.value = ""
      setUrls([])
      setAlert({
        ok: true,
        show: true,
        msg: "Cleared links"
      })
    }

  return (
    <div className="flex flex-col items-center justify-center lg:w-3/4 h-auto sm:w-full relative -mt-12"> 
        <form 
            className="flex md:flex-row sm:flex-col sm:space-y-2 md:space-y-0 h-auto m-0 m-auto lg:w-full items-center justify-center 
            md:space-x-4 sm:space-x-0 rounded-md
            sm:w-full sm:px-4 sm:py-8 md:py-8"
            style={{background: `url(${img}) no-repeat center hsl(257, 27%, 26%)`}}
            onSubmit={handleSubmit}>

          <input className="bg-white text-gray-800 placeholder:text-gray-400 py-2 lg:px-6 sm:px-2 h-10 lg:w-2/3 sm:w-full md:w-full rounded-md sm:mb-5 md:mb-auto" 
                  placeholder="Shorten a link here..." 
                  name="url"
                  id="url"
                  ref={urlRef}/>

          <button
            type="submit" 
            className="text-white bg-teal-500 h-10 lg:px-6 sm:px-3 py-2 rounded-md hover:bg-teal-300 cursor-pointer sm:w-full md:w-1/2 lg:w-auto">
              Shorten it!
          </button>
          <p className="text-white cursor-pointer" onClick = {clear}>Clear</p>  
        </form>
        {alert.show && <p className={`${alert.ok ? "text-teal-500" : "text-red-500"}`}>{alert.msg}</p>}
        {/* Check if the urls is empty/cleared */}
        {urls.map(url => {
              const {short, long} = url
              console.log(short)
              return <URLContainer short_link={short} long_link={long} key = {url.id}/>
          })}
    </div> 
  )
}

export default ShortenURL