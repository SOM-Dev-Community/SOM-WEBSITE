import React from 'react';
import { motion } from 'framer-motion';
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
      time: '6:00 PM WAT',
      status: 'Live Now',
      statusColor: 'bg-red-100 text-red-600',
      buttonText: 'Watch Live',
      buttonColor: 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white'
    },
    {
      title: 'Global Communion Service',
      description: 'Join believers around the world in a time of fellowship, worship, and the breaking of bread.',
      time: 'Oct 5, 3:00 PM WAT',
      status: 'Upcoming',
      statusColor: 'bg-blue-100 text-blue-600',
      buttonText: 'Set Reminder',
      buttonColor: 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white'
    },
    {
      title: 'Praise Night With Pastor Chris',
      description: 'A night filled with spirit-lifting songs, worship, and prophetic declarations.',
      time: 'Sept 21, 2:00 PM WAT',
      status: 'Upcoming',
      statusColor: 'bg-blue-100 text-blue-600',
      buttonText: 'Set Reminder',
      buttonColor: 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white'
    }
  ];

  return (
    <motion.section className="min-h-screen bg-white overflow-x-hidden"
      initial={{ opacity: 0, y: 80, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.2, type: 'spring', bounce: 0.5 }}
    >
      <Header />

      {/* Page Title Section */}
      <motion.section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-20 px-6 text-center mt-10"
        initial={{ opacity: 0, y: 60, scale: 0.92, rotate: -4 }}
        whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.1, delay: 0.2, type: 'spring', bounce: 0.7 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1 className="text-5xl font-extrabold text-blue-900 mb-4 tracking-tight"
            initial={{ opacity: 0, y: 40, scale: 0.9, rotate: -8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, delay: 0.3, type: 'spring', bounce: 0.8 }}
          >Experience the Spirit</motion.h1>
          <motion.p className="text-xl text-blue-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.5, type: 'spring', bounce: 0.7 }}
          >
        Be a part of upcoming global events, and relive the highlights of past gatherings with other believers.
          </motion.p>
        </div>
      </motion.section>

      {/* Upcoming Events Section */}
      <motion.section className="bg-white text-blue-900 py-20 px-6"
        initial={{ opacity: 0, y: 60, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.1, type: 'spring', bounce: 0.3 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 className="text-4xl font-bold mb-4 tracking-tight"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.2, type: 'spring', bounce: 0.4 }}
          >Upcoming Events</motion.h2>
          <motion.p className="text-lg mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.3, type: 'spring', bounce: 0.4 }}
          >
            Join millions of believers around the world for spirit-filled, life-transforming moments.
          </motion.p>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.22,
                  delayChildren: 0.7,
                },
              },
            }}
          >
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                className="bg-white border border-blue-100 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
                initial={{ opacity: 0, y: 80, scale: 0.8, rotate: index % 2 === 0 ? -8 : 8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.5, delay: 0.2 + index * 0.18, type: 'spring', bounce: 0.8 }}
                whileHover={{ scale: 1.07, rotate: index % 2 === 0 ? 2 : -2, boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}
              >
                <div className="flex justify-between items-center mb-4">
                  <motion.span className={`text-xs font-semibold px-3 py-1 rounded-full ${event.statusColor}`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: 0.2, type: 'spring', bounce: 0.5 }}
                  >{event.status}</motion.span>
                  <motion.div className="flex items-center text-sm text-blue-500"
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: 0.3, type: 'spring', bounce: 0.5 }}
                  >
                    <Clock className="w-4 h-4 mr-1" />
                    {event.time}
                  </motion.div>
                </div>

                <motion.h3 className="text-2xl font-bold mb-3 leading-snug"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 1, delay: 0.4, type: 'spring', bounce: 0.7 }}
                >{event.title}</motion.h3>
                <motion.p className="text-blue-700 text-base mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, delay: 0.5, type: 'spring', bounce: 0.6 }}
                >{event.description}</motion.p>

                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, delay: 0.6, type: 'spring', bounce: 0.7 }}
                  whileHover={{ scale: 1.09 }}
                >
                  {event.buttonText === 'Set Reminder' ? (
                    <div className="flex flex-col gap-2">
                      <a
                        href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&details=${encodeURIComponent(event.description)}&dates=20250820T180000Z/20250820T200000Z`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className={`w-full py-3 rounded-xl font-medium text-sm shadow-md ${event.buttonColor}`}>
                          Add to Google Calendar
                        </Button>
                      </a>
                      <a
                        href={`data:text/calendar;charset=utf-8,${encodeURIComponent(`BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:${event.title}\nDESCRIPTION:${event.description}\nDTSTART:20250820T180000Z\nDTEND:20250820T200000Z\nEND:VEVENT\nEND:VCALENDAR`)}`}
                        download={`${event.title.replace(/\s+/g, '_')}.ics`}
                      >
                        <Button className={`w-full py-3 rounded-xl font-medium text-sm shadow-md ${event.buttonColor}`}>
                          Add to Device Calendar (.ics)
                        </Button>
                      </a>
                    </div>
                  ) : event.buttonText === 'Watch Live' ? (
                    <a href="*" target="_blank" rel="noopener noreferrer">
                      <Button className={`w-full py-3 rounded-xl font-medium text-sm shadow-md ${event.buttonColor}`}>
                        {event.buttonText}
                      </Button>
                    </a>
                  ) : (
                    <Button className={`w-full py-3 rounded-xl font-medium text-sm shadow-md ${event.buttonColor}`}>
                      {event.buttonText}
                    </Button>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Moments Captured / Event Highlights */}
      <motion.section className="bg-gray-50 py-20 px-6"
        initial={{ opacity: 0, y: 60, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.1, type: 'spring', bounce: 0.3 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 className="text-4xl font-bold text-blue-900 mb-6"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.2, type: 'spring', bounce: 0.4 }}
          >Moments Captured</motion.h2>
          <motion.p className="text-blue-700 text-lg mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.3, type: 'spring', bounce: 0.4 }}
          >
            Relive the beautiful highlights from our past events filled with joy, worship, and fellowship.
          </motion.p>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.18,
                  delayChildren: 0.5,
                },
              },
            }}
          >
            {[image1, image2, image3, image4, image5, image6].map((img, index) => (
              <motion.div key={index} className="overflow-hidden rounded-2xl shadow-lg"
                initial={{ opacity: 0, scale: 0.85, rotate: index % 2 === 0 ? -8 : 8 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.5, delay: 0.2 + index * 0.13, type: 'spring', bounce: 0.7 }}
                whileHover={{ scale: 1.08, rotate: index % 2 === 0 ? 4 : -4 }}
              >
                <motion.img
                  src={img}
                  alt={`Event highlight ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 1.2, delay: 0.3 + index * 0.13, type: 'spring', bounce: 0.7 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <Newsletter />
      <Footer />
    </motion.section>
  );
};

export default Events;
