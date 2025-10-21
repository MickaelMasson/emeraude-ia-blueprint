import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Target, Shield, TrendingUp, Lightbulb, Users } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import CaseStudyCard from "@/components/CaseStudyCard";
import BlogCard from "@/components/BlogCard";
import heroImage from "@/assets/hero-ai-consulting.jpg";

const Home = () => {
  const services = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Diagnostic Stratégique",
      description: "Identifiez vos opportunités d'automatisation et d'optimisation avec un audit personnalisé.",
      benefits: [
        "Audit complet de vos processus",
        "Feuille de route Intelligence Artificielle sur-mesure",
        "Retour sur investissement estimé et priorisation",
      ],
      href: "/services/diagnostic",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Solutions sur Mesure",
      description: "Développement de solutions IA adaptées à vos besoins spécifiques et votre budget.",
      benefits: [
        "Automatisation de flux de travail",
        "Assistants Intelligence Artificielle métier",
        "Intégrations personnalisées",
      ],
      href: "/services/solutions",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Maintenance Évolutive",
      description: "Un partenariat durable pour faire évoluer vos solutions au rythme de votre entreprise.",
      benefits: ["Support technique réactif", "Optimisations continues", "Formations équipes"],
      href: "/services/maintenance",
    },
  ];

  const caseStudies = [
    {
      id: "hotel-receptionniste-virtuel",
      title: "Réceptionniste Virtuel 24/7",
      client: "Hôtel La Côte d'Émeraude",
      sector: "Tourisme",
      description: "Automatisation de la gestion des réservations et des demandes clients via un assistant IA.",
      results: ["40% de temps gagné sur la gestion des réservations", "Satisfaction client +25%"],
    },
    {
      id: "industrie-controle-qualite",
      title: "Contrôle Qualité Automatisé",
      client: "ManuBreizh Industries",
      sector: "Industrie",
      description: "Système de détection automatique de défauts sur chaîne de production.",
      results: ["95% de précision dans la détection", "Réduction de 60% des rebuts"],
    },
    {
      id: "logistique-optimisation",
      title: "Optimisation Logistique",
      client: "TransCôte Logistics",
      sector: "Transport & Logistique",
      description: "IA prédictive pour optimiser les tournées et réduire les coûts de carburant.",
      results: ["20% d'économies sur les coûts", "Délais de livraison -15%"],
    },
  ];

  const blogPosts = [
    {
      id: "ia-pme-mythes-realites",
      title: "L'Intelligence Artificielle pour les Petites et Moyennes Entreprises : Mythes et Réalités",
      excerpt:
        "Démystifions ensemble les idées reçues sur l'intelligence artificielle et découvrons comment elle peut réellement servir votre entreprise.",
      category: "Vulgarisation",
      date: "15 Oct 2025",
      readTime: "5",
    },
    {
      id: "automatiser-processus-rh",
      title: "Comment Automatiser vos Processus de Ressources Humaines",
      excerpt:
        "De la gestion des candidatures au suivi des collaborateurs, découvrez les possibilités d'automatisation dans les Ressources Humaines.",
      category: "Cas d'usage",
      date: "10 Oct 2025",
      readTime: "7",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="AI Consulting" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 gradient-subtle"></div>
        </div>

        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              L'Intelligence Artificielle <span className="text-primary">accessible</span> aux PME de la Côte d'Émeraude
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transformez la complexité de l'Intelligence Artificielle en gains de productivité mesurables. Votre
              partenaire local pour des solutions sur-mesure et rentables.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">Planifier un appel découverte</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">Découvrir nos Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Hébergement France</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">Local</div>
              <div className="text-sm text-muted-foreground">Basé à Saint-Malo</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">Retour</div>
              <div className="text-sm text-muted-foreground">Rentabilité Mesurable</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24h</div>
              <div className="text-sm text-muted-foreground">Délai de Réponse</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre Approche</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Une méthodologie claire en 3 étapes pour des résultats concrets
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi Emeraude IA ?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proximité & Réactivité</h3>
              <p className="text-muted-foreground">
                Un interlocuteur unique basé localement, qui comprend votre territoire et vos enjeux
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Retour sur Investissement</h3>
              <p className="text-muted-foreground">Des solutions pensées pour être rentables dès les premiers mois</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Pédagogie & Formation</h3>
              <p className="text-muted-foreground">Nous formons vos équipes pour une adoption réussie et durable</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Des Applications Concrètes</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez des cas d'usage illustrant comment l'Intelligence Artificielle peut transformer les processus
              des entreprises de notre territoire
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.id} {...study} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/cas-d-usage">Voir Tous les Cas d'Usage</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              À Qui S'adresse Emeraude Intelligence Artificielle ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nous accompagnons les Petites et Moyennes Entreprises de 10 à 250 salariés sur le bassin de Saint-Malo et
              la Côte d'Émeraude
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {["Tourisme & Hôtellerie", "Agroalimentaire", "Transport & Logistique", "Industrie & Commerce"].map(
              (sector) => (
                <div
                  key={sector}
                  className="bg-background rounded-lg p-6 shadow-card flex items-center justify-center min-h-[100px]"
                >
                  <h3 className="font-semibold text-lg text-center">{sector}</h3>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Actualités & Perspectives</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nos derniers articles pour comprendre l'Intelligence Artificielle
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {blogPosts.map((post) => (
              <div key={post.id}>
                <div className="opacity-60 pointer-events-none cursor-default">
                  <BlogCard {...post} />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" disabled className="opacity-50 cursor-default">
              Articles à venir prochainement
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à Transformer Votre Entreprise ?</h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Échangeons sur vos opportunités pour identifier comment l'Intelligence Artificielle peut automatiser et
            optimiser vos processus
          </p>
          <Button asChild size="lg" variant="secondary" className="shadow-lg">
            <Link to="/contact">Planifier un appel découverte</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
