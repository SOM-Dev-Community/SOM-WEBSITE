"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { imageList } from '@/public/images_list';
import { ScrollAnimation } from '../scroll-animation';

const quickLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/pkn', label: 'Preachers Kids Network' },
  { href: '/explore', label: 'Explore' },
  { href: '/blog', label: 'Blog' },
  { href: '/events', label: 'Live Events' },
  { href: '/magazine', label: 'Magazine' },
  { href: '/contact', label: 'Contact Us' },
];

const headingClass = 'mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-white/60';
const linkClass = 'text-slate-300 transition-colors hover:text-white';

export const Footer = () => {
  return (
    <motion.footer
      className="bg-slate-950 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <motion.div
          className="grid md:grid-cols-3 gap-10"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* About Us */}
          <ScrollAnimation>
            <h3 className={headingClass}>Who We Are</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Loveworld SOM</strong>
              <br />
              Founded by Rev. Dr. Chris Oyakhilome, uniting pastors’ children to know Christ and share the gospel.
            </p>
            <Link href="/" className="inline-flex items-center">
              <Image
                width={100}
                unoptimized
                height={100}
                src={imageList.som_logo.src} alt="SOM Logo" className="h-16 w-auto" />
            </Link>
          </ScrollAnimation>

          {/* Quick Links */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className={headingClass}>Quick Links</h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Us */}
          <ScrollAnimation>
            <h3 className={headingClass}>Contact Us</h3>
            <div className="space-y-3 text-sm text-slate-300">
              <p>+234 000 000 000</p>
              <p>
                <a href="mailto:info@loveworldsonsofministry.org" className={linkClass}>
                  info@loveworldsonsofministry.org
                </a>
              </p>
            </div>
          </ScrollAnimation>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-slate-400"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <p>© {new Date().getFullYear()} Loveworld Sons of Ministry. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};
