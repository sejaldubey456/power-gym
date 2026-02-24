import React from 'react'

function Navbar() {
  return (
    
    <>
     <nav className="bg-black text-white px-6 py-4 fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center font-bold text-xl">
              G
            </div>
            <span className="text-xl font-extrabold tracking-wide">
              POWER<span className="text-red-600">GYM</span>
            </span>
          </div>

          {/* Links */}
          <ul className="hidden md:flex items-center gap-8 font-semibold">
            <li><a href="#home" className="hover:text-red-500">Home</a></li>
            <li><a href="#about" className="hover:text-red-500">About</a></li>
            <li><a href="#gallery" className="hover:text-red-500">Gallery</a></li>
            <li><a href="#program" className="hover:text-red-500">Program</a></li>
            <li><a href="#trainers" className="hover:text-red-500">Trainers</a></li>
            <li><a href="#pricing" className="hover:text-red-500">Pricing</a></li>
            <li><a href="#contact" className="hover:text-red-500">Contact</a></li>
          </ul>

          {/* Buttons */}
          <div className="hidden md:block">
            <button className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-full font-bold transition">
              Contact us
            </button>
            <button className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-full font-bold transition ml-5">
              WhatsApp
            </button>
          </div>

          {/* Mobile */}
          <div className="md:hidden text-2xl cursor-pointer">☰</div>
        </div>
      </nav>
      
    </>
  )
}

export default Navbar
