import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GalleryImage } from "@/components/ImageModal";
import { StarRating } from "@/components/StarRating";
import { useNavigate } from "react-router-dom";
import { 
  MapPin, 
  Calendar, 
  Users, 
  Bed, 
  Bath, 
  Car, 
  Wifi, 
  Tv, 
  UtensilsCrossed,
  Waves,
  Dumbbell,
  TreePine,
  Phone,
  MessageCircle
} from "lucide-react";

// Import images
import heroBackground from "@/assets/hero-background.jpg";
import lobbyImage from "@/assets/lobby.jpg";
import bedroomImage from "@/assets/bedroom.jpg";
import poolImage from "@/assets/pool.jpg";
import spaImage from "@/assets/spa.jpg";
import entertainmentImage from "@/assets/entertainment.jpg";
import sunsetImage from "@/assets/sunset-view.jpg";

const Index = () => {
  const navigate = useNavigate();

  const mainImages = [
    { src: lobbyImage, alt: "Lobby elegante do resort" },
    { src: bedroomImage, alt: "Quarto luxuoso com cama queen" },
    { src: poolImage, alt: "Piscina aquecida do resort" },
    { src: spaImage, alt: "Spa com piscina interna" },
    { src: entertainmentImage, alt: "Sala de entretenimento" },
  ];

  const amenities = [
    { icon: Waves, text: "Piscinas (aquecida e natural)" },
    { icon: Bath, text: "Jacuzzis e Sauna" },
    { icon: Dumbbell, text: "Spa com salão de beleza e massagens" },
    { icon: UtensilsCrossed, text: "Restaurante e bares" },
    { icon: TreePine, text: "Brinquedoteca, Sala Gamer, Boliche e Sala de Cinema" },
    { icon: Users, text: "Programação infanto-juvenil com recreadores" },
    { icon: Dumbbell, text: "Academia com personal trainers" },
    { icon: Car, text: "Estacionamento com vaga gratuita" },
  ];

  const apartmentFeatures = [
    { icon: Bed, text: "1 cama queen" },
    { icon: Users, text: "1 sofá-cama de casal" },
    { icon: Bed, text: "1 cama auxiliar" },
    { icon: UtensilsCrossed, text: "Cozinha equipada" },
    { icon: Waves, text: "Ar-condicionado e aquecedor" },
    { icon: Tv, text: "Smart TV e Wi-Fi" },
    { icon: Bath, text: "Bancada de trabalho" },
    { icon: Bath, text: "Banheiro completo" },
    { icon: Bath, text: "Enxoval completo" },
    { icon: MapPin, text: "Varanda com vista espetacular para o vale e o pôr do sol" },
  ];

  const handleWhatsAppContact = () => {
    const message = "Olá! Tenho interesse no apartamento do Gran Paradiso Resort para o Feriado da Consciência Negra (16 a 23/11/25). Gostaria de mais informações.";
    const phone = "11985926746";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
        <div className="relative z-10 text-center text-primary-foreground max-w-4xl mx-auto px-4">
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gold bg-clip-text text-transparent">
              Campos do Jordão
            </h1>
            <div className="flex items-center justify-center mb-6">
              <StarRating rating={5} className="mr-4" />
              <h2 className="text-3xl md:text-5xl font-semibold">
                Gran Paradiso Resort
              </h2>
            </div>
          </div>
          
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-[var(--shadow-luxury)] mb-8">
            <CardContent className="p-6">
              <div className="flex items-center justify-center space-x-3 text-foreground">
                <Calendar className="text-primary" size={24} />
                <div className="text-center">
                  <h3 className="text-xl font-bold text-primary">Feriado da Consciência Negra</h3>
                  <p className="text-lg">7 noites | 16 a 23/11/25</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto">
            Viva momentos inesquecíveis em um dos resorts mais luxuosos da serra paulista.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="luxury" 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={handleWhatsAppContact}
            >
              <MessageCircle size={24} />
              Reserve já no WhatsApp
            </Button>
            <Button 
              variant="gold" 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={() => navigate("/galeria")}
            >
              Ver Galeria Completa
            </Button>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {mainImages.map((image, index) => (
              <GalleryImage
                key={index}
                src={image.src}
                alt={image.alt}
                className="aspect-[4/3]"
              />
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate("/galeria")}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Mais fotos
            </Button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Resort Features */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                <TreePine className="mr-3" size={28} />
                Estrutura completa:
              </h3>
              <ul className="space-y-4">
                {amenities.map((amenity, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <amenity.icon className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-foreground">{amenity.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Apartment Features */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                <Bed className="mr-3" size={28} />
                Acomoda confortavelmente até 5 pessoas:
              </h3>
              <ul className="space-y-4 mb-8">
                {apartmentFeatures.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <feature.icon className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-foreground">{feature.text}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                <Bath className="mr-3" size={28} />
                Confortos do apartamento:
              </h3>
              <ul className="space-y-4">
                {apartmentFeatures.slice(3).map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <feature.icon className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-foreground">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                <MapPin className="mr-3" size={28} />
                Localização privilegiada:
              </h3>
              <p className="text-lg mb-6 leading-relaxed">
                No coração da montanha, ao lado de reserva ambiental, a apenas 15 minutos do 
                centro turístico de Capivari.
              </p>
              <Card className="bg-destructive/10 border-destructive/20">
                <CardContent className="p-6">
                  <p className="text-lg font-semibold text-destructive flex items-start">
                    <span className="text-2xl mr-2">!</span>
                    Uma oportunidade única para relaxar, curtir a natureza e viver o melhor de Campos do Jordão.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex justify-center">
              <GalleryImage
                src={sunsetImage}
                alt="Vista espetacular do pôr do sol nas montanhas"
                className="aspect-square w-full max-w-md rounded-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[var(--gradient-hero)] text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <StarRating rating={5} className="justify-center mb-2" />
                  <h4 className="font-semibold">Resort</h4>
                  <p className="text-sm opacity-90">5 estrelas</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <Users size={32} className="mx-auto mb-2" />
                  <h4 className="font-semibold">Perfeito para</h4>
                  <p className="text-sm opacity-90">toda a família</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <TreePine size={32} className="mx-auto mb-2" />
                  <h4 className="font-semibold">Pet Friendly</h4>
                  <p className="text-sm opacity-90">Animais bem-vindos</p>
                </CardContent>
              </Card>
            </div>

            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-4">Carol Marchi</h3>
              <div className="flex items-center justify-center space-x-4 text-xl">
                <Phone size={24} />
                <span>(11) 985-926-746</span>
              </div>
            </div>

            <p className="text-2xl font-bold mb-8 bg-gradient-to-r from-gold-light to-gold bg-clip-text text-transparent">
              Reserve já e garanta sua estadia no feriado!
            </p>

            <Button 
              variant="whatsapp" 
              size="lg" 
              className="text-xl px-12 py-6"
              onClick={handleWhatsAppContact}
            >
              <MessageCircle size={28} />
              Entrar em contato via WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;