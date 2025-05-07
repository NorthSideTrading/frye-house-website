import React from 'react';

// Import a single image to test
import calamariImage from '../public/images/gallery/fried-calamari.jpg';

export default function TestImages() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Image Test</h1>
      <img src={calamariImage} alt="Fried Calamari" className="w-64 h-64 object-cover" />
    </div>
  );
}