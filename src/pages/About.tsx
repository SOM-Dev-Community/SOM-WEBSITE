import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Newsletter } from '../components/Newsletter';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Pastor Chris Oyakhilome',
      role: 'President of Loveworld Nation',
      image: 'https://i.postimg.cc/gkDzMS4f/President.jpg',
    },
    {
      name: 'Pastor Sandra Oyakhilome Meduteni',
      role: 'SOM Co-Ordinator',
      image: 'https://i.postimg.cc/Cxg88Q5X/Director.jpg',
    },
  ];

  const activities = [
    'https://i.postimg.cc/G2y3qbSQ/PKS3.jpg',
    'https://i.postimg.cc/vZ0mmqVW/PKS1.jpg',
    'https://i.postimg.cc/1z43VGGb/PKS2.jpg',
    'https://i.postimg.cc/pVmKMj3G/B1.jpg',
    'https://i.postimg.cc/SxfMffzs/B2.jpg',
    'https://i.postimg.cc/NfTT5csR/B3.jpg',
    'https://i.postimg.cc/Y077RYFr/WSA1.jpg',
    'https://i.postimg.cc/8P1DrdDw/WSA2.jpg',
    'https://i.postimg.cc/CMCS1ryz/WSA3.jpg',
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />

      {/* Hero Section */}
      <section
        className="relative py-32 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://i.postimg.cc/q7YMsNQq/front.jpg")' }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-lg text-gray-200">
            Equipping our young believers and building truly transformational communities
          </p>
        </div>
      </section>  

      {/* Experience SOM */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[16/9] flex items-center justify-center bg-black">
            <iframe
              src="https://player.vimeo.com/video/1100718405?h=b886da83be"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Experience SOM Vimeo Video"
              className="w-full h-full rounded-2xl"
            ></iframe>
          </div>
        </div>
      </section>

      {/* SOM Activities */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl text-white font-bold text-center mb-12">SOM Activities</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {activities.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-xl shadow-md">
                <img
                  src={image}
                  alt={`Activity ${index + 1}`}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Leadership Team</h2>
          <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
            {/* President */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-56 h-56 rounded-full overflow-hidden shadow-2xl mb-6 border-4 border-blue-600">
                <img
                  src={teamMembers[0].image}
                  alt={teamMembers[0].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">{teamMembers[0].name}</h3>
              <p className="text-blue-600 font-medium mb-1 text-lg">{teamMembers[0].role}</p>
            </div>
            {/* Coordinator */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-36 h-36 rounded-full overflow-hidden shadow-xl mb-4 border-2 border-gray-300">
                <img
                  src={teamMembers[1].image}
                  alt={teamMembers[1].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">{teamMembers[1].name}</h3>
              <p className="text-blue-600 font-medium mb-1">{teamMembers[1].role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* App Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-4">Get the SOM Mobile App</h2>
            <p className="text-lg mb-6 text-white/90">
              Stay connected with our spiritual content and testimonials anytime, anywhere.
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
            <div className="w-64 h-96 bg-white rounded-3xl p-4 shadow-2xl flex items-center justify-center">
              <img
                  src="https://i.postimg.cc/8P46SjK7/Phone-View.jpg"
                  alt="SOM Magazine 2022"
                  className="w-full h-fulll object-cover"
                />
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
