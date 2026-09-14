"use client";

import React from 'react';
import { ReactLenis } from 'lenis/react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Newsletter } from '@/components/pages/home/sections/Newsletter';
import { FeaturedPostSection } from './sections/featured-post-section';
import { PostsSection } from './sections/posts-section';

export function BlogPage() {
    return (
        <ReactLenis root>
            <div className="min-h-screen bg-white text-gray-800 overflow-x-hidden">
                <Header />

                <main>
                    <FeaturedPostSection />
                    <PostsSection />
                </main>

                <Newsletter />
                <Footer />
            </div>
        </ReactLenis>
    );
};
