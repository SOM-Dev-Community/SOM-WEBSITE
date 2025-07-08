import React from 'react';
import NavBar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InsightsSection from '../components/InsightSection';
import EventsSection from '../components/EventsSection';
import Footer from '../components/Footer';

const HomePage = () => (
  <div style={{width: '100%'}}>
    <NavBar />
    <HeroSection />
    <InsightsSection />
    <EventsSection />
    <Footer />
  </div>
);

export default HomePage;
