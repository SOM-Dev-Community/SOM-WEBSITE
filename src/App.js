import React from "react";

const LandingPage = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gray-100">
        <img
          src="/path/to/hero-image.jpg"
          alt="Library"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start p-10 text-white bg-black/50">
          <h1 className="text-4xl font-bold mb-2">Discover Your Path with SOM Today!</h1>
          <p className="max-w-md mb-4">
            Join us in exploring a world of inspiration and growth. Our community
            is dedicated to empowering individuals through faith-based resources.
          </p>
          <div className="space-x-4">
            <button className="bg-purple-600 px-4 py-2 rounded">Join</button>
            <button className="border border-white px-4 py-2 rounded">Learn</button>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="bg-[#cfdaf0] p-10">
        <h2 className="text-2xl font-bold mb-2">Discover Our Latest Insights and Stories</h2>
        <p className="mb-4">Stay updated with our featured blog post that dives deep into the heart of our mission.</p>
        <button className="bg-purple-600 text-white px-4 py-2 rounded">Read</button>
      </section>

      {/* Upcoming Events */}
      <section className="bg-black text-white p-10">
        <h2 className="text-2xl font-bold mb-4">Upcoming</h2>
        <p className="mb-6">Join us for our exciting upcoming events designed to inspire and engage our community.</p>
        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Leadership Summit</h3>
              <p>Fri 9 Feb 2024 - Online</p>
            </div>
            <button className="bg-purple-600 px-3 py-1 rounded">Save my spot</button>
          </div>
          <div className="bg-gray-800 p-4 rounded flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Family Retreat</h3>
              <p>Sat 11 Feb 2024 - Local</p>
            </div>
            <button className="bg-purple-600 px-3 py-1 rounded">Save my spot</button>
          </div>
          <div className="bg-gray-800 p-4 rounded flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Youth Conference</h3>
              <p>Sun 11 Feb 2024 - Virtual</p>
            </div>
            <button className="bg-purple-600 px-3 py-1 rounded">Save my spot</button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="p-10 bg-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Explore Our Exciting Range of SOM Products Tailored for You</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border p-4 rounded shadow">
            <img src="/path/to/resource.jpg" alt="" className="mb-2 rounded"/>
            <h3 className="font-semibold">Best Resources for Your Spiritual Journey</h3>
            <p className="text-sm mb-2">Our products are designed to inspire and empower your ministry.</p>
            <a href="#" className="text-purple-600">Learn More →</a>
          </div>
          <div className="border p-4 rounded shadow">
            <img src="/path/to/somla.jpg" alt="" className="mb-2 rounded"/>
            <h3 className="font-semibold">SOMLA: Your Gateway to Spiritual Growth and Learning</h3>
            <p className="text-sm mb-2">Access a wealth of resources and teachings at your fingertips.</p>
            <a href="#" className="text-purple-600">Explore →</a>
          </div>
          <div className="border p-4 rounded shadow">
            <img src="/path/to/tv.jpg" alt="" className="mb-2 rounded"/>
            <h3 className="font-semibold">SOM TV: Inspiring Content for Your Spiritual Journey</h3>
            <p className="text-sm mb-2">Watch uplifting programs and sermons anytime, anywhere.</p>
            <a href="#" className="text-purple-600">Watch →</a>
          </div>
        </div>
      </section>

      {/* Mailing List */}
      <section className="bg-gray-100 p-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Join Our Mailing List</h2>
        <p className="mb-4">Be the first to know about our services, special programs, and ways to grow in faith together.</p>
        <div className="flex justify-center space-x-2">
          <input
            type="email"
            placeholder="Your email"
            className="border border-gray-400 rounded px-4 py-2 w-64"
          />
          <button className="bg-purple-600 text-white px-4 py-2 rounded">Submit</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white p-6 text-sm">
        <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
          <div>
            <p>ABOUT US</p>
            <p>The place where you discover your purpose, passion, and power to live out His destiny.</p>
          </div>
          <div>
            <p>QUICKLINKS</p>
            <ul>
              <li>Blog</li>
              <li>Explore</li>
              <li>Contact Us</li>
              <li>Live Events</li>
              <li>Preachers Kids Network</li>
            </ul>
          </div>
          <div>
            <p>CONTACT US</p>
            <p>+234 000 000 000</p>
            <p>hello@somewhereministry.org</p>
          </div>
        </div>
        <p className="mt-4 text-center text-gray-400">© 2025 somewhereministry. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
