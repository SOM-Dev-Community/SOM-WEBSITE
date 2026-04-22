/* eslint-disable @next/next/no-img-element */
import { MasonryGrid } from '@/components/ui/mansory-grid';
import { imageList } from '@/public/images_list';
import * as React from 'react';

// --- Data for the cards ---
const images = [
    {
        alt: imageList.b_1.id,
        image: imageList.b_1.src
    },
    {
        alt: imageList.b_2.id,
        image: imageList.b_2.src
    },
    {
        alt: imageList.b_3.id,
        image: imageList.b_3.src
    },
    {
        alt: imageList.b_3.id,
        image: imageList.b_3.src
    },
    {
        alt: imageList.b_4.id,
        image: imageList.b_4.src
    },
    {
        alt: imageList.b_5.id,
        image: imageList.b_5.src
    },
    {
        alt: imageList.image_1.id,
        image: imageList.image_1.src
    },
    {
        alt: imageList.image_2.id,
        image: imageList.image_2.src
    },
    {
        alt: imageList.image_3.id,
        image: imageList.image_3.src
    },
    {
        alt: imageList.image_4.id,
        image: imageList.image_4.src
    },
    {
        alt: imageList.image_5.id,
        image: imageList.image_5.src
    },
    {
        alt: imageList.pks_1.id,
        image: imageList.pks_1.src
    },
    {
        alt: imageList.pks_2.id,
        image: imageList.pks_2.src
    },
    {
        alt: imageList.pks_3.id,
        image: imageList.pks_3.src
    },
    {
        alt: imageList.pco_1.id,
        image: imageList.pco_1.src
    },
];

// --- Reusable Card Component ---
const ImageCard = ({ image }: (typeof images)[0]) => (
    <div className="relative rounded-2xl overflow-hidden group transition-transform duration-300 ease-in-out hover:scale-105">
        <img
            src={image}
            alt={""}
            className="w-full h-auto object-cover"
            onError={(e) => {
                e.currentTarget.src = 'https://placehold.co/800x600/1a1a1a/ffffff?text=Image';
            }}
        />
    
    </div>
);


// --- Demo Component ---
export function ImageGallerySection () {
    const [columns, setColumns] = React.useState(4);

    // Function to determine columns based on screen width
    const getColumns = (width: number) => {
        if (width < 640) return 1;    // sm
        if (width < 1024) return 2;   // lg
        if (width < 1280) return 3;   // xl
        return 4;                     // 2xl and up
    };

    React.useEffect(() => {
        const handleResize = () => {
            setColumns(getColumns(window.innerWidth));
        };

        handleResize(); // Set initial columns on mount

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="w-full max-w-7xl min-h-screen bg-transparent px-4 text-inherit sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <MasonryGrid columns={columns} gap={4}>
                    {images.map((card, index) => (
                        <ImageCard key={index} {...card} />
                    ))}
                </MasonryGrid>
            </div>
        </div>
    );
};
