import React from 'react'
const plans = [
  {
    name: "Basic",
    price: "₹999",
    duration: "/month",
    desc: "Perfect for beginners starting their fitness journey",
    features: [
      "Gym Access",
      "Cardio Area",
      "Locker Facility",
      "Basic Support",
    ],
  },
  {
    name: "Standard",
    price: "₹1999",
    duration: "/month",
    popular: true,
    desc: "Most popular plan for serious fitness lovers",
    features: [
      "Full Gym Access",
      "Personal Trainer (2 Days)",
      "Diet Guidance",
      "Steam / Shower",
    ],
  },
  {
    name: "Premium",
    price: "₹2999",
    duration: "/month",
    desc: "For athletes & body transformation",
    features: [
      "Unlimited Gym Access",
      "Daily Personal Training",
      "Custom Diet Plan",
      "All Facilities Access",
    ],
  },
];
function Pricing() {
  return (
    <>
       <section className="bg-black text-white py-20 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            MEMBERSHIP <span className="text-red-600">PLANS</span>
          </h2>
          <p className="mt-4 text-gray-400">
            Choose a plan that fits your goals and start your transformation today.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border p-8 transition hover:-translate-y-2
                ${
                  plan.popular
                    ? "border-red-600 bg-zinc-900 scale-105"
                    : "border-zinc-800"
                }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 px-4 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                </span>
              )}

              <h3 className="text-2xl font-bold text-center">{plan.name}</h3>
              <p className="mt-2 text-center text-gray-400">{plan.desc}</p>

              <div className="mt-6 text-center">
                <span className="text-4xl font-extrabold text-red-600">
                  {plan.price}
                </span>
                <span className="text-gray-400">{plan.duration}</span>
              </div>

              <ul className="mt-8 space-y-3 text-gray-300">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-red-600">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`mt-10 w-full py-3 rounded-full font-bold transition
                  ${
                    plan.popular
                      ? "bg-red-600 hover:bg-red-700"
                      : "border border-red-600 hover:bg-red-600"
                  }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
    </>
  )
}

export default Pricing
