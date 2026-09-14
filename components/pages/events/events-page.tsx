"use client";

import React from 'react';
import { ReactLenis } from 'lenis/react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Newsletter } from '@/components/pages/home/sections/Newsletter';
import { LiveBroadcastSection } from './sections/live-broadcast-section';
import { UpcomingEventsSection } from './sections/upcoming-events-section';
import { HighlightsSection } from './sections/highlights-section';

export function EventsPage() {
    return (
        <ReactLenis root>
            <div className="min-h-screen bg-white text-gray-800 overflow-x-hidden">
                <Header />

                <main>
                    <LiveBroadcastSection />
                    <UpcomingEventsSection />
                    <HighlightsSection />
                </main>

                <Newsletter />
                <Footer />
            </div>
        </ReactLenis>
    );
};
