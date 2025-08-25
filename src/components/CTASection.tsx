import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, MapPin, Clock } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute top-10 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-yellow-300/10 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prête à transformer 
            <span className="block text-yellow-300">votre quotidien ?</span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Rejoignez des milliers de femmes qui ont déjà découvert 
            la méthode Curves. Votre première séance est offerte !
          </p>
        </div>

        {/* CTA Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <Card className="p-8 gradient-card shadow-glow text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Séance découverte gratuite
            </h3>
            <p className="text-muted-foreground mb-6">
              Testez notre méthode sans engagement et découvrez pourquoi Curves change tout !
            </p>
            <Button 
              variant="hero" 
              size="lg" 
              className="w-full"
              onClick={() => window.open('https://api.fitness-academie.fr/widget/booking/T9vZhkFs9OQlPEKG1uSA', '_blank')}
            >
              Réserver ma séance gratuite
            </Button>
          </Card>

          <Card className="p-8 gradient-card shadow-glow text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Offre de rentrée
            </h3>
            <p className="text-muted-foreground mb-6">
              Les 15 premières inscriptions pour seulement 15€ de frais d'inscription
            </p>
            <Button 
              variant="default" 
              size="lg" 
              className="w-full"
              onClick={() => window.open('https://api.fitness-academie.fr/widget/booking/T9vZhkFs9OQlPEKG1uSA', '_blank')}
            >
              Profiter de l'offre
            </Button>
          </Card>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-white/90">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5" />
            <span>+32 2 123 45 67</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span>Bruxelles Centre</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>Lun-Ven 6h-22h, Sam 8h-18h</span>
          </div>
        </div>
      </div>
    </section>
  );
};