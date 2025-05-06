import GalleryComponent from "@/components/Gallery";

export default function Gallery() {
  return (
    <main>
      <div className="pt-8 pb-4 bg-primary/5">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Our Food Gallery
          </h1>
          <p className="text-lg text-foreground max-w-3xl">
            Browse through our gallery of authentic Frye House dishes. Every meal is prepared with care using fresh ingredients for a truly satisfying experience.
          </p>
        </div>
      </div>
      
      <GalleryComponent />
    </main>
  );
}