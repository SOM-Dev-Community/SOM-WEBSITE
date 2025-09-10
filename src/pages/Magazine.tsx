import React from "react";
import { Header } from "../components/Header";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";

const Magazine = () => {
  return (
    <div className="min-h-screen bg-[#4B2AAD] flex flex-col overflow-x-hidden">
      {/* Header */}
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="max-w-5xl mx-auto px-4 py-12">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-white text-3xl font-bold"></span>
            <h1 className="text-white text-4xl font-extrabold mt-12">SOM Magazine</h1>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://i.postimg.cc/SxfMffzs/B2.jpg"
              alt="SOM Magazine Cover"
              className="w-[1400px] h-[350px] object-cover"
            />
          </div>
        </section>

        {/* Magazine Issues Section */}
        <section className="max-w-7xl mx-auto px-4 py-16 bg-white rounded-3xl shadow-lg mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Issue 2022 */}
            <div>
              <p className="text-gray-700 text-sm mb-2">16. March 2022</p>
              <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
                <img
                  src="https://i.postimg.cc/dQ8C5WGm/MAG1.jpg"
                  alt="SOM Magazine 2022"
                  className="w-full h-fulll object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold mb-2">SOM Magazine 2022</h2>
              <p className="text-gray-700 mb-4 text-base">
                LOCATE YOURSELF IN GOD'S PURPOSE<br />
                THE LOVEWORLD SONS OF MINISTRY: WHO WE ARE<br />
                The Prolific PK: Inspiring stories and testimonies from Preacher's Kids. Discover how purpose and identity are shaped in Christ.
              </p>
              <div className="flex gap-6 text-sm text-gray-600">
                <span><span className="font-semibold">Text</span> Jakob Gronberg</span>
                <span><span className="font-semibold">Duration</span> 1 Min</span>
              </div>
            </div>
            {/* Issue 2023 */}
            <div>
              <p className="text-gray-700 text-sm mb-2">16. March 2023</p>
              <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
                <img
                  src="https://i.postimg.cc/fRb0TDpB/MAG2.jpg"
                  alt="SOM Magazine 2023"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold mb-2">SOM Magazine 2023</h2>
              <p className="text-gray-700 mb-4 text-base">
                The Word & I: An exclusive interview with PK. Explore the power of God's Word in everyday life.<br />
                March 2023 Issue: Real-life experiences, faith journeys, and practical wisdom for young believers.
              </p>
              <div className="flex gap-6 text-sm text-gray-600">
                <span><span className="font-semibold">Text</span> Jakob Gronberg</span>
                <span><span className="font-semibold">Duration</span> 1 Min</span>
              </div>
            </div>
            {/* Issue 2024 */}
            <div>
              <p className="text-gray-700 text-sm mb-2">16. March 2024</p>
              <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
                <img
                  src="https://i.postimg.cc/JzdHsSWm/MAG3.jpg"
                  alt="SOM Magazine 2024"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold mb-2">SOM Magazine 2024</h2>
              <p className="text-gray-700 mb-4 text-base">
                BUILD YOUR LIFE ON THE TRUTH<br />
                OUTWITTING THE DECEPTION: Discover research and insights.<br />
                LIVE PURPOSEFULLY: An exclusive interview. Practical steps to living a life of purpose and truth in Christ.
              </p>
              <div className="flex gap-6 text-sm text-gray-600">
                <span><span className="font-semibold">Text</span> Jakob Gronberg</span>
                <span><span className="font-semibold">Duration</span> 1 Min</span>
              </div>
            </div>
          </div>
        </section>
            <Newsletter />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Magazine;
