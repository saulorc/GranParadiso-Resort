import { Button } from "@/components/ui/button";
import { GalleryImage } from "@/components/ImageModal";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const navigate = useNavigate();

  // Gallery images with captions
  const galleryImages = Array.from({ length: 20 }, (_, i) => {
    const captions = [
      "Vista panorâmica do resort", "Piscina principal com aquecimento", "Suíte master luxuosa",
      "Spa com tratamentos exclusivos", "Restaurante gourmet", "Área de lazer infantil",
      "Academia premium", "Sala de jogos", "Varanda com vista montanha", "Cozinha gourmet",
      "Jardins paisagísticos", "Quadra de tênis", "Sala de estar premium", "Vista do pôr do sol",
      "Área de relaxamento", "Piscina aquecida externa", "Lounge bar", "Terraço panorâmico",
      "Área de meditação", "Vista noturna do resort"
    ];
    
    return {
      id: i + 1,
      src: `https://images.unsplash.com/photo-${1600000000000 + i * 1000000}?w=600&h=400&fit=crop&crop=center`,
      alt: `Foto ${i + 1} do Resort Gran Paradiso`,
      caption: captions[i] || `Vista ${i + 1} do Resort Gran Paradiso`
    };
  });

  return (
    <div className="min-h-screen bg-primary/5">
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
            <div key={image.id} className="space-y-2">
              <GalleryImage
                src={image.src}
                alt={image.alt}
                className="aspect-[4/3]"
              />
              <p className="text-sm text-muted-foreground text-center font-medium">
                {image.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;