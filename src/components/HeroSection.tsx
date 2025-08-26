
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Hero Image - Optimized for fast loading */}
      <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
        <img 
          src="/lovable-uploads/e9d57b17-ee5d-4b34-9f53-bdeba115a795.png"
          alt="Équipe de femmes souriantes chez Curves - Ensemble vers vos objectifs fitness" 
          className="w-full h-full object-cover opacity-80"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-primary/10 to-primary/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center lg:text-left">
        <div className="max-w-3xl">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/4fecbf48-fd1c-490d-8df1-7ac110b7f07d.png" 
              alt="Curves - Fitness pour femmes" 
              className="h-16 w-auto mb-4 mx-auto lg:mx-0"
              loading="eager"
            />
            <div className="w-24 h-1 bg-white/80 rounded-full mx-auto lg:mx-0" />
          </div>

          {/* Main Title */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Le fitness conçu
            <span className="block bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              pour les femmes !
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Un programme complet d'exercices en 30 minutes, 
            <br className="hidden md:block" />
            coaché et sans contrainte d'horaire.
          </p>

          {/* Features */}
          <div className="flex flex-col sm:flex-row gap-6 mb-10 text-white/90">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>Spécialement pour femmes</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Entraînement 30 min</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>Sans contrainte horaire</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => window.open('https://api.fitness-academie.fr/widget/booking/T9vZhkFs9OQlPEKG1uSA', '_blank')}
            >
              Réserver ma place gratuite
            </Button>
            <Button 
              variant="outline-light" 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => window.open('https://api.fitness-academie.fr/widget/booking/T9vZhkFs9OQlPEKG1uSA', '_blank')}
            >
              Découvrir Curves
            </Button>
          </div>

          {/* Promo Banner */}
          <div className="mt-12 p-6 bg-yellow-400 text-primary-dark rounded-2xl shadow-glow inline-block">
            <p className="text-lg font-semibold">
              🎉 Promotion de rentrée - Les 15 premières s'inscrivent pour seulement 15€ !
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
