import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Newsletter } from '../components/Newsletter';

import impactImage from '../assets/PKS2.jpg';

const Impact = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#4B2AAD] py-20 px-6 text-white relative">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <p className="uppercase tracking-widest text-sm mb-2">IMPACT</p>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Be About Impact</h1>
              <p className="uppercase text-xs tracking-widest mb-6">IMPACT, INFLUENCE, TRANSFORMATION</p>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src={impactImage}
                alt="Impact in Action"
                className="rounded-2xl shadow-2xl w-full max-w-md object-cover"
              />
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-4xl mx-auto bg-white py-16 px-6 -mt-16 rounded-3xl shadow-lg relative z-10">
          <p className="italic text-[#4B2AAD] font-semibold mb-6 text-lg">
            "And whatsoever ye do, do it heartily, as to the Lord, and not unto men." (Colossians 3:23)
          </p>
          <p className="mb-4 text-gray-700">
            As a believer, you are called to make a lasting impact in your world. Impact is not just about big actions, but about consistent, positive influence in the lives of those around you. Every word you speak, every act of kindness, and every step of faith can transform lives and bring glory to God.
          </p>
          <p className="mb-4 text-gray-700">
            Jesus made an impact everywhere He went—healing the sick, teaching the multitudes, and showing compassion to the lost. You are empowered by the Holy Spirit to do the same and even greater works. Your life is a testimony of God’s love and power in action.
          </p>
          <p className="mb-4 text-gray-700">
            Don’t underestimate the power of your influence. Whether you’re leading a group, helping a neighbor, or simply living out your faith with integrity, you are making a difference. Let your light shine so brightly that others are drawn to Christ through you.
          </p>
          <p className="mb-4 text-gray-700">
            Remember, true impact is measured not just by what you achieve, but by the lives you touch and the legacy you leave. Be intentional about sowing seeds of hope, faith, and love everywhere you go.
          </p>
          <p className="mb-4 text-gray-700">
            Today, ask yourself: How can I be a greater blessing to my world? Step out in faith, take action, and watch God use you to bring transformation and lasting impact!
          </p>
        </section>
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Impact;

