import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Newsletter } from '../components/Newsletter';
import { Button } from '@/components/ui/button';
import { GraduationCap, Tv, Headphones, BookOpen } from 'lucide-react';

const Explore = () => {
  const products = [
    {
      title: 'SOMLA',
      description:
        'Your gateway to comprehensive biblical education and spiritual growth.',
      icon: GraduationCap,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
      Link: 'https://somla.loveworldsonsofministry.org/'
    },
    {
      title: 'SOM TV',
      description:
        'Stream inspiring content and educational videos anytime, anywhere.',
      icon: Tv,
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
      buttonColor: 'bg-red-600 hover:bg-red-700'
    },
    {
      title: '4:12 Podcast',
      description:
        'Listen to thought-provoking discussions and spiritual insights on the go.',
      icon: Headphones,
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      buttonColor: 'bg-purple-600 hover:bg-purple-700'
    },
    {
      title: "Preacher's Kid Magazine",
      description:
        'Engaging stories and articles for the next generation of believers.',
      icon: BookOpen,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      buttonColor: 'bg-green-600 hover:bg-green-700',
      Link: '/Magazine'
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <motion.section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50"
        initial={{ opacity: 0, y: 80, scale: 0.95, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2, type: 'spring', bounce: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16"
            initial={{ opacity: 0, y: 60, scale: 0.92, rotate: -4 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.1, delay: 0.2, type: 'spring', bounce: 0.7 }}
          >
            <motion.h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 mt-9"
              initial={{ opacity: 0, y: 40, scale: 0.9, rotate: -8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2, delay: 0.3, type: 'spring', bounce: 0.8 }}
            >Explore Our Products</motion.h1>
            <motion.p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, delay: 0.5, type: 'spring', bounce: 0.7 }}
            >
              Discover a suite of tools and media built to inspire, empower,
              and deepen your walk with God.
            </motion.p>
          </motion.div>

          {/* Product Grid */}
          <motion.div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
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
            {products.map((product, idx) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={product.title}
                  className="bg-white rounded-2xl p-6 lg:p-8 shadow-md hover:shadow-xl transition-all duration-300 text-center border border-gray-100"
                  initial={{ opacity: 0, y: 80, scale: 0.8, rotate: idx % 2 === 0 ? -8 : 8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 1.5, delay: 0.2 + idx * 0.18, type: 'spring', bounce: 0.8 }}
                  whileHover={{ scale: 1.07, rotate: idx % 2 === 0 ? 2 : -2, boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}
                >
                  <motion.div
                    className={`${product.iconBg} rounded-full p-4 mb-6 inline-flex items-center justify-center`}
                    initial={{ scale: 0.7, opacity: 0, rotate: idx % 2 === 0 ? -20 : 20 }}
                    whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1.2, delay: 0.3 + idx * 0.18, type: 'spring', bounce: 0.9 }}
                    whileHover={{ scale: 1.18, rotate: idx % 2 === 0 ? 8 : -8 }}
                  >
                    <Icon className={`w-10 h-10 ${product.iconColor}`} />
                  </motion.div>

                  <motion.h3 className="text-xl font-semibold text-gray-900 mb-3"
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1, delay: 0.5 + idx * 0.18, type: 'spring', bounce: 0.7 }}
                  >
                    {product.title}
                  </motion.h3>

                  <motion.p className="text-gray-600 text-sm mb-6 leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: 0.6 + idx * 0.18, type: 'spring', bounce: 0.6 }}
                  >
                    {product.description}
                  </motion.p>

                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: 0.7 + idx * 0.18, type: 'spring', bounce: 0.7 }}
                    whileHover={{ scale: 1.09 }}
                  >
                    {product.Link ? (
                      product.Link.startsWith('http') ? (
                        <a href={product.Link} target="_blank" rel="noopener noreferrer">
                          <Button
                            className={`w-full ${product.buttonColor} text-white py-3 rounded-md font-semibold transition-all`}
                          >
                            Learn More →
                          </Button>
                        </a>
                      ) : (
                        <a href={product.Link}>
                          <Button
                            className={`w-full ${product.buttonColor} text-white py-3 rounded-md font-semibold transition-all`}
                          >
                            Learn More →
                          </Button>
                        </a>
                      )
                    ) : (
                      <Button
                        className={`w-full ${product.buttonColor} text-white py-3 rounded-md font-semibold transition-all`}
                      >
                        Learn More →
                      </Button>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Explore;
