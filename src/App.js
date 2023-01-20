import React, { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
import Main from'./Components/Main'
import AdvancedStatistics from './Components/AdvancedStatistics'
import Boost from './Components/Boost'
import Footer from './Components/Footer'

function App() {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  function handleWindowSizeChange() {
      setScreenWidth(window.innerWidth)
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange)
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange)
      }
  }, [])

  const isMobile = screenWidth <= 768

  return (
    <div>
      <Navbar isMobile={isMobile}/>
      <Main />
      <AdvancedStatistics />
      <Boost />
      <Footer />
    </div>
  )
}

export default App
