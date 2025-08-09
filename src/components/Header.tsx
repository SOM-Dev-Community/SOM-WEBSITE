import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const navLinks = [
    { link: "/", label: "Home" },
    { link: "/about", label: "About Us" },
    { link: "/preachers", label: "Preachers Kids Network" },
    { link: "/explore", label: "Explore" },
    { link: "/blog", label: "Blog" },
    { link: "/events", label: "Live Events" },
  ];
  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full md:w-11/12 shadow-xl sm:rounded-3xl border border-white/0 bg-gradient-to-br from-white/30 via-white/10 to-white/5 backdrop-blur-2xl sm:mt-5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src="https://i.postimg.cc/1RYxYN01/logo-sm.png"
                alt="SOM Logo"
                className="h-14 w-auto drop-shadow-lg rounded-xl"
              />
            </Link>
          </div>

          <nav className="hidden lg:flex space-x-6">
            {navLinks.map(({ link, label }) => (
              <Link
                key={link}
                to={link}
                className="text-blue-400 font-semibold hover:text-blue-600 transition-colors px-2 py-1 rounded-lg hover:bg-blue-50/40"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white px-6 py-2 rounded-full shadow-md font-semibold transition-all duration-200">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-blue-700 hover:text-blue-900 transition-colors p-2 rounded-lg"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-gradient-to-br from-white/80 via-white/60 to-white/30 backdrop-blur-xl shadow-2xl rounded-3xl border-t border-white/30 z-40 animate-fade-in">
            <nav className="py-4 px-4 space-y-2">
              {navLinks.map(({ link, label }) => (
                <Link
                  key={link}
                  to={link}
                  className="block py-2 px-3 text-gray-700 font-semibold rounded-lg hover:bg-blue-50/40 hover:text-blue-600 transition-colors"
                >
                  {label}
                </Link>
              ))}
              <div className="pt-4">
                <Link to="/contact" onClick={toggleMenu}>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white py-2 rounded-full shadow font-semibold transition-all duration-200">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
