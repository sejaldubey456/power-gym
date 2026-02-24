import { useState } from "react";

function BmiCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = () => {
    if (!weight || !height) {
      alert("Please enter weight and height");
      return;
    }

    const heightInMeter = height / 100;
    const bmiValue = (weight / (heightInMeter * heightInMeter)).toFixed(1);

    setBmi(bmiValue);

    if (bmiValue < 18.5) setStatus("Underweight 🥗");
    else if (bmiValue < 24.9) setStatus("Normal 💪");
    else if (bmiValue < 29.9) setStatus("Overweight ⚠️");
    else setStatus("Obese 🔥");
  };

  return (
    
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
 
          <h2 className="text-4xl font-extrabold mb-4">
            BMI <span className="text-red-600">Calculator</span>
          </h2>
          <p className="text-gray-400 mb-6">
            Check your Body Mass Index and know your fitness level.
            Track your progress and stay strong 💪
          </p>

          <div className="space-y-4">
            <input
              type="number"
              placeholder="Weight (kg)"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full p-3 rounded bg-zinc-900 border border-zinc-700 focus:outline-none"
            />

            <input
              type="number"
              placeholder="Height (cm)"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full p-3 rounded bg-zinc-900 border border-zinc-700 focus:outline-none"
            />

            <button
              onClick={calculateBMI}
              className="w-full bg-red-600 py-3 rounded font-semibold hover:bg-red-700 transition"
            >
              Calculate BMI
            </button>
          </div>

          {bmi && (
            <div className="mt-6 bg-zinc-900 p-4 rounded border border-zinc-700">
              <p className="text-xl font-bold">
                Your BMI: <span className="text-red-600">{bmi}</span>
              </p>
              <p className="text-gray-400 mt-1">{status}</p>
            </div>
          )}
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
         <img
  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
  alt="Fitness BMI"
  className="  relative rounded-2xl w-full h-[300px] object-cover  border-2 border-red-600"
/>
        </div>
      </div>
    </section>
  );
}

export default BmiCalculator;