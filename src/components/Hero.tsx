import React from 'react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=6000&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Discover Your Path
          <br />
          with SOM Today!
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Empowering a new generation of ministry leaders through comprehensive 
          biblical education and transformative spiritual growth experiences.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md text-lg font-semibold"
          >
            Get Started
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-white text-gray-900 hover:bg-white hover:text-gray-900 px-8 py-4 rounded-md text-lg font-semibold"
          >
            Watch Video
          </Button>
        </div>
      </div>
    </section>
  );
};