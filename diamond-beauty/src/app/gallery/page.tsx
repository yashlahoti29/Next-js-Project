'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Image from 'next/image';

const galleryItems = [
  {
    id: 2,
    image: '/images/5.jpeg',
    title: 'Groom Makeup',
  },
  {
    id: 3,
    image: '/images/massage services.jpeg',
    title: 'Relaxing Spa Treatment',
  },
  {
    id: 4,
    image: '/images/8.jpeg',
    title: 'Nail Art Design',
  },
  {
    id: 5,
    image: '/images/4.jpeg',
    title: 'Color Transformation',
  },
  {
    id: 6,
    image: '/images/3.jpeg',
    title: 'Special Occasion Makeup',
  },
  {
    id: 7,
    image: '/images/facial services.jpeg',
    title: 'Facial Treatment',
  },
  {
    id: 9,
    image: '/images/1.jpg',
    title: 'Stylish Haircut',
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<null | typeof galleryItems[0]>(null);

  return (
    <main className="min-h-screen bg-cream">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[30vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/7.jpg"
            alt="Our Gallery"
            fill
            sizes="100vw"
            quality={80}
            loading="eager"
            className="object-cover hero-image"
            priority
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-cream mb-4">
              Our Gallery
            </h1>
            <p className="text-xl text-cream">
              Explore our beautiful transformations
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={75}
                  loading="lazy"
                  className="object-cover hero-image group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-xl font-semibold text-cream">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-cream hover:text-mint transition-colors"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-semibold text-cream">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </main>
  );
} 