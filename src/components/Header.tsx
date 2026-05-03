import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-soft">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo Curves */}
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/4fecbf48-fd1c-490d-8df1-7ac110b7f07d.png" 
            alt="Curves - Fitness pour femmes" 
            className="h-12 w-auto"
            loading="eager"
          />
        </div>

        {/* CTA Button */}
        <Button 
          variant="hero" 
          onClick={() => window.open('https://api.fitness-academie.fr/widget/booking/T9vZhkFs9OQlPEKG1uSA', '_blank')}
          className="hidden sm:inline-flex"
        >
          Bilan de forme gratuit
        </Button>
      </nav>
    </header>
  );
};