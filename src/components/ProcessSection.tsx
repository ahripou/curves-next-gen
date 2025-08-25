import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import gymEquipment from "@/assets/gym-equipment.jpg";

const steps = [
  {
    number: "1",
    title: "Coaching personnalisé",
    description: "Un accompagnement sur mesure adapté à vos objectifs et votre niveau"
  },
  {
    number: "2", 
    title: "Renforcement & cardio",
    description: "Travaillez simultanément votre force et votre endurance"
  },
  {
    number: "3",
    title: "30 minutes efficaces",
    description: "Un entraînement complet et optimisé pour votre emploi du temps"
  }
];

export const ProcessSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20">
              Notre méthode unique
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
              Un programme complet 
              <span className="text-primary-light block">conçu pour vous</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Notre salle de sport vous offre un programme complet d'exercices de renforcement 
              musculaire et cardiovasculaire en 30 minutes, coaché, sans contrainte d'horaire !
            </p>

            {/* Steps */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-soft">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Highlight */}
            <Card className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-primary-light/5 border-primary/20">
              <p className="text-lg font-semibold text-primary text-center">
                Vous atteindrez vos objectifs silhouette et boosterez votre métabolisme 
                pour maintenir votre poids sur du long terme.
              </p>
            </Card>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 gradient-primary rounded-3xl blur-xl opacity-20" />
            <Card className="relative overflow-hidden shadow-card">
              <img 
                src={gymEquipment}
                alt="Équipements Curves - Salle de sport pour femmes"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
              
              {/* Overlay content */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-soft">
                  <h4 className="font-semibold text-primary mb-1">
                    Machines à résistance hydraulique
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Technologie innovante pour un entraînement optimal
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};