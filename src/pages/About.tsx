import React from 'react';
import { motion } from 'framer-motion';
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
    <div className="min-h-screen bg-white text-gray-800 overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <motion.section
        className="relative py-32 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://i.postimg.cc/q7YMsNQq/front.jpg")' }}
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.1, type: 'spring', bounce: 0.35 }}
      >
        <motion.div className="absolute inset-0 bg-black/60" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1.2, delay: 0.1 }} />
        <motion.div className="relative z-10 max-w-4xl mx-auto text-center px-4"
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, delay: 0.2, type: 'spring', bounce: 0.4 }}
        >
          <motion.h1 className="text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 40, rotate: -3 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.4, type: 'spring', bounce: 0.5 }}
          >About Us</motion.h1>
          <motion.p className="text-lg text-gray-200"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.6, type: 'spring', bounce: 0.4 }}
          >
            Equipping our young believers and building truly transformational communities
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Experience SOM */}
      <motion.section className="py-20 bg-gray-50"
        initial={{ opacity: 0, y: 60, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.1, type: 'spring', bounce: 0.3 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-lg aspect-[16/9] flex items-center justify-center bg-black"
            initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.3, type: 'spring', bounce: 0.4 }}
          >
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
          </motion.div>
        </div>
      </motion.section>

      {/* SOM Activities */}
      <motion.section className="py-20 bg-black"
        initial={{ opacity: 0, y: 60, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.1, type: 'spring', bounce: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 className="text-4xl text-white font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.2, type: 'spring', bounce: 0.4 }}
          >SOM Activities</motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {activities.map((image, index) => (
              <motion.div
                key={index}
                className="aspect-square overflow-hidden rounded-xl shadow-md"
                initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.9, delay: 0.1 + index * 0.20, type: 'spring', bounce: 0.5 }}
              >
                <img
                  src={image}
                  alt={`Activity ${index + 1}`}
                  className="w-full h-full object-cover transition-transform hover:scale-110 duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Leadership Team */}
      <motion.section className="py-20 bg-white"
        initial={{ opacity: 0, y: 60, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.7, type: 'spring', bounce: 0.3 }}
      >
        <div className="max-w-5xl mx-auto px-4">
          <motion.h2 className="text-4xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.2, type: 'spring', bounce: 0.4 }}
          >Our Leadership Team</motion.h2>
          <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
            {/* President */}
            <motion.div className="flex flex-col items-center flex-1"
              initial={{ opacity: 0, y: 40, scale: 0.92, rotate: -3 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, delay: 0.3, type: 'spring', bounce: 0.5 }}
            >
              <motion.div className="w-56 h-56 rounded-full overflow-hidden shadow-2xl mb-6 border-4 border-blue-600"
                initial={{ scale: 0.85, opacity: 0, rotate: -8 }}
                whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 2, delay: 0.4, type: 'spring', bounce: 0.6 }}
              >
                <img
                  src={teamMembers[0].image}
                  alt={teamMembers[0].name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <h3 className="text-2xl font-bold mb-2">{teamMembers[0].name}</h3>
              <p className="text-blue-600 font-medium mb-1 text-lg">{teamMembers[0].role}</p>
            </motion.div>
            {/* Coordinator */}
            <motion.div className="flex flex-col items-center flex-1"
              initial={{ opacity: 0, y: 40, scale: 0.92, rotate: 3 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, delay: 0.5, type: 'spring', bounce: 0.5 }}
            >
              <motion.div className="w-36 h-36 rounded-full overflow-hidden shadow-xl mb-4 border-2 border-gray-300"
                initial={{ scale: 0.85, opacity: 0, rotate: 8 }}
                whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 2, delay: 0.6, type: 'spring', bounce: 0.6 }}
              >
                <img
                  src={teamMembers[1].image}
                  alt={teamMembers[1].name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <h3 className="text-xl font-semibold mb-1">{teamMembers[1].name}</h3>
              <p className="text-blue-600 font-medium mb-1">{teamMembers[1].role}</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* App Section */}
      <motion.section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800"
        initial={{ opacity: 0, y: 60, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.1, type: 'spring', bounce: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div className="text-white"
            initial={{ opacity: 0, x: -60, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.2, type: 'spring', bounce: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4">Get the SOM Mobile App</h2>
            <p className="text-lg mb-6 text-white/90">
              Stay connected with our spiritual content and testimonials anytime, anywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href='https://apps.apple.com/gb/app/som-community/id6474561995'
                target='_blank'
                rel='noopener noreferrer'
                >
              <Button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-md">
                App Store
              </Button>
              </a>
              <a
                href="https://web.lwappstore.com/share/lW-sA-D70-KC946"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-md">
                  Loveworld App store
                </Button>
              </a>
            </div>
          </motion.div>
          <motion.div className="flex justify-center"
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.4, type: 'spring', bounce: 0.5 }}
          >
            <motion.div
              className="w-64 h-96 bg-none rounded-3xl p-4 flex items-center justify-center"
              initial={{ scale: 0.85, rotate: 8, opacity: 0 }}
              whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 2, delay: 0.6, type: 'spring', bounce: 0.6 }}
            >
              <img
                  src="https://i.postimg.cc/m2HdhYRX/Phone-View-removebg-preview.png"
                  alt="SOM Magazine 2022"
                  className="w-full h-fulll object-cover"
                />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default About;
