import React from 'react';
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
      buttonColor: 'bg-blue-600 hover:bg-blue-700'
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
      buttonColor: 'bg-green-600 hover:bg-green-700'
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
              Explore Our Products
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover a suite of tools and media built to inspire, empower,
              and deepen your walk with God.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <div
                  key={product.title}
                  className="bg-white rounded-2xl p-6 lg:p-8 shadow-md hover:shadow-xl transition-all duration-300 text-center border border-gray-100"
                >
                  <div
                    className={`${product.iconBg} rounded-full p-4 mb-6 inline-flex items-center justify-center`}
                  >
                    <Icon className={`w-10 h-10 ${product.iconColor}`} />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {product.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <Button
                    className={`w-full ${product.buttonColor} text-white py-3 rounded-md font-semibold transition-all`}
                  >
                    Learn More →
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Explore;
