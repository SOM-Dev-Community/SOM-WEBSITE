"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { imageList } from '@/public/images_list';
import { ScrollAnimation } from '../scroll-animation';

export const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* About Us */}
          <ScrollAnimation
          >
            <h3 className="text-xl font-bold mb-4">Who We Are</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>Loveworld SOM</strong><br></br>
              Founded by Rev. Dr. Chris Oyakhilome, uniting pastors’ children to know Christ and share the gospel.
            </p>
            <Link href="/" className="flex items-center">
              <Image
                width={100}
                unoptimized
                height={100}
                src={imageList.som_logo.src} alt="SOM Logo" className="h-20 w-auhref" />
            </Link>
          </ScrollAnimation>

          {/* Quick Links */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/explore" className="text-gray-300 hover:text-white transition-colors">
                  Explore
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-white transition-colors">
                  Live Events
                </Link>
              </li>
              <li>
                <Link href="/preachers" className="text-gray-300 hover:text-white transition-colors">
                  Preachers Kids Network
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Us */}
          <ScrollAnimation
          >
            <h3 className="text-xl font-bold mb-4">CONTACT US</h3>
            <div className="space-y-2 text-gray-300">
              <p>+234 000 000 000</p>
              <p>
                <a
                  href="mailto:info@loveworldsonsofministry.org"
                  className="hover:underline text-gray-300 hover:text-white transition-colors"
                >
                  info@loveworldsonsofministry.org
                </a>
              </p>
            </div>
          </ScrollAnimation>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <em>
             <p>© {new Date().getFullYear()} loveworld sons of ministry - All Rights Reserved.</p>
          </em>
        </motion.div>
      </div>
    </motion.footer >
  );
};
