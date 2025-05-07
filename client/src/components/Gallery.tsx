import { useState } from 'react';
import { X } from 'lucide-react';

// Import all images
import foodImage1 from '@/assets/gallery/frye-food-1.jpg';
import foodImage2 from '@/assets/gallery/frye-food-2.jpg';
import foodImage3 from '@/assets/gallery/frye-food-3.jpg';
import foodImage4 from '@/assets/gallery/frye-food-4.jpg';
import foodImage5 from '@/assets/gallery/frye-food-5.jpg';
import foodImage6 from '@/assets/gallery/frye-food-6.jpg';
import foodImage7 from '@/assets/gallery/frye-food-7.jpg';
import foodImage8 from '@/assets/gallery/frye-food-8.jpg';
import foodImage9 from '@/assets/gallery/frye-food-9.jpg';
import foodImage10 from '@/assets/gallery/frye-food-10.jpg';
import foodImage11 from '@/assets/gallery/frye-food-11.jpg';
import foodImage12 from '@/assets/gallery/frye-food-12.jpg';
import foodImage13 from '@/assets/gallery/frye-food-13.jpg';
import foodImage14 from '@/assets/gallery/frye-food-14.jpg';
import foodImage15 from '@/assets/gallery/frye-food-15.jpg';
import foodImage16 from '@/assets/gallery/frye-food-16.jpg';

interface ImageInfo {
  src: string;
  alt: string;
  description: string;
}

const galleryImages: ImageInfo[] = [
  {
    src: foodImage1,
    alt: 'Fried chicken sandwich with fries',
    description: 'Our signature fried chicken sandwich served with crispy fries'
  },
  {
    src: foodImage2,
    alt: 'Beef burger on a brioche bun',
    description: 'Juicy beef patty on a fresh brioche bun with lettuce'
  },
  {
    src: foodImage3,
    alt: 'Fried seafood over fries',
    description: 'Fresh seafood perfectly fried and served over crispy fries'
  },
  {
    src: foodImage4,
    alt: 'Beef tacos with toppings',
    description: 'Savory beef tacos with fresh vegetables and special sauce'
  },
  {
    src: foodImage5,
    alt: 'Double cheeseburger with fries',
    description: 'Our famous double cheeseburger with all the fixings and fries'
  },
  {
    src: foodImage6,
    alt: 'Triple decker burger',
    description: 'For the serious appetite - our triple decker burger with cheese'
  },
  {
    src: foodImage7,
    alt: 'Lobster pasta dish',
    description: 'Fresh Maine lobster served with pasta in a creamy sauce'
  },
  {
    src: foodImage8,
    alt: 'Assorted fried foods platter',
    description: 'Variety platter with fried chicken, sandwiches, and sides'
  },
  {
    src: foodImage9,
    alt: 'Pulled pork sandwich',
    description: 'Savory pulled pork sandwich with pickles on a brioche bun'
  },
  {
    src: foodImage10,
    alt: 'Cheeseburger with fries and nuggets',
    description: 'Classic cheeseburger served with fries and chicken nuggets'
  },
  {
    src: foodImage11,
    alt: 'Fried fish sandwich',
    description: 'Crispy fried fish sandwich with fresh lettuce'
  },
  {
    src: foodImage12,
    alt: 'Fried chicken sandwich',
    description: 'Crispy fried chicken sandwich with all the fixings'
  },
  {
    src: foodImage13,
    alt: 'Lobster roll',
    description: 'Maine lobster roll filled with fresh lobster meat'
  },
  {
    src: foodImage14,
    alt: 'Double burgers',
    description: 'Two of our signature burgers, freshly made and ready to enjoy'
  },
  {
    src: foodImage15,
    alt: 'Family meal with burger and fried chicken',
    description: 'Perfect family meal with burger, chicken nuggets, and fries'
  },
  {
    src: foodImage16,
    alt: 'Seafood platter with onion rings',
    description: 'Generous seafood platter with crispy onion rings and dipping sauces'
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