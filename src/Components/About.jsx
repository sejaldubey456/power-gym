import React from 'react'

function About() {
     const images = [
    "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&cs=tinysrgb&w=800",
  ];
     const features = [
    {
      title: "Modern Equipment",
      desc: "World-class machines and tools designed for strength, endurance, and safety.",
    },
    {
      title: "Certified Trainers",
      desc: "Experienced professionals who guide, motivate, and push you to your limits.",
    },
    {
      title: "Personalized Programs",
      desc: "Workout plans customized for your body type, goals, and fitness level.",
    },
    {
      title: "Motivating Environment",
      desc: "High-energy atmosphere that keeps you focused, disciplined, and hungry to grow.",
    },
  ];

  return (
    <div>
        
       <section className="bg-gradient-to-b from-black via-zinc-900 to-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Image Side */}
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-full h-full  rounded-xl"></div>
          <img
          src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80"
  alt="Gym Training"
  className="relative rounded-2xl w-full h-[420px] object-cover  border-2 border-red-600"
          />
          <div className="absolute bottom-6 right-6 bg-red-600 px-6 py-4 rounded-xl shadow-lg">
            <p className="text-2xl font-extrabold">10+</p>
            <p className="text-sm font-semibold">Years Experience</p>
          </div>
        </div>

        {/* Content Side */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            MORE THAN A <span className="text-red-600">GYM</span><br />
            IT’S A <span className="text-red-600">LIFESTYLE</span>
          </h2>

          <p className="mt-6 text-gray-300 leading-relaxed">
            We don’t just train bodies — we build confidence, discipline,
            and unstoppable mindset. Our gym is designed for those who
            refuse to stay average.
          </p>

          <p className="mt-4 text-gray-400">
            From beginners to professional athletes, our expert trainers,
            modern equipment, and motivating environment help you achieve
            real results — faster and safer.
          </p>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 gap-6 text-center">
            <div className="border border-zinc-700 rounded-xl py-4 hover:border-red-600 transition">
              <p className="text-3xl font-extrabold text-red-600">5K+</p>
              <p className="text-sm text-gray-400">Members</p>
            </div>
            <div className="border border-zinc-700 rounded-xl py-4 hover:border-red-600 transition">
              <p className="text-3xl font-extrabold text-red-600">20+</p>
              <p className="text-sm text-gray-400">Trainers</p>
            </div>
            <div className="border border-zinc-700 rounded-xl py-4 hover:border-red-600 transition">
              <p className="text-3xl font-extrabold text-red-600">30+</p>
              <p className="text-sm text-gray-400">Programs</p>
            </div>
          </div>

          {/* Button */}
          <button className="mt-10 bg-red-600 hover:bg-red-700 px-8 py-3 rounded-full font-bold transition">
            Know More
          </button>
        </div>
      </div>
    </section>
 <div className="bg-black text-white py-20 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl">
          <h3 className="text-3xl md:text-4xl font-extrabold">
            WHY CHOOSE <span className="text-red-600 ml0">POWERGYM</span>
          </h3>
          <p className="mt-4 text-gray-400">
            We believe fitness is not a hobby — it’s a commitment.
            Our gym is built for those who are serious about real transformation.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="group border border-zinc-800 rounded-2xl p-6 hover:border-red-600 transition"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-600 text-black font-extrabold text-xl mb-4">
                {index + 1}
              </div>

              <h4 className="text-xl font-bold mb-2">
                {item.title}
              </h4>

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>

              <div className="mt-4 h-[2px] w-0 bg-red-600 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <h4 className="text-2xl font-bold">
            Ready to <span className="text-red-600">Transform</span> Yourself?
          </h4>
          <p className="mt-3 text-gray-400">
            Stop waiting for motivation. Start building discipline today.
          </p>
          <button className="mt-6 bg-red-600 hover:bg-red-700 px-10 py-3 rounded-full font-bold transition">
            Start Your Journey
          </button>
        </div>

      </div>
    
    </div>
   </div>
  )
}

export default About
