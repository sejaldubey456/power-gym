import React from 'react'

function Gallery() {
     const images = [
    "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=800",
    "src/Components/pexels-jonathanborba-3076514.jpg",
  ];
  return (
    <div className='bg-black'>
       <h2 className="text-6xl text-red-600 font-bold mb-0 leading-tight flex justify-center">
  Our Gallary
</h2>

<p className="text-white mt-1 flex justify-center">
  Built with Sweat, Power & Passion
</p>
        <div className="grid grid-cols-2 gap-4 mt-8">
      {images.map((img, i) => (
        <div
          key={i}
          className="relative h-[160px] rounded-xl overflow-hidden group mb-10"
        >
          <img
            src={img}
            alt="Gym Gallery"
            className="w-full h-full object-cover group-hover:scale-110 transition duration-500 "
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
            <span className="font-bold">POWER GYM</span>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Gallery
