import React from "react";

const blogs = [
  {
    id: 1,
    title: "Best Workout Routine for Beginners",
    desc: "Start your fitness journey with simple and effective workouts designed for beginners.",
    img: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1",
    date: "Jan 12, 2026",
  },
  {
    id: 2,
    title: "How Nutrition Impacts Your Muscle Growth",
    desc: "Learn how the right diet plays a key role in muscle building and recovery.",
    img: "https://images.unsplash.com/photo-1546483875-ad9014c88eba",
    date: "Jan 20, 2026",
  },
  {
    id: 3,
    title: "Cardio vs Strength Training",
    desc: "Confused between cardio and weights? Here’s how to balance both for best results.",
    img: "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "Feb 02, 2026",
  },
];

function BlogSection() {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold">
            Our <span className="text-red-600">Fitness Blogs</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Stay updated with fitness tips, workout guides, and nutrition advice
            written by our expert trainers 💪
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-red-600 transition"
            >
              <img
                src={blog.img}
                alt={blog.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-6">
                <p className="text-sm text-gray-500">{blog.date}</p>

                <h3 className="mt-2 text-xl font-bold">
                  {blog.title}
                </h3>

                <p className="mt-3 text-gray-400 text-sm">
                  {blog.desc}
                </p>

                <button className="mt-5 text-red-600 font-semibold hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default BlogSection;