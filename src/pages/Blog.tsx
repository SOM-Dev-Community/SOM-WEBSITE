import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Newsletter } from '../components/Newsletter';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Impact Investment Trends 2025',
      description: 'Latest insights on how impact investments are shaping the future of sustainable business.',
      author: 'Alex Chen',
      date: 'March 10, 2025',
      category: 'News Update',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=400&auto=format&fit=crop'
    },
    {
      title: 'Innovation Summit Highlights',
      description: 'Key takeaways from our annual summit on sustainable innovation and technology.',
      author: 'Maria Garcia',
      date: 'March 5, 2025',
      category: 'Event Recap',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400&auto=format&fit=crop'
    },
    {
      title: 'Changemaker Series: Emma White',
      description: 'An exclusive interview with the founder of GreenTech Solutions on sustainable innovation.',
      author: 'David Park',
      date: 'March 1, 2025',
      category: 'Interview',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=400&auto=format&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              SOM IMPACT BLOG
            </h1>
          </div>
          
          {/* Featured Article */}
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div 
              className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=6000&auto=format&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            ></div>
            
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </span>
                <span className="text-gray-500 text-sm">March 15, 2025</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                The Future of Sustainable Business: A New Perspective
              </h2>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Exploring how modern businesses are adapting to meet environmental challenges while maintaining profitability and social impact.
              </p>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2">
                  <img 
                    src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop'
                    alt="Sarah Johnson"
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Sarah Johnson</p>
                    <p className="text-sm text-gray-500">Chief Editor</p>
                  </div>
                </div>
              </div>
              
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md">
                Read More →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Topics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Explore Topics
            </h2>
            
            <div className="flex space-x-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                All Posts
              </Button>
              <Button variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-50 px-4 py-2 rounded-md">
                News
              </Button>
              <Button variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-50 px-4 py-2 rounded-md">
                Events
              </Button>
              <Button variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-50 px-4 py-2 rounded-md">
                Interviews
              </Button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${post.image})` }}
                ></div>
                
                <div className="p-6">
                  <div className="text-blue-600 text-sm font-semibold mb-2">
                    {post.category}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {post.description}
                  </p>
                  
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <img 
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=32&auto=format&fit=crop" 
                        alt={post.author}
                        className="w-6 h-6 rounded-full"
                      />
                      <span>{post.author}</span>
                    </div>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Blog;