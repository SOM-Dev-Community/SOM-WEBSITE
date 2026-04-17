import { Header } from '@/components/layout/Header';
import { Hero } from './sections/Hero';
import { FeaturedContent } from './sections/FeaturedContent';
import { EventsSection } from './sections/EventsSection';
import { ProductGrid } from './sections/ProductGrid';
import { Newsletter } from './sections/Newsletter';
import { Footer } from '@/components/layout/Footer';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <Header position='absolute' scrollEnabled={false} />
            <Hero />
            <FeaturedContent />
            <EventsSection />
            <ProductGrid />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default HomePage;