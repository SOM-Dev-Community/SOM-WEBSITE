
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo-sm.png';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">Who We Are</h3>
            <p className="text-gray-300 leading-relaxed mb-4">

              <strong>Loveworld SOM</strong><br></br>
              Founded by Rev. Dr. Chris Oyakhilome, uniting pastors’ children to know Christ and share the gospel.
            </p>
            <Link to="/" className="flex items-center">
              <img src={logo} alt="SOM Logo" className="h-20 w-auto" />
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/explore" className="text-gray-300 hover:text-white transition-colors">
                  Explore
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-white transition-colors">
                  Live Events
                </Link>
              </li>
              <li>
                <Link to="/preachers" className="text-gray-300 hover:text-white transition-colors">
                  Preachers Kids Network
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
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
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <em><p>© 2025 loveworld sons of ministry - All Rights Reserved.</p></em>
        </div>
      </div>
    </footer>
  );
};
