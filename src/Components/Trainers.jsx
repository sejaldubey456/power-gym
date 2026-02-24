import React from 'react'

const trainers = [
  {
    name: "Rahul Verma",
    role: "Strength Coach",
    img: "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=800",
    exp: "8+ Years Experience",
  },
  {
    name: "Amit Sharma",
    role: "Personal Trainer",
    img: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800",
    exp: "6+ Years Experience",
  },
  {
    name: "Neha Singh",
    role: "Fitness & Cardio Coach",
    img: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=600&q=80",
    exp: "5+ Years Experience",
  },
];
function Trainers() {
  return (
    <>
      <section className="bg-black text-white py-20 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            MEET OUR <span className="text-red-600">TRAINERS</span>
          </h2>
          <p className="mt-4 text-gray-400">
            Certified professionals dedicated to pushing your limits and
            transforming your body.
          </p>
        </div>

        {/* Trainer Cards */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden border border-zinc-800 hover:border-red-600 transition"
            >
              {/* Image */}
              <div className="h-[380px] overflow-hidden">
                <img
                  src={trainer.img}
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold">{trainer.name}</h3>
                  <p className="text-red-600 font-semibold">{trainer.role}</p>
                  <p className="mt-2 text-sm text-gray-300">
                    {trainer.exp}
                  </p>
                </div>
              </div>

              {/* Bottom Label */}
              <div className="absolute bottom-0 left-0 w-full bg-black/80 px-6 py-4 group-hover:opacity-0 transition">
                <h3 className="font-bold">{trainer.name}</h3>
                <p className="text-sm text-gray-400">{trainer.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    </>
  )
}

export default Trainers
