import { useState } from 'react';
import { X } from 'lucide-react';

interface ImageInfo {
  src: string;
  alt: string;
  description: string;
}

const galleryImages: ImageInfo[] = [
  {
    src: '/images/gallery/fried-calamari.jpg',
    alt: 'Fried Calamari',
    description: 'Tender calamari lightly battered and fried to perfection, served with our signature dipping sauce'
  },
  {
    src: '/images/gallery/fried-pickles.jpg',
    alt: 'Fried Pickles',
    description: 'Crispy fried pickle slices with a light, flavorful coating, served with our house-made ranch'
  },
  {
    src: '/images/gallery/fish-tacos.jpg',
    alt: 'Fish Tacos',
    description: 'Fresh fish tacos with cabbage slaw, red onions, corn, and our special sauce in corn tortillas'
  },
  {
    src: '/images/gallery/deluxe-burger.jpg',
    alt: 'Deluxe Burger',
    description: 'Our famous deluxe burger with multiple beef patties, cheese, bacon, tomato and lettuce on a brioche bun'
  },
  {
    src: '/images/gallery/cornbread-chili.jpg',
    alt: 'Cornbread and Chili',
    description: 'Homemade cornbread served with our hearty seafood chili topped with melted cheese'
  },
  {
    src: '/images/gallery/fish-sandwich.jpg',
    alt: 'Fried Fish Sandwich',
    description: 'Crispy fried fish fillet on a fresh roll with lettuce and tomato'
  },
  {
    src: '/images/gallery/seafood-platter.jpg',
    alt: 'Seafood Platter with Buffalo Tenders',
    description: 'A generous platter with fried seafood and buffalo-style chicken tenders with mac & cheese'
  },
  {
    src: '/images/gallery/bbq-tenders.jpg',
    alt: 'BBQ Smothered Tenders',
    description: 'Crispy chicken tenders smothered in tangy BBQ sauce with pulled pork'
  },
  {
    src: '/images/gallery/chicken-patties.jpg',
    alt: 'Homemade Chicken Patties',
    description: 'Our signature hand-formed chicken patties, perfectly seasoned and cooked to a golden brown'
  },
  {
    src: '/images/gallery/chicken-sandwich.jpg',
    alt: 'Fried Chicken Sandwich',
    description: 'Crispy fried chicken pieces on a fresh bun with lettuce and tomato'
  },
  {
    src: '/images/gallery/apple-pie.jpg',
    alt: 'Fried Apple Pies',
    description: 'Flaky hand pies filled with sweet apple filling and dusted with powdered sugar'
  },
  {
    src: '/images/gallery/burger-combo.jpg',
    alt: 'Burger Combo Meal',
    description: 'Complete meal with a deluxe burger, crispy fried seafood pieces, and crinkle-cut fries'
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<ImageInfo | null>(null);

  const openImage = (image: ImageInfo) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">        
        {/* Simple Gallery Grid - Fixed */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
              onClick={() => openImage(image)}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced image modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={closeImage}
          >
            <div 
              className="max-w-5xl w-full bg-white rounded-xl overflow-hidden relative shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
              <button 
                onClick={closeImage}
                className="absolute top-5 right-5 z-20 text-white bg-black/60 hover:bg-accent p-2 rounded-full transition-colors duration-300"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>
              
              <div className="w-full h-[70vh] bg-neutral-100">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt} 
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-heading font-bold text-primary">{selectedImage.alt}</h3>
                <div className="w-16 h-0.5 bg-accent mt-2 mb-3"></div>
                <p className="text-gray-700 mt-2 leading-relaxed">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}