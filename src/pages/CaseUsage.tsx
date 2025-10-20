import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Hotel, Factory, Truck, ShoppingBag, ArrowRight } from "lucide-react";

const CaseUsage = () => {
  const [selectedSector, setSelectedSector] = useState<string>("all");

  const sectors = [
    "Tous",
    "Tourisme",
    "Industrie",
    "Transport & Logistique",
    "Agroalimentaire",
    "Commerce",
  ];

  const caseUsages = [
    {
      id: "hotel-receptionniste-virtuel",
      title: "Réceptionniste Virtuel 24/7",
      sector: "Tourisme",
      icon: <Hotel className="h-8 w-8" />,
      description: "Un assistant Intelligence Artificielle multilingue capable de gérer les réservations, répondre aux questions des clients et traiter les demandes courantes automatiquement, accessible 24 heures sur 24.",
      benefits: [
        "Réduction du temps de traitement des réservations",
        "Amélioration de la satisfaction client",
        "Disponibilité continue sans coût de personnel supplémentaire",
      ],
      technologies: ["Traitement du langage naturel", "Intégration systèmes de réservation", "Support multilingue"],
    },
    {
      id: "industrie-controle-qualite",
      title: "Contrôle Qualité Automatisé",
      sector: "Industrie",
      icon: <Factory className="h-8 w-8" />,
      description: "Un système de vision par ordinateur qui détecte automatiquement les défauts sur une chaîne de production en temps réel, permettant d'identifier les non-conformités avant expédition.",
      benefits: [
        "Précision supérieure à l'inspection manuelle",
        "Réduction significative des rebuts et retours",
        "Gain de temps sur les processus de contrôle",
      ],
      technologies: ["Vision par ordinateur", "Détection d'anomalies", "Apprentissage automatique"],
    },
    {
      id: "logistique-optimisation",
      title: "Optimisation des Tournées",
      sector: "Transport & Logistique",
      icon: <Truck className="h-8 w-8" />,
      description: "Une Intelligence Artificielle prédictive qui optimise les tournées de livraison en fonction du trafic en temps réel, de la météo et des contraintes clients pour minimiser les coûts et améliorer les délais.",
      benefits: [
        "Économies substantielles sur les coûts de carburant",
        "Réduction des délais de livraison",
        "Amélioration de la satisfaction des chauffeurs",
      ],
      technologies: ["Optimisation prédictive", "Algorithmes de routage", "Analyse de données en temps réel"],
    },
    {
      id: "restaurant-gestion-stocks",
      title: "Gestion Intelligente des Stocks",
      sector: "Tourisme",
      icon: <Hotel className="h-8 w-8" />,
      description: "Un système de prédiction automatique des besoins en approvisionnement basé sur l'historique de ventes, les prévisions météorologiques et les événements locaux pour optimiser les achats.",
      benefits: [
        "Réduction importante du gaspillage alimentaire",
        "Optimisation des coûts d'approvisionnement",
        "Simplification de la gestion quotidienne",
      ],
      technologies: ["Analyse prédictive", "Apprentissage automatique", "Intégration données externes"],
    },
    {
      id: "agroalimentaire-tracabilite",
      title: "Traçabilité et Conformité Automatisées",
      sector: "Agroalimentaire",
      icon: <Factory className="h-8 w-8" />,
      description: "Une solution d'extraction automatique des données de conformité depuis les documents fournisseurs et génération automatique de rapports réglementaires pour faciliter les audits.",
      benefits: [
        "Gain de temps considérable sur la préparation des rapports",
        "Élimination des erreurs de conformité",
        "Préparation simplifiée aux audits",
      ],
      technologies: ["Extraction de données", "Automatisation documentaire", "Génération de rapports"],
    },
    {
      id: "commerce-assistant-vente",
      title: "Assistant de Vente Conversationnel",
      sector: "Commerce",
      icon: <ShoppingBag className="h-8 w-8" />,
      description: "Un assistant conversationnel intelligent capable de conseiller les clients en ligne, répondre aux questions produits et faciliter le processus de commande de manière naturelle.",
      benefits: [
        "Augmentation du taux de conversion en ligne",
        "Automatisation des demandes courantes",
        "Service client disponible en permanence",
      ],
      technologies: ["Intelligence conversationnelle", "Gestion de la relation client", "Intégration commerce électronique"],
    },
  ];

  const filteredUsages = selectedSector === "all"
    ? caseUsages
    : caseUsages.filter(usage => usage.sector === selectedSector);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-subtle py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cas <span className="text-primary">d'Usage</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Explorez des exemples concrets de projets réalisables pour visualiser comment l'Intelligence Artificielle peut résoudre les défis spécifiques de votre secteur
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {sectors.map((sector) => (
              <Button
                key={sector}
                variant={selectedSector === (sector === "Tous" ? "all" : sector) ? "default" : "outline"}
                onClick={() => setSelectedSector(sector === "Tous" ? "all" : sector)}
              >
                {sector}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Usage Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredUsages.map((usage) => (
              <Card key={usage.id} className="shadow-card hover:shadow-soft transition-all duration-300 flex flex-col">
                <CardHeader>
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <div className="text-primary">{usage.icon}</div>
                  </div>
                  <div className="mb-2">
                    <Badge variant="secondary">{usage.sector}</Badge>
                  </div>
                  <CardTitle className="text-xl">{usage.title}</CardTitle>
                  <CardDescription>{usage.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-sm">Bénéfices Attendus :</h4>
                    <ul className="space-y-2">
                      {usage.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-0.5">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto">
                    <h4 className="font-semibold mb-2 text-sm">Technologies :</h4>
                    <div className="flex flex-wrap gap-2">
                      {usage.technologies.map((tech, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredUsages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Aucun cas d'usage dans cette catégorie pour le moment.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Comment Démarrer Votre Projet ?</h2>
              <p className="text-xl text-muted-foreground">
                De l'idée à la mise en production, notre méthodologie éprouvée
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Diagnostic Stratégique</h3>
                <p className="text-sm text-muted-foreground">
                  Un audit complet de vos processus pour identifier les opportunités les plus rentables
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Développement Sur-Mesure</h3>
                <p className="text-sm text-muted-foreground">
                  Construction de votre solution en itérant avec vous à chaque étape
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Accompagnement Continu</h3>
                <p className="text-sm text-muted-foreground">
                  Formation de vos équipes et maintenance évolutive dans la durée
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Parlons de Votre Cas d'Usage
          </h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Chaque entreprise est unique. Discutons de vos défis spécifiques pour identifier les solutions les plus adaptées.
          </p>
          <Button asChild size="lg" variant="secondary" className="shadow-lg">
            <Link to="/contact">Planifier un appel découverte</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CaseUsage;
