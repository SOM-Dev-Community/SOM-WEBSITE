import React from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

export const FeaturedContent = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium tracking-wide mb-5 shadow">
              Latest Feature
            </span>

            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Discover Our Latest Insights <br />
              <span className="text-blue-600">and Stories</span>
            </h2>

            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl">
              Stay updated with <strong className="text-blue-700">Revival Magazine</strong> as we explore deep spiritual truths, life-changing testimonies, and powerful articles that shape our ministry journey.
            </p>

            {/* Featured Article Card */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 mb-8 transition-all duration-300 hover:shadow-xl hover:border-blue-200">
              <div className="flex flex-col space-y-4">
                <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full w-max shadow">
                  Featured Post
                </span>

                <h3 className="text-xl font-semibold text-gray-800 leading-snug">
                  Read about how we are making a difference in the lives of many.
                </h3>

                <div className="text-sm text-gray-500 flex items-center space-x-2">
                  <span>By Sarah Johnson</span>
                  <span>•</span>
                  <span>5 min read</span>
                </div>
              </div>
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold shadow transition hover:scale-105">
              Read More
            </Button>
          </div>

          {/* Video Section */}
          <div className="relative animate-fade-in-up delay-200">
            <div
              className="relative overflow-hidden rounded-3xl shadow-2xl group aspect-video"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=6000&auto=format&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-0 transition-opacity duration-300 group-hover:opacity-90" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <button type='button' title='Play' className="bg-white/20 backdrop-blur-sm hover:bg-white/30 p-6 rounded-full transition-all duration-300 group-hover:scale-110">
                  <Play
                    className="w-12 h-12 text-white transition-transform"
                    fill="white"
                  />
                </button>
              </div>

              {/* Text Overlay */}
              <div className="absolute bottom-6 left-6 z-10 text-white drop-shadow-md">
                <h3 className="text-2xl font-bold mb-1">Experience SOM</h3>
                <p className="text-white/90 text-sm sm:text-base max-w-sm">
                  Watch how our Sons of Ministry are transformed through impactful encounters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
