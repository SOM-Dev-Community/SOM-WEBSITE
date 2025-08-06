import React from 'react';
import { Button } from '@/components/ui/button';

export const ProductGrid = () => {
  const products = [
    {
      title: 'Discover the Best Resources for Your Spiritual Journey',
      description: 'Our array of spiritual products, including insights and revelations...',
      image: 'src/assets/Worship.JPG',
      buttonText: 'Learn More'
    },
    {
      title: 'SOMLA: Your Gateway to Spiritual Growth and Learning',
      description: 'Word ministries focused on the teachings of Jesus...',
      image: 'src/assets/SOMLA.jpg',
      buttonText: 'Sign Up'
    },
    {
      title: 'SOM TV: Inspiring Content for Your Spiritual Journey',
      description: 'Watch inspiring content that enriches your spiritual experience...',
      image: 'src/assets/Evang.JPG',
      buttonText: 'Watch'
    },
    {
      title: '4:12 Podcast: Your Gateway to learning and entertainment',
      description: 'Start inspiring prayers in various spoken and gathered churches...',
      image: 'src/assets/set.JPG',
      buttonText: 'Listen'
    },
    {
      title: "Preacher's Kid Magazine",
      description: 'An innovative and progressive brand, with excellence and power in our approach and attitude to life',
      image: 'src/assets/PKF.png',
      buttonText: 'Learn more'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Explore Our Exciting Range of SOM
            Products Tailored for You
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow w-full h-full"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${product.image})` }}
              ></div>
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {product.description}
                </p>
                <div className="mt-auto">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm">
                    {product.buttonText}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};