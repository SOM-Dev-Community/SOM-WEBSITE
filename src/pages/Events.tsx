import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Newsletter } from '../components/Newsletter';
import { Button } from '@/components/ui/button';
import { Clock } from 'lucide-react';

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
      <section className="bg-white text-blue-900 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold mb-4 tracking-tight">Upcoming Events</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
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
      <Newsletter />
      <Footer />
    </>
  );
};

export default Events;
