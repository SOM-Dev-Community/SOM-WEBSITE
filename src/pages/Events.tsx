import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Newsletter } from '../components/Newsletter';
import { Button } from '@/components/ui/button';
import { Clock } from 'lucide-react';

import image1 from '@/assets/PKS2.jpg';
import image2 from '@/assets/WSA3.jpg';
import image3 from '@/assets/PKS1.jpg';
import image4 from '@/assets/WSA2.jpg';
import image5 from '@/assets/B1.jpg';
import image6 from '@/assets/B2.jpg';

const Events = () => {
  const upcomingEvents = [
    {
      title: 'Your Loveworld Specials',
      description: 'An immersive teaching session with Pastor Chris, bringing deep revelations from the Word of God.',
      time: '2:30 PM WAT',
      status: 'Live Now',
      statusColor: 'bg-red-100 text-red-600',
      buttonText: 'Watch Live',
      buttonColor: 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white'
    },
    {
      title: 'Global Communion Service',
      description: 'Join believers around the world in a time of fellowship, worship, and the breaking of bread.',
      time: 'Tomorrow, 6:00 PM',
      status: 'Upcoming',
      statusColor: 'bg-blue-100 text-blue-600',
      buttonText: 'Set Reminder',
      buttonColor: 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white'
    },
    {
      title: 'Praise Night With Pastor Chris',
      description: 'A night filled with spirit-lifting songs, worship, and prophetic declarations.',
      time: 'Aug 20, 8:00 PM',
      status: 'Upcoming',
      statusColor: 'bg-blue-100 text-blue-600',
      buttonText: 'Set Reminder',
      buttonColor: 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white'
    }
  ];

  return (
    <>
      <Header />

      {/* Page Title Section */}
      <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-20 px-6 text-center mt-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold text-blue-900 mb-4 tracking-tight">Experience the Spirit</h1>
          <p className="text-xl text-blue-700 max-w-2xl mx-auto">
        Be a part of upcoming global events, and relive the highlights of past gatherings with other believers.
          </p>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="bg-white text-blue-900 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Upcoming Events</h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto">
            Join millions of believers around the world for spirit-filled, life-transforming moments.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white border border-blue-100 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${event.statusColor}`}>
                    {event.status}
                  </span>
                  <div className="flex items-center text-sm text-blue-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {event.time}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 leading-snug">{event.title}</h3>
                <p className="text-blue-700 text-base mb-6 leading-relaxed">{event.description}</p>

                <Button className={`w-full py-3 rounded-xl font-medium text-sm shadow-md ${event.buttonColor}`}>
                  {event.buttonText}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Moments Captured / Event Highlights */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Moments Captured</h2>
          <p className="text-blue-700 text-lg mb-12 max-w-2xl mx-auto">
            Relive the beautiful highlights from our past events filled with joy, worship, and fellowship.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[image1, image2, image3, image4, image5, image6].map((img, index) => (
              <div key={index} className="overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={img}
                  alt={`Event highlight ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </>
  );
};

export default Events;
