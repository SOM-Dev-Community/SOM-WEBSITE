import React from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

export const FeaturedContent = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              Latest
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Discover Our Latest Insights
              and Stories
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Stay updated with the Revival Magazine that takes deep dives into areas of our 
              spiritual journey, biblical insights and personal growth experiences.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured Post
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mt-3 mb-2">
                 Read about how we are making a difference in the lives of many.
                </h3>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>Sarah Johnson</span>
                  <span>•</span>
                  <span>5 min read</span>
                </div>
              </div>
            </div>
            
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-semibold"
            >
              Read More
            </Button>
          </div>
          
          {/* Video */}
          <div className="relative">
            <div 
              className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=6000&auto=format&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 rounded-full p-6 group">
                  <Play className="h-12 w-12 text-white group-hover:scale-110 transition-transform" fill="white" />
                </button>
              </div>
              
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Experience SOM</h3>
                <p className="text-white/90">Watch a transformation of what has made our forms of Ministry a work.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};