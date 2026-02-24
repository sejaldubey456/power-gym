import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-black text-white border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Top Footer */}
          <div className="grid gap-12 md:grid-cols-4">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-extrabold tracking-wide">
                POWER<span className="text-red-600">GYM</span>
              </h3>
              <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                More than a gym — a lifestyle. We help you build strength,
                confidence, and discipline.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-red-600 cursor-pointer">Home</li>
                <li className="hover:text-red-600 cursor-pointer">About</li>
                <li className="hover:text-red-600 cursor-pointer">Trainers</li>
                <li className="hover:text-red-600 cursor-pointer">Pricing</li>
                <li className="hover:text-red-600 cursor-pointer">Contact</li>
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="font-bold text-lg mb-4">Programs</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-red-600 cursor-pointer">
                  Weight Training
                </li>
                <li className="hover:text-red-600 cursor-pointer">
                  Cardio Fitness
                </li>
                <li className="hover:text-red-600 cursor-pointer">CrossFit</li>
                <li className="hover:text-red-600 cursor-pointer">
                  Yoga & Stretching
                </li>
                <li className="hover:text-red-600 cursor-pointer">
                  Personal Training
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>📍 City Center, India</li>
                <li>📞 +91 98765 43210</li>
                <li>✉️ support@powergym.com</li>
                <li>⏰ Mon–Sat: 5AM – 10PM</li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="my-10 h-px bg-zinc-800"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>© {new Date().getFullYear()} PowerGym. All rights reserved.</p>

            <div className="flex gap-6">
              <span className="hover:text-red-600 cursor-pointer">
                Privacy Policy
              </span>
              <span className="hover:text-red-600 cursor-pointer">
                Terms & Conditions
              </span>
            </div>
          </div>

          {/* <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.2703485051743!2d80.98619837457365!3d26.89491387665783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x607a2740116d6581%3A0x6ecdc03e35e48368!2sSkillManthan%20Technologies%20Pvt%20Ltd%20Lucknow%20%7C%20Best%20Software%20%2F%20Web%20%2FApp%20Development%20%2FDigital%20Marketing%20Company%20in%20Lucknow!5e0!3m2!1sen!2sin!4v1771921703319!5m2!1sen!2sin"
              width="1200"
              height="150"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div> */}
        </div>
      </footer>
    </>
  );
}

export default Footer;
