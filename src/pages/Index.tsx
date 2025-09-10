import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { FeaturedContent } from '../components/FeaturedContent';
import { EventsSection } from '../components/EventsSection';
import { ProductGrid } from '../components/ProductGrid';
import { Newsletter } from '../components/Newsletter';
import { Footer } from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <Hero />
      <FeaturedContent />
      <EventsSection />
      <ProductGrid />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;