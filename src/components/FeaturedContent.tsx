import React from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const FeaturedContent = () => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate('/impact');
  };

  return (
    <motion.section
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, type: 'spring', stiffness: 60 }}
          >
            <motion.span
              className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium tracking-wide mb-5 shadow"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Latest Feature
            </motion.span>

            <motion.h2
              className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Discover Our Latest Insights <br />
              <span className="text-blue-600">and Stories</span>
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Stay updated with Preachers Kids Magazines as we explore deep spiritual truths, life-changing testimonies, and powerful articles that shape our ministry journey.
            </motion.p>

            {/* Featured Article Card */}
            <motion.div
              className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 mb-8 transition-all duration-300 hover:shadow-xl hover:border-blue-200"
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 #3b82f6' }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.7, delay: 0.7, type: 'spring', stiffness: 120 }}
            >
              <div className="flex flex-col space-y-4">
                <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full w-max shadow">
                  Featured Post
                </span>

                <h3 className="text-xl font-semibold text-gray-800 leading-snug">
                  Be About Soulwinning
                </h3>

                <div className="text-sm text-gray-500 flex items-center space-x-2">
                  <span>Evangelism</span>
                  <span>•</span>
                  <span>5 min read</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.08, boxShadow: '0 0 24px 0 #3b82f6' }}
              transition={{ type: 'spring', stiffness: 300, duration: 0.7, delay: 1.1 }}
              style={{ display: 'inline-block' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
            >
              <Button
                onClick={handleReadMore}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold shadow transition hover:scale-105"
              >
                Read More
              </Button>
            </motion.div>
          </motion.div>

          {/* Video Section */}
          <motion.div
            className="relative"
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, type: 'spring', stiffness: 60, delay: 0.2 }}
          >
            <motion.div
              className="relative overflow-hidden rounded-3xl shadow-2xl aspect-video flex items-center justify-center bg-black"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.03, boxShadow: '0 0 32px 0 #3b82f6' }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.8, delay: 0.5, type: 'spring', stiffness: 120 }}
            >
              <iframe
                src="https://player.vimeo.com/video/1100719005?h=1a533c78b1"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="SOM Vimeo Video"
                className="w-full h-full rounded-3xl"
              ></iframe>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
