import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Newsletter } from '../components/Newsletter';
import { Button } from '@/components/ui/button';
import { Clock } from 'lucide-react';
import {heroImage, image1, image2, image3, image4, image5, image6, image7, image8} from '../assets/galleryPicturesExports';

const Events = () => {
  const upcomingEvents = [
    {
      title: 'Tech Conference 2025',
      description: 'Join industry experts discussing the future of technology.',
      time: '2:30 PM EST',
      status: 'Live Now',
      statusColor: 'bg-red-500',
      buttonText: 'Watch Live',
      buttonColor: 'bg-red-600 hover:bg-red-700'
    },
    {
      title: 'Digital Marketing Summit',
      description: 'Learn the latest digital marketing strategies and trends.',
      time: 'Tomorrow, 1:00 PM',
      status: 'Upcoming',
      statusColor: 'bg-blue-500',
      buttonText: 'Set Reminder',
      buttonColor: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      title: 'Design Workshop',
      description: 'Interactive session on UI/UX design principles.',
      time: 'Jan 15, 4:00 PM',
      status: 'Upcoming',
      statusColor: 'bg-blue-500',
      buttonText: 'Set Reminder',
      buttonColor: 'bg-blue-600 hover:bg-blue-700'
    }
  ];

  const pastEvents = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Live Events Calendar
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Stay updated with our upcoming live streams and events
          </p>
        </div>
      </section>

      {/* Upcoming Live Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Upcoming Live Events
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200 p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`${event.statusColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    {event.status}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{event.time}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {event.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {event.description}
                </p>
                
                <Button 
                  className={`w-full ${event.buttonColor} text-white py-2 rounded-md font-semibold transition-all`}
                >
                  {event.buttonText}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Past Events Gallery
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {pastEvents.map((image, index) => (
              <div key={index} className="aspect-square rounded-lg overflow-hidden">
                <img 
                  src={image} 
                  alt={`Past event ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Events;