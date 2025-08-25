import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const faqs = [
  {
    question: "Qu'est-ce que vous apportent 30 minutes de renforcement musculaire ?",
    answer: "Le renforcement musculaire aide à préserver et améliorer votre masse musculaire, quel que soit votre âge. Les bénéfices incluent plus de force physique, une énergie décuplée, le contrôle de votre poids, un corps ferme, plus de souplesse et d'agilité, un sommeil réparateur, une meilleure gestion du stress, et plus de bonheur."
  },
  {
    question: "Comment se déroule une séance chez Curves ?",
    answer: "Chaque séance dure 30 minutes et combine renforcement musculaire et exercices cardiovasculaires sur nos machines à résistance hydraulique. Un coach vous accompagne personnellement pour vous guider et vous motiver tout au long de votre entraînement."
  },
  {
    question: "Faut-il avoir un niveau particulier pour commencer ?",
    answer: "Absolument pas ! Curves est conçu pour accueillir toutes les femmes, quel que soit leur niveau de forme physique. Nos coachs adaptent les exercices à vos capacités et vous accompagnent dans votre progression."
  },
  {
    question: "Y a-t-il des contraintes d'horaires ?",
    answer: "Non, c'est l'un des grands avantages de Curves ! Vous pouvez venir quand vous le souhaitez pendant nos heures d'ouverture, sans réservation préalable. Votre entraînement de 30 minutes s'adapte à votre emploi du temps."
  },
  {
    question: "Combien de fois par semaine dois-je venir ?",
    answer: "Nous recommandons 2 à 3 séances par semaine pour des résultats optimaux. Cette fréquence permet à votre corps de récupérer tout en maintenant une progression constante vers vos objectifs."
  }
];

export const FAQSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary/20 via-background to-muted">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Des questions ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trouvez toutes les réponses à vos questions sur notre méthode d'entraînement
          </p>
        </div>

        {/* FAQ */}
        <Card className="max-w-4xl mx-auto gradient-card shadow-card">
          <Accordion type="single" collapsible className="p-6">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-primary/20">
                <AccordionTrigger className="text-left text-lg font-semibold text-primary hover:text-primary-light">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>
    </section>
  );
};