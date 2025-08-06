import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Newsletter } from '../components/Newsletter';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Pastor Sarah Johnson',
      role: 'Leading SOM church for millennials',
      description: 'Professional SOM guidance for millennials and the next generation.',
      image: 'src/assets/person1.JPG'
    },
    {
      name: 'Pastor Michael Chen',
      role: 'Pastor Michael Chen',
      description: 'General Superintendent of evangelism, missions, and outreach for all SOM.',
      image: 'src/assets/person2.JPG'
    },
    {
      name: 'Pastor Emily Rodriguez',
      role: 'Pastor Emily Rodriguez',
      description: 'Engaging theological advancement and engaging with contemporary millennials.',
      image: 'src/assets/person3.JPG'
    }
  ];

  const activities = [
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400&auto=format&fit=crop'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 min-h-[60vh]"
        style={{
          backgroundImage: 'url("assets/som.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-5xl font-bold text-white mb-6">
            About Us
          </h1>
          <p className="text-l text-gray-200 max-w-3xl mx-auto">
            Equipping our young believers and building truly transformational communities
          </p>
        </div>
      </section>  

      {/* Experience SOM Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[16/9] max-w-4xl mx-auto"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=6000&auto=format&fit=crop")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <button title='play' type='button' className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 rounded-full p-8 group">
                <Play className="h-16 w-16 text-white group-hover:scale-110 transition-transform" fill="white" />
              </button>
            </div>
            
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-semibold mb-2">Experience SOM</h3>
              <p className="text-white/90 text-lg">Watch a transformation of what has made and forms of Ministry a work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SOM Activities */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              SOM Activities
            </h2>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            {activities.map((image, index) => (
              <div key={index} className="aspect-square rounded-lg overflow-hidden">
                <img 
                  src={image} 
                  alt={`Activity ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Leadership Team
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Second row */}
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={`duplicate-${index}`} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get the SOM Mobile App */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Get the SOM Mobile App
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Stay connected with our spiritual content and testimonials
                anytime, anywhere.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-md">
                  App Store
                </Button>
                <Button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-md">
                  Play Store
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-96 bg-white rounded-3xl p-4 shadow-2xl">
                  <div className="w-full h-full bg-gray-100 rounded-2xl flex items-center justify-center">
                    <span className="text-gray-500">Mobile App Preview</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default About;