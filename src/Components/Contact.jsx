import React from 'react'

function Contact() {
  return (
    <>
      <section className="bg-black text-white py-20 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            GET IN <span className="text-red-600">TOUCH</span>
          </h2>
          <p className="mt-4 text-gray-400">
            Have questions? Want to join our gym?  
            Drop your details and we’ll contact you shortly.
          </p>
        </div>

        {/* Content */}
        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">

          {/* Left Info */}
          <div className="space-y-6">
            <div className="border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition">
              <h4 className="font-bold text-lg">📍 Gym Address</h4>
              <p className="mt-2 text-gray-400">
                PowerGym Fitness Center,<br />
                Main Road, City Center, India
              </p>
            </div>

            <div className="border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition">
              <h4 className="font-bold text-lg">📞 Phone</h4>
              <p className="mt-2 text-gray-400">
                +91 98765 43210
              </p>
            </div>

            <div className="border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition">
              <h4 className="font-bold text-lg">⏰ Working Hours</h4>
              <p className="mt-2 text-gray-400">
                Mon – Sat: 5:00 AM – 10:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Right Form */}
          <form className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-red-600"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-red-600"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-red-600"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-red-600"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-full font-bold transition"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
    </>
  )
}

export default Contact
