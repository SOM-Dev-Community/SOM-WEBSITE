
import React from 'react';
import { Button } from '@/components/ui/button';
import { GraduationCap, Tv, Headphones, BookOpen, ArrowRight } from 'lucide-react';

export const ProductsSection = () => {
  const products = [
    {
      title: 'SOMLA',
      description: 'Your gateway to comprehensive biblical education and spiritual growth.',
      icon: GraduationCap,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      buttonColor: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      title: 'SOM TV',
      description: 'Stream inspiring content and educational videos anytime, anywhere.',
      icon: Tv,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      buttonColor: 'bg-red-600 hover:bg-red-700'
    },
    {
      title: '4:12 Podcast',
      description: 'Listen to thought-provoking discussions and spiritual insights on the go.',
      icon: Headphones,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      buttonColor: 'bg-purple-600 hover:bg-purple-700'
    },
    {
      title: "Preacher's Kid Magazine",
      description: 'Engaging stories and articles for the next generation of believers.',
      icon: BookOpen,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      buttonColor: 'bg-green-600 hover:bg-green-700'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Explore Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our suite of powerful tools and content designed to
            enrich your spiritual journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <div
                key={product.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
              >
                <div className={`${product.bgColor} rounded-2xl p-4 mb-6 inline-block`}>
                  <IconComponent className={`h-8 w-8 text-transparent bg-clip-text bg-gradient-to-r ${product.color}`} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {product.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>

                <Button
                  className={`w-full ${product.buttonColor} text-white py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all group`}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
