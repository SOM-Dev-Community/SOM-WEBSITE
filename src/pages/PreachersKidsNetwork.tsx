import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Newsletter } from '../components/Newsletter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Play } from 'lucide-react';

const PreachersKidsNetwork = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const testimonials = [
    {
      name: 'Sam Christian',
      role: 'PK, Ohio',
      content: 'Being part of SOM has been instrumental in my spiritual journey and development as a young minister.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop'
    },
    {
      name: 'Pastor Michael Chen',
      role: 'PK Director',
      content: 'It\'s always refreshing to meet youth ready to make a difference in their communities.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop'
    },
    {
      name: 'Pastor Emily Rodriguez',
      role: 'Special Coordinator',
      content: 'Engaging the next generation through biblical teachings is our top priority.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop'
    }
  ];

  const upcomingEvents = [
    {
      date: 'MAR 15',
      title: 'Family Summit',
      description: 'Join us for an inspiring summit focusing on strengthening families.',
      color: 'bg-pink-500'
    },
    {
      date: 'JUNE 8',
      title: 'Virtual Meetup',
      description: 'First virtual meetup focused on youth testimonial and fellowship.',
      color: 'bg-blue-500'
    },
    {
      date: 'JULY 20',
      title: 'Leadership Workshop',
      description: 'Learn the essential leadership principles for effective ministry.',
      color: 'bg-pink-500'
    }
  ];

  const summitHighlights = [
    {
      title: 'Finding Your Identity',
      description: 'Insights from our ministry journey',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=400&auto=format&fit=crop'
    },
    {
      title: 'Worship Night',
      description: 'Evening of powerful worship and praise',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400&auto=format&fit=crop'
    },
    {
      title: 'Group Sessions',
      description: 'Small groups ministering in unison',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=400&auto=format&fit=crop'
    }
  ];

  const latestArticles = [
    {
      title: 'Navigating Faith in College',
      description: 'Practical guidance for maintaining spiritual life during academic years',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=400&auto=format&fit=crop'
    },
    {
      title: 'Balance: Family & Ministry',
      description: 'Finding harmony between family responsibilities and ministry calling',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&auto=format&fit=crop'
    }
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    setContactForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Testimony Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold mb-8">
              Testimony Section
            </h1>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-400 mb-6">
                Testimony of Supernatural
                Healing
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <div className="text-white">
                <p className="font-semibold">Sam Christian</p>
                <p className="text-blue-400">PK, Ohio</p>
              </div>
            </div>
            
            <div className="relative">
              <div 
                className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]"
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=6000&auto=format&fit=crop")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 rounded-full p-6 group">
                    <Play className="h-12 w-12 text-white group-hover:scale-110 transition-transform" fill="white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-blue-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Upcoming Events
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className={`${event.color} text-white rounded-lg p-6`}>
                <div className="text-2xl font-bold mb-2">{event.date}</div>
                <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                <p className="text-white/90 mb-4">{event.description}</p>
                <Button className="bg-white text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-md">
                  Register Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summit Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Summit Highlights
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {summitHighlights.map((highlight, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${highlight.image})` }}
                ></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Latest Articles
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {latestArticles.map((article, index) => (
              <div key={index} className="flex space-x-4">
                <div 
                  className="w-24 h-24 bg-cover bg-center rounded-lg flex-shrink-0"
                  style={{ backgroundImage: `url(${article.image})` }}
                ></div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{article.description}</p>
                  <Button variant="link" className="text-blue-600 px-0 mt-2">
                    Read more →
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Our Latest Magazine */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">
                Get Our Latest Magazine
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Downloadable think pieces of Christ and SOM magazine to lift healing guides 
                for the heart and soul.
              </p>
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-md">
                Download Free
              </Button>
            </div>
            
            <div className="flex justify-center">
              <div className="bg-white rounded-lg p-4 shadow-2xl">
                <div className="w-48 h-64 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
                  MAGAZINE
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Send Us Your Questions */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Send Us Your Questions
            </h2>
          </div>
          
          <form onSubmit={handleContactSubmit} className="space-y-6">
            <Input
              type="text"
              placeholder="Name"
              value={contactForm.name}
              onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-md"
              required
            />
            
            <Input
              type="email"
              placeholder="Email"
              value={contactForm.email}
              onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-md"
              required
            />
            
            <Textarea
              placeholder="Your Question"
              value={contactForm.message}
              onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-md resize-none"
              required
            />
            
            <Button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold"
            >
              Send Question
            </Button>
          </form>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default PreachersKidsNetwork;