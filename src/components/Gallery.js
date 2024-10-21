import React from 'react';

const Gallery = () => {
  const images = [
    'https://srmeaswari.ac.in/wp-content/uploads/2023/08/1-1.jpg',  // Placeholder images; replace with actual URLs
    'C:\Users\mvenk\OneDrive\Desktop\galleryalumni\thanu.jpeg',
    'https://universitykart.b-cdn.net/Content/upload/admin/kq1ky0s4.ibt.jpg',
    'https://srmeaswari.ac.in/wp-content/uploads/2023/08/3.jpg',
    'https://plus.unsplash.com/premium_photo-1723489348868-aa41e1ecac89?q=80&w=2878&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1551731409-43eb3e517a1a?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md">
              <img loading="lazy" src={image} alt={`Gallery ${index}`} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
