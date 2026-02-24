import React from 'react'

function Loader() {
 return (
     
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-zinc-700 border-t-red-600 rounded-full animate-spin mx-auto"></div>
        <p className="mt-4 text-white tracking-widest text-sm">
          LOADING <span className="text-red-600 font-bold">POWER GYM</span>
        </p>
      </div>
    </div>
  )
}

export default Loader
