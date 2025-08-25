import { Card } from "@/components/ui/card";
import { Heart, Zap, Shield, Smile, Clock, Target } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Plus de force physique",
    description: "Développez votre masse musculaire et votre endurance"
  },
  {
    icon: Zap,
    title: "Énergie décuplée", 
    description: "Sentez-vous plus énergique dans votre quotidien"
  },
  {
    icon: Shield,
    title: "Contrôle du poids",
    description: "Maintenez votre poids idéal sur le long terme"
  },
  {
    icon: Target,
    title: "Corps ferme",
    description: "Tonifiez et sculptez votre silhouette"
  },
  {
    icon: Clock,
    title: "Sommeil réparateur",
    description: "Dormez mieux et plus profondément"
  },
  {
    icon: Smile,
    title: "Plus de bonheur",
    description: "Libérez des endorphines naturellement"
  }
];

export const BenefitsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted to-secondary/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Qu'est-ce que vous apportent
            <span className="block text-primary-light">30 minutes de renforcement ?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Le renforcement musculaire aide à préserver et améliorer votre masse musculaire, 
            quel que soit votre âge. Découvrez tous les bénéfices.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 gradient-card shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Why it works */}
        <div className="mt-20 text-center">
          <Card className="p-8 gradient-card shadow-card max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-primary mb-6">
              Pourquoi ça fonctionne ?
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Nos machines à résistance hydraulique vous permettent de pratiquer des exercices 
              cardiovasculaires et de renforcement musculaire <strong>simultanément</strong>, 
              sous la bienveillance d'un coach qui vous aide et vous motive à chaque séance.
            </p>
            <p className="text-xl font-semibold text-primary">
              Cela équivaut à plus d'une heure dans une salle de sport traditionnelle !
            </p>
            <div className="mt-8 text-2xl font-bold text-primary-dark">
              ET CELA CHANGE TOUT !
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};