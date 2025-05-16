'use client';

import { ReactNode, useEffect } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

export default function PageWrapper({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Force reload of images by clearing cache
    const clearImageCache = () => {
      // First attempt to clear fetch cache for images
      if ('caches' in window) {
        caches.keys().then(names => {
          names.forEach(name => {
            caches.delete(name);
          });
        });
      }

      // Then force reload all image elements
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        // Add random timestamp to force reload
        const originalSrc = img.getAttribute('src');
        if (originalSrc && !originalSrc.includes('?v=')) {
          img.setAttribute('src', `${originalSrc}?v=${Date.now() + Math.random()}`);
        } else if (originalSrc && originalSrc.includes('?v=')) {
          // If already has v parameter, replace it
          const baseSrc = originalSrc.split('?')[0];
          img.setAttribute('src', `${baseSrc}?v=${Date.now() + Math.random()}`);
        }
      });
    };
    
    // Run immediately and then after a short delay
    clearImageCache();
    setTimeout(clearImageCache, 200);
  }, []);

  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
} 