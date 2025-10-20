import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Briefcase, MapPin, Heart, Shield, Users } from "lucide-react";
import aboutImage from "@/assets/about-meeting.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-subtle py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-primary">Proximité</span> et Expertise au Service de Votre Transformation
            </h1>
            <p className="text-xl text-muted-foreground">
              Emeraude Intelligence Artificielle est né d'une conviction : l'intelligence artificielle doit être accessible à toutes les Petites et Moyennes Entreprises, pas seulement aux grands groupes.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={aboutImage} 
                  alt="Réunion de travail Emeraude IA" 
                  className="rounded-lg shadow-soft"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Notre Histoire</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Après vingt années intenses dans la restauration, culminant à des postes de direction, <strong className="text-foreground">Mickaël MASSON</strong> a pris conscience d'un plafond professionnel et personnel. Cette prise de conscience l'a conduit vers une transition de carrière audacieuse.
                  </p>
                  <p>
                    La création d'Emeraude Intelligence Artificielle représente la convergence d'une passion pour la technologie et d'une opportunité de mettre à profit son expertise métier. C'est le fruit d'une quête d'alignement entre une ambition professionnelle renouvelée et la volonté d'être un entrepreneur engagé et père présent.
                  </p>
                  <p>
                    Emeraude Intelligence Artificielle est aujourd'hui un <strong className="text-foreground">partenaire local</strong>, <strong className="text-foreground">accessible</strong> et <strong className="text-foreground">expert</strong>, qui parle le langage des entreprises et construit des solutions vraiment sur-mesure pour les Petites et Moyennes Entreprises de la Côte d'Émeraude.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Le Fondateur</h2>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/20 rounded-lg p-8 md:p-12">
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Mickaël MASSON</h3>
                  <p className="text-primary font-medium mb-6">Fondateur & Expert Intelligence Artificielle</p>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Fort de 15 années d'expérience à la direction d'entreprises, Mickaël a développé une expertise unique dans la détection et la résolution des points de friction qui freinent la performance des organisations.
                    </p>
                    <p>
                      Cette <strong className="text-foreground">double compétence</strong> – stratégie métier et expertise technique en Intelligence Artificielle – lui permet aujourd'hui d'apporter une valeur incomparable à ses clients. Il ne se positionne pas comme un simple technicien, mais comme un <strong className="text-foreground">stratège qui comprend intimement les enjeux de rentabilité et de productivité</strong> d'une Petite ou Moyenne Entreprise.
                    </p>
                    <p>
                      Aujourd'hui, il applique cette même expertise opérationnelle avec les outils de l'Intelligence Artificielle pour transformer les défis quotidiens des entreprises en opportunités de croissance mesurables.
                    </p>
                  </div>
                  <div className="mt-6">
                    <Button asChild variant="outline">
                      <a href="https://www.linkedin.com/in/mickaelmasson/" target="_blank" rel="noopener noreferrer">
                        Voir le profil LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Valeurs</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Les principes qui guident chacune de nos décisions et collaborations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-background rounded-lg p-8 shadow-card">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Approche Humaine & Proximité</h3>
              <p className="text-muted-foreground">
                Un partenaire local qui comprend votre territoire et vos enjeux. Une relation de confiance basée sur l'écoute et la disponibilité.
              </p>
            </div>
            <div className="bg-background rounded-lg p-8 shadow-card">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Pragmatisme & Rentabilité</h3>
              <p className="text-muted-foreground">
                Chaque solution est conçue pour générer un retour sur investissement mesurable et rapide. Pas de technologie pour la technologie.
              </p>
            </div>
            <div className="bg-background rounded-lg p-8 shadow-card">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Pédagogie & Autonomie</h3>
              <p className="text-muted-foreground">
                Nous formons vos équipes pour une adoption réussie. L'objectif est de vous rendre autonome, pas de créer une dépendance.
              </p>
            </div>
            <div className="bg-background rounded-lg p-8 shadow-card">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sécurité & Souveraineté</h3>
              <p className="text-muted-foreground">
                Hébergement en France, conformité réglementaire, et souveraineté totale de vos données garantie.
              </p>
            </div>
            <div className="bg-background rounded-lg p-8 shadow-card">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Indépendance Technologique</h3>
              <p className="text-muted-foreground">
                Nous choisissons toujours la solution la plus pertinente pour votre besoin, sans être liés à un éditeur spécifique.
              </p>
            </div>
            <div className="bg-background rounded-lg p-8 shadow-card">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Partenariat Durable</h3>
              <p className="text-muted-foreground">
                Une relation de long terme basée sur votre succès. Votre réussite est notre réussite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à Discuter de Votre Projet ?
          </h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Échangeons sur vos défis et explorons ensemble comment l'Intelligence Artificielle peut transformer votre entreprise
          </p>
          <Button asChild size="lg" variant="secondary" className="shadow-lg">
            <Link to="/contact">Planifier un appel découverte</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
