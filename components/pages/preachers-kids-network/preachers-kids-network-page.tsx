"use client";

import React from 'react';
import { ReactLenis } from 'lenis/react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Newsletter } from '@/components/pages/home/sections/Newsletter';
import { TestimoniesSection } from './sections/testimonies-section';
import { UpcomingEventsSection } from './sections/upcoming-events-section';
import { VideosSection } from './sections/videos-section';
import { MagazineSection } from './sections/magazine-section';
import { QuestionsSection } from './sections/questions-section';

export function PreachersKidsNetwordPage() {
  return (
    <ReactLenis root>
      <div className="min-h-screen bg-white text-gray-800 overflow-x-hidden">
        <Header />

        <main>
          <TestimoniesSection />
          <UpcomingEventsSection />
          <VideosSection />
          <MagazineSection />
          <QuestionsSection />
        </main>

        <Newsletter />
        <Footer />
      </div>
    </ReactLenis>
  );
};
