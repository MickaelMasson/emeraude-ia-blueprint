import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Target, Lightbulb, Shield, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-subtle py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Notre Méthodologie : <span className="text-primary">Écouter, Diagnostiquer, Construire, Accompagner</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Une approche structurée et transparente pour garantir la réussite de votre transformation IA
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">Commencer Maintenant</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {[
                {
                  step: "01",
                  title: "Écouter",
                  description: "Nous prenons le temps de comprendre vos processus, vos frustrations et vos objectifs business.",
                },
                {
                  step: "02",
                  title: "Diagnostiquer",
                  description: "Nous identifions les opportunités d'automatisation et chiffrons le ROI potentiel.",
                },
                {
                  step: "03",
                  title: "Construire",
                  description: "Nous développons votre solution sur-mesure, en itérant avec vous à chaque étape.",
                },
                {
                  step: "04",
                  title: "Accompagner",
                  description: "Nous formons vos équipes et maintenons la solution dans la durée.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">{item.step}</span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos 3 Offres Principales</h2>
          </div>

          <div className="space-y-20">
            {/* Service 1: Diagnostic */}
            <div className="max-w-6xl mx-auto">
              <Card className="shadow-soft overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="bg-primary/5 p-8 md:p-12 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center">
                      <Target className="h-16 w-16 text-primary" />
                    </div>
                  </div>
                  <div className="p-8 md:p-12">
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-3xl mb-2">Diagnostic Stratégique</CardTitle>
                      <CardDescription className="text-base">
                        Le point de départ de toute collaboration réussie
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-3">Ce que comprend le diagnostic :</h4>
                          <ul className="space-y-2">
                            {[
                              "Audit complet de vos processus métier",
                              "Identification des opportunités d'automatisation",
                              "Estimation du ROI pour chaque solution",
                              "Feuille de route priorisée sur 12-24 mois",
                              "Recommandations technologiques",
                            ].map((item) => (
                              <li key={item} className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="pt-4">
                          <p className="text-2xl font-bold text-primary mb-2">Tarif : 1 500€ HT</p>
                          <p className="text-sm text-muted-foreground">
                            Offert lors de la signature d'un projet de développement
                          </p>
                        </div>
                        <Button asChild variant="hero" size="lg" className="w-full">
                          <Link to="/contact">Demander un Diagnostic</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </div>

            {/* Service 2: Solutions */}
            <div className="max-w-6xl mx-auto">
              <Card className="shadow-soft overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-8 md:p-12 order-2 md:order-1">
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-3xl mb-2">Solutions sur Mesure</CardTitle>
                      <CardDescription className="text-base">
                        Développement de votre solution IA personnalisée
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-3">Domaines d'intervention :</h4>
                          <div className="grid grid-cols-2 gap-4">
                            {[
                              "Administration & Finance",
                              "Commercial & Marketing",
                              "Ressources Humaines",
                              "Production & Logistique",
                              "Service Client",
                              "Contrôle Qualité",
                            ].map((domain) => (
                              <div key={domain} className="flex items-center gap-2">
                                <ArrowRight className="h-4 w-4 text-primary" />
                                <span className="text-sm">{domain}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">Exemples de solutions :</h4>
                          <ul className="space-y-2">
                            {[
                              "Assistants IA conversationnels",
                              "Automatisation de processus documentaires",
                              "Analyses prédictives",
                              "Détection d'anomalies",
                            ].map((item) => (
                              <li key={item} className="flex items-start gap-2 text-sm">
                                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="pt-4">
                          <p className="text-sm text-muted-foreground mb-2">
                            Tarification sur devis après diagnostic
                          </p>
                        </div>
                        <Button asChild variant="hero" size="lg" className="w-full">
                          <Link to="/contact">Discuter de Mon Projet</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                  <div className="bg-primary/5 p-8 md:p-12 flex items-center justify-center order-1 md:order-2">
                    <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center">
                      <Lightbulb className="h-16 w-16 text-primary" />
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Service 3: Maintenance */}
            <div className="max-w-6xl mx-auto">
              <Card className="shadow-soft overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="bg-primary/5 p-8 md:p-12 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center">
                      <Shield className="h-16 w-16 text-primary" />
                    </div>
                  </div>
                  <div className="p-8 md:p-12">
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-3xl mb-2">Maintenance Évolutive</CardTitle>
                      <CardDescription className="text-base">
                        Un partenariat durable pour faire évoluer votre solution
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-3">Ce qui est inclus :</h4>
                          <ul className="space-y-2">
                            {[
                              "Support technique prioritaire",
                              "Corrections de bugs et mises à jour de sécurité",
                              "Optimisations continues des performances",
                              "Formations régulières de vos équipes",
                              "Veille technologique et conseils stratégiques",
                            ].map((item) => (
                              <li key={item} className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="pt-4">
                          <p className="text-sm text-muted-foreground">
                            Forfait mensuel adapté à votre solution
                          </p>
                        </div>
                        <Button asChild variant="hero" size="lg" className="w-full">
                          <Link to="/contact">Demander un Devis</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Commençons Par Un Diagnostic
          </h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Sans engagement, identifions ensemble vos opportunités d'automatisation
          </p>
          <Button asChild size="lg" variant="secondary" className="shadow-lg">
            <Link to="/contact">Réserver Mon Diagnostic Gratuit</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
