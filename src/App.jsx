import React, { useEffect, useState } from 'react'

import { Route, Routes } from 'react-router'
import Home from './Pages/Home '
import Loader from './Components/Loader';
import Errorpage from './Pages/Errorpage';


 function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Errorpage />} />
    </Routes>
    
  )
}
  
export default App



