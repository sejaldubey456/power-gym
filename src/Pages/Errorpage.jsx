import React from 'react'
import { Link } from 'react-router'

function Errorpage() {
  return (

       <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-4">
    
      {/* Error Code */}
      <h1 className="text-7xl font-extrabold text-red-600">404</h1>

      {/* Heading */}
      <h2 className="mt-3 text-3xl font-bold text-white">
        Oops! Page Not Found
      </h2>

      {/* Description */}
      <p className="mt-3 text-gray-400 max-w-md">
        Lagta hai ye page workout skip kar gaya 😄  
        Koi baat nahi, chalo wapas training par 💪
      </p>
      <Link
       to="/"
        className="mt-6 bg-red-600 text-white px-6 py-3 rounded-full"
      >
        Back to Home
      </Link>
    </div>
  )
}

export default Errorpage
