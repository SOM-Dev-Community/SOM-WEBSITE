import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Newsletter } from '../components/Newsletter';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    title: 'Fortify Conference 2025',
    slug: 'fortify-conference-2025',
    description:
      'A powerful program held across Christ Embassy Zones for Pastors, Deacons, and Preachers’ Kids—empowering ministers with deeper truths and fresh fire for the Gospel.',
    author: 'Pastor Gloria',
    date: 'April 20, 2025',
    category: 'Conference',
    image: 'https://i.postimg.cc/vZ0mmqVW/PKS1.jpg',
  },
  {
    title: 'Rhapsody of Realities Distribution',
    slug: 'rhapsody-of-realities',
    description:
      'A global move of God’s Word through Rhapsody of Realities, flooding homes, communities, and nations with the Gospel in every known language!',
    author: 'Brother Emmanuel',
    date: 'April 10, 2025',
    category: 'Outreach',
    image: 'https://i.postimg.cc/9fxwvXbH/europe.jpg',
  },
  {
    title: 'Eternal Life Confessions',
    slug: 'eternal-life-confessions',
    description:
      'Speaking God’s Word boldly every day—join millions making daily confessions that align with divine realities and experience supernatural transformation.',
    author: 'Sister Anita',
    date: 'April 5, 2025',
    category: 'Faith Lifestyle',
    image: 'https://i.postimg.cc/mkWLnKvG/pastor1.jpg',
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <motion.section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50"
        initial={{ opacity: 0, y: 60, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.1, type: 'spring', bounce: 0.35 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.2, type: 'spring', bounce: 0.4 }}
          >
            <motion.h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 mt-9"
              initial={{ opacity: 0, y: 40, rotate: -3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, delay: 0.4, type: 'spring', bounce: 0.5 }}
            >SOM IMPACT BLOG</motion.h1>
          </motion.div>

          {/* Featured Article */}
          <motion.div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.25,
                  delayChildren: 0.5,
                },
              },
            }}
          >
            <motion.div
              className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]"
              style={{
                backgroundImage: 'url("https://i.postimg.cc/9fxwvXbH/europe.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.5, type: 'spring', bounce: 0.6 }}
            />

            <motion.div
              initial={{ opacity: 0, x: 80, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2, type: 'spring', bounce: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: 0.2, type: 'spring', bounce: 0.5 }}
                >Featured</motion.span>
                <motion.span className="text-gray-500 text-sm"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: 0.3, type: 'spring', bounce: 0.5 }}
                >March 15, 2025</motion.span>
              </div>

              <motion.h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, delay: 0.4, type: 'spring', bounce: 0.5 }}
              >SOM Europe Day of Evangelism</motion.h2>

              <motion.p className="text-lg text-gray-600 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, delay: 0.5, type: 'spring', bounce: 0.4 }}
              >
                During this time of fellowship, the brethren spent time in prayer before hitting the streets for evangelism; spreading the gospel of our Lord Jesus through our messenger angel throughout every nook and cranny of the city. Consequently, this spirit-inspired outreach raked souls into the kingdom of our Lord Jesus Christ. Glory to God!
              </motion.p>

              <motion.div className="flex items-center space-x-4 mb-6"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.6, type: 'spring', bounce: 0.5 }}
              >
                <motion.img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
                  alt="Pastor Jerry"
                  className="w-8 h-8 rounded-full"
                  initial={{ scale: 0.7, opacity: 0, rotate: -10 }}
                  whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 1, delay: 0.7, type: 'spring', bounce: 0.7 }}
                />
                <div>
                  <motion.p className="font-semibold text-gray-900"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: 0.8, type: 'spring', bounce: 0.5 }}
                  >Pastor Jerry</motion.p>
                  <motion.p className="text-sm text-gray-500"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: 0.9, type: 'spring', bounce: 0.5 }}
                  >Chief Editor</motion.p>
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 1, type: 'spring', bounce: 0.5 }}
              >
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md">
                  Read More →
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Explore Topics */}
      <motion.section className="py-20 bg-white"
        initial={{ opacity: 0, y: 60, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.1, type: 'spring', bounce: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-6 sm:gap-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.18,
                  delayChildren: 0.3,
                },
              },
            }}
          >
            <motion.h2 className="text-3xl font-bold text-gray-900"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, delay: 0.2, type: 'spring', bounce: 0.4 }}
            >Explore Topics</motion.h2>

            <motion.div className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, delay: 0.3, type: 'spring', bounce: 0.4 }}
            >
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                All Programs
              </Button>
              <Button variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-50 px-4 py-2 rounded-md">
                Conferences
              </Button>
              <Button variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-50 px-4 py-2 rounded-md">
                Outreaches
              </Button>
              <Button variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-50 px-4 py-2 rounded-md">
                Confessions
              </Button>
            </motion.div>
          </motion.div>

          {/* Blog Cards */}
          <motion.div className="grid md:grid-cols-3 gap-8"
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
            {blogPosts.map((post, idx) => (
              <Link to={`/blog/${post.slug}`} key={post.slug}>
                <motion.div
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden cursor-pointer"
                  initial={{ opacity: 0, y: 60, scale: 0.92, rotate: idx % 2 === 0 ? -4 : 4 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 1.2, delay: 0.1 + idx * 0.13, type: 'spring', bounce: 0.5 }}
                >
                  <motion.div
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${post.image})` }}
                    initial={{ opacity: 0, scale: 0.85, rotate: idx % 2 === 0 ? -8 : 8 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1.5, delay: 0.2 + idx * 0.13, type: 'spring', bounce: 0.6 }}
                  />

                  <div className="p-6">
                    <motion.div className="text-blue-600 text-sm font-semibold mb-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.7, delay: 0.3 + idx * 0.13, type: 'spring', bounce: 0.4 }}
                    >
                      {post.category}
                    </motion.div>

                    <motion.h3 className="text-xl font-bold text-gray-900 mb-3"
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 1, delay: 0.4 + idx * 0.13, type: 'spring', bounce: 0.4 }}
                    >
                      {post.title}
                    </motion.h3>

                    <motion.p className="text-gray-600 mb-4 text-sm leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.7, delay: 0.5 + idx * 0.13, type: 'spring', bounce: 0.4 }}
                    >
                      {post.description}
                    </motion.p>

                    <motion.div className="flex items-center gap-2 text-sm text-gray-500"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.7, delay: 0.6 + idx * 0.13, type: 'spring', bounce: 0.4 }}
                    >
                      <motion.img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=32&auto=format&fit=crop"
                        alt={post.author}
                        className="w-6 h-6 rounded-full"
                        initial={{ scale: 0.7, opacity: 0, rotate: idx % 2 === 0 ? -10 : 10 }}
                        whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1, delay: 0.7 + idx * 0.13, type: 'spring', bounce: 0.7 }}
                      />
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>

          <motion.div className="text-center mt-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.5, type: 'spring', bounce: 0.5 }}
          >
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md">
              Load More Programs
            </Button>
          </motion.div>
        </div>
      </motion.section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Blog;

