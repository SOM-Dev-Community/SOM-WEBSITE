import React from 'react';
import { Button } from '@/components/ui/button';

export const EventsSection = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Events
          </h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-white">
            Upcoming
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-4">
            Join us for our upcoming live streams and events designed to inspire and equip our community.
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="flex space-x-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md">
              Upcoming
            </Button>
            <Button variant="outline" className="border-gray-600 text-gray-800 hover:bg-blue-700 hover:text-white px-6 py-2 rounded-md">
              On-Demand
            </Button>
            <Button variant="outline" className="border-gray-600 text-gray-800 hover:bg-blue-700 hover:text-white px-6 py-2 rounded-md">
              Workshops
            </Button>
            <Button variant="outline" className="border-gray-600 text-gray-800 hover:bg-blue-700 hover:text-white px-6 py-2 rounded-md">
              Premium
            </Button>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-gray-800 rounded-lg p-6 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div 
                className="w-16 h-16 rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=400&auto=format&fit=crop")'
                }}
              ></div>
              <div>
                <h4 className="text-xl font-bold">Leadership Summit</h4>
                <p className="text-gray-300">Join us for a powerful evening with God's word and fellowship</p>
              </div>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md">
              Save My Spot
            </Button>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div 
                className="w-16 h-16 rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400&auto=format&fit=crop")'
                }}
              ></div>
              <div>
                <h4 className="text-xl font-bold">Family Retreat</h4>
                <p className="text-gray-300">Join us for a powerful evening with God's word and fellowship</p>
              </div>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md">
              Save My Spot
            </Button>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div 
                className="w-16 h-16 rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=400&auto=format&fit=crop")'
                }}
              ></div>
              <div>
                <h4 className="text-xl font-bold">Youth Conference</h4>
                <p className="text-gray-300">Inspire the next generation as dynamic traditional gatherings</p>
              </div>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md">
              Save My Spot
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};