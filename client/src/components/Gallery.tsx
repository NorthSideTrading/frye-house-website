import { useState } from 'react';
import { X } from 'lucide-react';

// Import images directly
import friedCalamari from '@/assets/gallery/fried-calamari.jpg';
import friedPickles from '@/assets/gallery/fried-pickles.jpg';
import fishTacos from '@/assets/gallery/fish-tacos.jpg';
import deluxeBurger from '@/assets/gallery/deluxe-burger.jpg';
import cornbreadChili from '@/assets/gallery/cornbread-chili.jpg';
import fishSandwich from '@/assets/gallery/fish-sandwich.jpg';
import seafoodPlatter from '@/assets/gallery/seafood-platter.jpg';
import bbqTenders from '@/assets/gallery/bbq-tenders.jpg';
import chickenPatties from '@/assets/gallery/chicken-patties.jpg';
import chickenSandwich from '@/assets/gallery/chicken-sandwich.jpg';
import applePie from '@/assets/gallery/apple-pie.jpg';
import burgerCombo from '@/assets/gallery/burger-combo.jpg';

// Additional images
import image1 from '@/assets/gallery/486690171_1263300221837393_1436366903878772182_n.jpg';
import image2 from '@/assets/gallery/487377884_1264436278390454_8773674130860900824_n.jpg';
import image3 from '@/assets/gallery/487925145_1267694434731305_1269054901253905838_n.jpg';
import image4 from '@/assets/gallery/487980399_1266173068216775_4660398503708095578_n.jpg';
import image5 from '@/assets/gallery/488026039_1266169921550423_583545511506543321_n.jpg';
import image6 from '@/assets/gallery/488887172_1271694624331286_4920197146466631889_n.jpg';
import image7 from '@/assets/gallery/488912550_1273650647469017_3620668529530846844_n.jpg';
import image8 from '@/assets/gallery/489454915_1273694950797920_8102713312156389123_n.jpg';
import image9 from '@/assets/gallery/482984366_1250764756424273_1979609327465023666_n.jpg';
import image10 from '@/assets/gallery/484521789_3442368992567026_4377564385774821010_n.jpg';
import image11 from '@/assets/gallery/486641544_1262356321931783_3794373854376178306_n.jpg';
import image12 from '@/assets/gallery/486662832_1263300258504056_4195443100909693003_n.jpg';
import image13 from '@/assets/gallery/487113495_1264438181723597_729783571607825135_n.jpg';
import image14 from '@/assets/gallery/487183336_1263440011823414_5576769489597804407_n.jpg';
import image15 from '@/assets/gallery/487480645_1267694311397984_1566155661411817192_n.jpg';
import image16 from '@/assets/gallery/487509735_1264472321720183_3517356073179878111_n.jpg';
import image17 from '@/assets/gallery/487839544_1266169941550421_2669517215809895252_n.jpg';
import image18 from '@/assets/gallery/487857865_1269141471253268_6195460534081170036_n.jpg';
import image19 from '@/assets/gallery/488066709_1266172994883449_6040987241861491594_n.jpg';
import image20 from '@/assets/gallery/480526483_1233456451488437_1391924938452794111_n.jpg';

interface ImageInfo {
  src: string;
  alt: string;
}

const galleryImages: ImageInfo[] = [
  {
    src: friedCalamari,
    alt: 'Fried Calamari'
  },
  {
    src: friedPickles,
    alt: 'Fried Pickles'
  },
  {
    src: fishTacos,
    alt: 'Fish Tacos'
  },
  {
    src: deluxeBurger,
    alt: 'Deluxe Burger'
  },
  {
    src: cornbreadChili,
    alt: 'Cornbread and Chili'
  },
  {
    src: fishSandwich,
    alt: 'Fried Fish Sandwich'
  },
  {
    src: seafoodPlatter,
    alt: 'Seafood Platter with Buffalo Tenders'
  },
  {
    src: bbqTenders,
    alt: 'BBQ Smothered Tenders'
  },
  {
    src: chickenPatties,
    alt: 'Homemade Chicken Patties'
  },
  {
    src: chickenSandwich,
    alt: 'Fried Chicken Sandwich'
  },
  {
    src: applePie,
    alt: 'Fried Apple Pies'
  },
  {
    src: burgerCombo,
    alt: 'Burger Combo Meal'
  },
  {
    src: image1,
    alt: 'Chicken Sandwich Special'
  },
  {
    src: image2,
    alt: 'Seafood Platter Deluxe'
  },
  {
    src: image3,
    alt: 'Chicken Dinner Basket'
  },
  {
    src: image4,
    alt: 'Fresh Fish Basket'
  },
  {
    src: image5,
    alt: 'Seafood Combo'
  },
  {
    src: image6,
    alt: 'Fried Shrimp Basket'
  },
  {
    src: image7,
    alt: 'Grilled Chicken Sandwich'
  },
  {
    src: image8,
    alt: 'Buffalo Chicken Wrap'
  },
  {
    src: image9,
    alt: 'Homemade Pie Slice'
  },
  {
    src: image10,
    alt: 'Double Cheeseburger'
  },
  {
    src: image11,
    alt: 'Seafood Feast'
  },
  {
    src: image12,
    alt: 'Chicken Tenders & Fries'
  },
  {
    src: image13,
    alt: 'Frye House Special Platter'
  },
  {
    src: image14,
    alt: 'Shrimp Basket'
  },
  {
    src: image15,
    alt: 'Loaded Sandwich'
  },
  {
    src: image16,
    alt: 'Maine Lobster Roll'
  },
  {
    src: image17,
    alt: 'Seafood Mac & Cheese'
  },
  {
    src: image18,
    alt: 'Classic Burger'
  },
  {
    src: image19,
    alt: 'Fried Haddock'
  },
  {
    src: image20,
    alt: 'Fish & Chips'
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
              
              <div className="w-full h-[80vh] bg-neutral-100">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt} 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}