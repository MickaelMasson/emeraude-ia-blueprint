import { useState } from "react";
import CaseStudyCard from "@/components/CaseStudyCard";
import { Button } from "@/components/ui/button";

const CaseStudies = () => {
  const [selectedSector, setSelectedSector] = useState<string>("all");

  const sectors = [
    "Tous",
    "Tourisme",
    "Industrie",
    "Transport & Logistique",
    "Agroalimentaire",
    "Commerce",
  ];

  const caseStudies = [
    {
      id: "hotel-receptionniste-virtuel",
      title: "Réceptionniste Virtuel 24/7",
      client: "Hôtel La Côte d'Émeraude",
      sector: "Tourisme",
      description: "Automatisation complète de la gestion des réservations et des demandes clients via un assistant IA multilingue accessible 24h/24.",
      results: [
        "40% de temps gagné sur la gestion des réservations",
        "Satisfaction client +25% selon enquêtes post-séjour",
        "Taux de réponse immédiate passé à 100%",
      ],
    },
    {
      id: "industrie-controle-qualite",
      title: "Contrôle Qualité Automatisé",
      client: "ManuBreizh Industries",
      sector: "Industrie",
      description: "Système de vision par ordinateur pour la détection automatique de défauts sur chaîne de production en temps réel.",
      results: [
        "95% de précision dans la détection des défauts",
        "Réduction de 60% des rebuts et retours client",
        "ROI atteint en 8 mois",
      ],
    },
    {
      id: "logistique-optimisation",
      title: "Optimisation des Tournées",
      client: "TransCôte Logistics",
      sector: "Transport & Logistique",
      description: "IA prédictive pour optimiser les tournées de livraison en fonction du trafic, de la météo et des contraintes client.",
      results: [
        "20% d'économies sur les coûts de carburant",
        "Délais de livraison réduits de 15%",
        "Satisfaction chauffeurs +30%",
      ],
    },
    {
      id: "restaurant-gestion-stocks",
      title: "Gestion Intelligente des Stocks",
      client: "Les Saveurs Marines",
      sector: "Tourisme",
      description: "Prédiction automatique des besoins en approvisionnement basée sur l'historique, la météo et les événements locaux.",
      results: [
        "Réduction de 35% du gaspillage alimentaire",
        "Optimisation des coûts d'achat de 18%",
        "Temps de gestion divisé par 3",
      ],
    },
    {
      id: "agroalimentaire-traçabilité",
      title: "Traçabilité et Conformité Automatisées",
      client: "Produits du Terroir Breton",
      sector: "Agroalimentaire",
      description: "Solution d'extraction automatique des données de conformité et génération de rapports réglementaires.",
      results: [
        "90% de temps gagné sur les rapports de conformité",
        "Zéro non-conformité détectée depuis le déploiement",
        "Préparation aux audits simplifiée",
      ],
    },
    {
      id: "commerce-assistant-vente",
      title: "Assistant de Vente Conversationnel",
      client: "Boutique Océane",
      sector: "Commerce",
      description: "Chatbot intelligent capable de conseiller les clients en ligne et de gérer les commandes simples.",
      results: [
        "Taux de conversion e-commerce +28%",
        "50% des demandes traitées automatiquement",
        "Disponibilité 24/7 sans coût supplémentaire",
      ],
    },
  ];

  const filteredStudies = selectedSector === "all"
    ? caseStudies
    : caseStudies.filter(study => study.sector === selectedSector);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-subtle py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ils Nous Ont Fait <span className="text-primary">Confiance</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Découvrez comment nous avons transformé les défis opérationnels de PME locales en succès mesurables
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

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study) => (
              <CaseStudyCard key={study.id} {...study} />
            ))}
          </div>

          {filteredStudies.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Aucune étude de cas dans cette catégorie pour le moment.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Votre Projet Sera Le Prochain Succès
          </h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Chaque projet est unique. Discutons du vôtre.
          </p>
          <Button asChild size="lg" variant="secondary" className="shadow-lg">
            <a href="/contact">Démarrer Mon Projet</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
