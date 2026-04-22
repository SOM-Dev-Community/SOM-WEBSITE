"use client";

import { Header } from '@/components/layout/Header';
import { Hero } from './sections/Hero';
import { FeaturedContent } from './sections/FeaturedContent';
import { EventsSection } from './sections/EventsSection';
import { ProductGrid } from './sections/ProductGrid';
import { Newsletter } from './sections/Newsletter';
import { Footer } from '@/components/layout/Footer';
import { ClipPathSection } from './sections/clip_path_section';
import { StickyGallerySection } from './sections/sticky_gallery_section';
import { ReactLenis } from 'lenis/react'

const HomePage = () => {
    return (
        <ReactLenis root>
            <div className="min-h-screen bg-white ">
                <Header position='absolute' scrollEnabled={false} />
                <Hero />
                <ClipPathSection />
                <StickyGallerySection />
                <FeaturedContent />
                <EventsSection />
                {/* <WhoAreWeSection showButton={true} /> */}
                <ProductGrid />
                <Newsletter />
                <Footer />
            </div>
        </ReactLenis>
    );
};

export default HomePage;