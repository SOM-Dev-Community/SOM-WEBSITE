import React, { useState } from 'react';
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
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              SOM IMPACT BLOG
            </h1>
          </div>

          {/* Featured Article */}
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div
              className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]"
              style={{
                backgroundImage: 'url("https://i.postimg.cc/9fxwvXbH/europe.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </span>
                <span className="text-gray-500 text-sm">March 15, 2025</span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                 SOM Europe Day of Evangelism
              </h2>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                During this time of fellowship, the brethren spent time in prayer before hitting the streets for evangelism; spreading the gospel of our Lord Jesus through our messenger angel throughout every nook and cranny of the city. Consequently, this spirit-inspired outreach raked souls into the kingdom of our Lord Jesus Christ. Glory to God!
              </p>

              <div className="flex items-center space-x-4 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
                  alt="Pastor Jerry"
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-900">Pastor Jerry</p>
                  <p className="text-sm text-gray-500">Chief Editor</p>
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
          <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-6 sm:gap-0">
            <h2 className="text-3xl font-bold text-gray-900">Explore Topics</h2>

            <div className="flex flex-wrap gap-3">
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
            </div>
          </div>

          {/* Blog Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link to={`/blog/${post.slug}`} key={post.slug}>
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden cursor-pointer">
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

                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=32&auto=format&fit=crop"
                        alt={post.author}
                        className="w-6 h-6 rounded-full"
                      />
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md">
              Load More Programs
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

