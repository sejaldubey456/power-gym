import React from 'react'
const programs = [
  {
    title: "Strength Training",
    desc: "Build muscle, increase power, and boost endurance with expert guidance.",
    icon: "💪",
  },
  {
    title: "Cardio Fitness",
    desc: "Burn calories, improve stamina, and keep your heart healthy.",
    icon: "🔥",
  },
  {
    title: "Weight Loss",
    desc: "Effective fat-burning workouts designed for real results.",
    icon: "⚡",
  },
  {
    title: "Personal Training",
    desc: "One-on-one coaching tailored to your fitness goals.",
    icon: "🏋️",
  },
  {
    title: "Cross Training",
    desc: "High-intensity workouts for full-body transformation.",
    icon: "🚀",
  },
  {
    title: "Bodybuilding",
    desc: "Professional-level training for serious muscle growth.",
    icon: "🏆",
  },
];
function Program() {
  return (
    <>
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            OUR <span className="text-red-600">PROGRAMS</span>
          </h2>
          <p className="mt-2 text-gray-400">
            Train smarter with programs built for real results
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((item, index) => (
            <div
              key={index}
              className="group bg-zinc-900 border border-zinc-800 rounded-2xl p-8
                         hover:border-red-600 hover:-translate-y-2
                         transition-all duration-300"
            >
              <div className="text-5xl mb-4">{item.icon}</div>

              <h3 className="text-xl font-bold text-white group-hover:text-red-600">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>  
    </>
  )
}

export default Program
