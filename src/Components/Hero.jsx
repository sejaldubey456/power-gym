import React, { useState } from 'react'

function Hero() {
     const images = [
    "https://images.unsplash.com/photo-1571019613576-2b22c76fd955",
    "https://images.unsplash.com/photo-1558611848-73f7eb4001a1",
    "https://images.unsplash.com/photo-1599058917212-d750089bc07e",
  ];
 
  
     

  const [activeImg, setActiveImg] = useState(images[0]);
 return (
  
    <section className="bg-black text-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            BUILD YOUR <span className="text-red-600">BODY</span><br />
            TRANSFORM YOUR <span className="text-red-600">LIFE</span>
          </h1>

          <p className="mt-6 text-gray-300 max-w-lg">
            Train harder, get stronger, and become the best version of yourself.
            Join our professional gym with expert trainers.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full font-bold transition">
              Join Now
            </button>
            <button className="border border-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-black transition">
              View Plans
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex flex-col items-center gap-6">

          {/* Main Image */}
          <div className="w-full rounded-2xl overflow-hidden border-2 border-red-600">
            <img
              src={activeImg}
              alt="Gym"
              className="w-full h-full object-cover transition duration-500"
            />
          </div>

          {/* Thumbnail Images */}
          <div className="flex gap-4">
            {images.map((img, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveImg(img)}
                className={`w-24 h-20 rounded-xl overflow-hidden cursor-pointer border-2 transition
                  ${activeImg === img ? "border-red-600 scale-105" : "border-gray-700"}
                `}
              >
                <img
                  src={img}
                  alt="Thumbnail"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
   
  )
}

export default Hero
