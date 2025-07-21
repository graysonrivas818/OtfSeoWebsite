// src/contexts/ImageCacheContext.js
import React, { createContext, useState } from 'react';

export const ImageCacheContext = createContext();

export const ImageCacheProvider = ({ children }) => {
  const [cache, setCache] = useState({});

  const preloadImage = (src) => {
    if (!cache[src]) {
      const img = new Image();
      img.src = src;
      setCache(prev => ({ ...prev, [src]: true }));
    }
  };

  return (
    <ImageCacheContext.Provider value={{ cache, preloadImage }}>
      {children}
    </ImageCacheContext.Provider>
  );
};