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
  description: string;
}

const galleryImages: ImageInfo[] = [
  {
    src: friedCalamari,
    alt: 'Fried Calamari',
    description: 'Tender calamari lightly battered and fried to perfection, served with our signature dipping sauce'
  },
  {
    src: friedPickles,
    alt: 'Fried Pickles',
    description: 'Crispy fried pickle slices with a light, flavorful coating, served with our house-made ranch'
  },
  {
    src: fishTacos,
    alt: 'Fish Tacos',
    description: 'Fresh fish tacos with cabbage slaw, red onions, corn, and our special sauce in corn tortillas'
  },
  {
    src: deluxeBurger,
    alt: 'Deluxe Burger',
    description: 'Our famous deluxe burger with multiple beef patties, cheese, bacon, tomato and lettuce on a brioche bun'
  },
  {
    src: cornbreadChili,
    alt: 'Cornbread and Chili',
    description: 'Homemade cornbread served with our hearty seafood chili topped with melted cheese'
  },
  {
    src: fishSandwich,
    alt: 'Fried Fish Sandwich',
    description: 'Crispy fried fish fillet on a fresh roll with lettuce and tomato'
  },
  {
    src: seafoodPlatter,
    alt: 'Seafood Platter with Buffalo Tenders',
    description: 'A generous platter with fried seafood and buffalo-style chicken tenders with mac & cheese'
  },
  {
    src: bbqTenders,
    alt: 'BBQ Smothered Tenders',
    description: 'Crispy chicken tenders smothered in tangy BBQ sauce with pulled pork'
  },
  {
    src: chickenPatties,
    alt: 'Homemade Chicken Patties',
    description: 'Our signature hand-formed chicken patties, perfectly seasoned and cooked to a golden brown'
  },
  {
    src: chickenSandwich,
    alt: 'Fried Chicken Sandwich',
    description: 'Crispy fried chicken pieces on a fresh bun with lettuce and tomato'
  },
  {
    src: applePie,
    alt: 'Fried Apple Pies',
    description: 'Flaky hand pies filled with sweet apple filling and dusted with powdered sugar'
  },
  {
    src: burgerCombo,
    alt: 'Burger Combo Meal',
    description: 'Complete meal with a deluxe burger, crispy fried seafood pieces, and crinkle-cut fries'
  },
  {
    src: image1,
    alt: 'Chicken Sandwich Special',
    description: 'Our signature chicken sandwich with fresh toppings on a toasted bun'
  },
  {
    src: image2,
    alt: 'Seafood Platter Deluxe',
    description: 'Assorted seafood fried to golden perfection with our homemade sauces'
  },
  {
    src: image3,
    alt: 'Chicken Dinner Basket',
    description: 'Generous portion of fried chicken with all the sides'
  },
  {
    src: image4,
    alt: 'Fresh Fish Basket',
    description: 'Lightly breaded and perfectly cooked fish filets'
  },
  {
    src: image5,
    alt: 'Seafood Combo',
    description: 'A seafood lover\'s dream with multiple varieties of fresh-caught seafood'
  },
  {
    src: image6,
    alt: 'Fried Shrimp Basket',
    description: 'Jumbo shrimp lightly battered and fried to golden perfection'
  },
  {
    src: image7,
    alt: 'Grilled Chicken Sandwich',
    description: 'Tender grilled chicken with lettuce and tomato on a fresh bun'
  },
  {
    src: image8,
    alt: 'Buffalo Chicken Wrap',
    description: 'Spicy buffalo chicken with fresh vegetables wrapped in a soft tortilla'
  },
  {
    src: image9,
    alt: 'Homemade Pie Slice',
    description: 'Freshly baked pie with a flaky crust and sweet filling'
  },
  {
    src: image10,
    alt: 'Double Cheeseburger',
    description: 'Two beef patties with melted cheese and fresh toppings'
  },
  {
    src: image11,
    alt: 'Seafood Feast',
    description: 'A feast of mixed seafood served with our special sauces'
  },
  {
    src: image12,
    alt: 'Chicken Tenders & Fries',
    description: 'Crispy chicken tenders served with golden French fries'
  },
  {
    src: image13,
    alt: 'Frye House Special Platter',
    description: 'Our signature platter with a variety of customer favorites'
  },
  {
    src: image14,
    alt: 'Shrimp Basket',
    description: 'Basket of perfectly fried shrimp with our special seasoning'
  },
  {
    src: image15,
    alt: 'Loaded Sandwich',
    description: 'Sandwich piled high with your favorite meats and toppings'
  },
  {
    src: image16,
    alt: 'Maine Lobster Roll',
    description: 'Fresh Maine lobster in a buttered and toasted roll'
  },
  {
    src: image17,
    alt: 'Seafood Mac & Cheese',
    description: 'Creamy mac & cheese topped with fresh seafood'
  },
  {
    src: image18,
    alt: 'Classic Burger',
    description: 'Our classic burger with all your favorite toppings'
  },
  {
    src: image19,
    alt: 'Fried Haddock',
    description: 'Fresh haddock lightly battered and fried to perfection'
  },
  {
    src: image20,
    alt: 'Fish & Chips',
    description: 'Traditional fish and chips with our homemade tartar sauce'
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