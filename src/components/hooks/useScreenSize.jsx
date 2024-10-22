'use client'

import { useEffect, useState } from "react"

// hook that returns the current screen size
const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState()

  useEffect(() => {
    const getScreenSize = () => window.innerWidth

    const handleResize = () => {
      setScreenSize(getScreenSize)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return screenSize
}

export default useScreenSize