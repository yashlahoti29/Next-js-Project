'use client';

import { useEffect } from 'react';

export default function ForceReload() {
  useEffect(() => {
    // Force a reload of all images after a delay
    const reloadTimer = setTimeout(() => {
      // Clear the browser cache for images
      if ('caches' in window) {
        caches.keys().then(cacheNames => {
          cacheNames.forEach(cacheName => {
            caches.delete(cacheName);
          });
        });
      }
      
      // Reload all image elements with a cache-busting URL parameter
      document.querySelectorAll('img').forEach(img => {
        const src = img.src;
        if (src) {
          const cacheBuster = `?reload=${Date.now()}`;
          img.src = src.includes('?') 
            ? src.split('?')[0] + cacheBuster 
            : src + cacheBuster;
        }
      });
    }, 500);
    
    return () => clearTimeout(reloadTimer);
  }, []);

  return null; // This component doesn't render anything
} 