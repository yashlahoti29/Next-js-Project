'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Image from 'next/image';

const categories = ['All', 'Hair', 'Makeup', 'Spa', 'Nails'];

const galleryItems = [
  {
    id: 1,
    category: 'Hair',
    image: '/images/gallery/hair-1.jpg',
    title: 'Luxury Hair Styling',
  },
  {
    id: 2,
    category: 'Makeup',
    image: '/images/gallery/makeup-1.jpg',
    title: 'Bridal Makeup',
  },
  {
    id: 3,
    category: 'Spa',
    image: '/images/gallery/spa-1.jpg',
    title: 'Relaxing Spa Treatment',
  },
  {
    id: 4,
    category: 'Nails',
    image: '/images/gallery/nails-1.jpg',
    title: 'Nail Art Design',
  },
  {
    id: 5,
    category: 'Hair',
    image: '/images/gallery/hair-2.jpg',
    title: 'Color Transformation',
  },
  {
    id: 6,
    category: 'Makeup',
    image: '/images/gallery/makeup-2.jpg',
    title: 'Special Occasion Makeup',
  },
  {
    id: 7,
    category: 'Spa',
    image: '/images/gallery/spa-2.jpg',
    title: 'Facial Treatment',
  },
  {
    id: 8,
    category: 'Nails',
    image: '/images/gallery/nails-2.jpg',
    title: 'Gel Nail Design',
  },
  {
    id: 9,
    category: 'Hair',
    image: '/images/gallery/hair-3.jpg',
    title: 'Stylish Haircut',
  },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<null | typeof galleryItems[0]>(null);

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[30vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery-hero.jpg"
            alt="Our Gallery"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Gallery
            </h1>
            <p className="text-xl text-white">
              Explore our beautiful transformations
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex justify-center space-x-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-pink-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="text-white/90">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-pink-600 transition-colors"
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
              <h3 className="text-2xl font-semibold text-white">{selectedImage.title}</h3>
              <p className="text-white/90">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
} 