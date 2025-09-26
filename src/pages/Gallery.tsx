import { Button } from "@/components/ui/button";
import { GalleryImage } from "@/components/ImageModal";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const navigate = useNavigate();

  // Placeholder images for the gallery
  const galleryImages = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    src: `https://images.unsplash.com/photo-${1600000000000 + i * 1000000}?w=600&h=400&fit=crop&crop=center`,
    alt: `Foto ${i + 1} do Resort Gran Paradiso`
  }));

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-[var(--gradient-hero)] text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 mb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
              className="text-primary-foreground hover:bg-white/20"
            >
              <ArrowLeft size={20} />
              Voltar
            </Button>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Galeria de Fotos
          </h1>
          <p className="text-lg opacity-90">
            Campos do Jordão - Gran Paradiso Resort
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <GalleryImage
              key={image.id}
              src={image.src}
              alt={image.alt}
              className="aspect-[4/3]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;