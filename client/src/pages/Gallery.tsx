import GalleryComponent from "@/components/Gallery";

export default function Gallery() {
  return (
    <main className="bg-pattern-section min-h-screen">
      {/* Hero Banner */}
      <div className="relative py-16 md:py-24 bg-primary/5 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Our Food Gallery
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Browse through our collection of authentic Frye House dishes. Every meal is prepared with care 
              using fresh ingredients for a truly satisfying experience.
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <GalleryComponent />
    </main>
  );
}