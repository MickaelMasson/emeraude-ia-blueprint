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
              Emeraude IA est né d'une conviction : l'intelligence artificielle doit être accessible à toutes les PME, 
              pas seulement aux grands groupes.
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
                  alt="Équipe Emeraude IA" 
                  className="rounded-lg shadow-soft"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Notre Histoire</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Fondée par <strong className="text-foreground">Mickaël MASSON</strong>, Emeraude IA est née 
                    sur la Côte d'Émeraude avec une mission claire : rendre l'IA accessible et rentable pour les PME locales.
                  </p>
                  <p>
                    Fort d'une double expertise métier et technique, Mickaël a constaté que trop de dirigeants 
                    de PME renonçaient à l'IA par manque de confiance ou par crainte de la complexité. 
                    Les grandes agences parisiennes ne comprennent pas leurs enjeux, et les solutions "clés en main" 
                    ne répondent jamais vraiment à leurs besoins spécifiques.
                  </p>
                  <p>
                    Emeraude IA est la réponse à ce problème : un partenaire <strong className="text-foreground">local</strong>, 
                    <strong className="text-foreground"> accessible</strong> et <strong className="text-foreground">expert</strong>, 
                    qui parle le langage du business et construit des solutions vraiment sur-mesure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/20">
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
              <h3 className="text-xl font-semibold mb-3">Proximité</h3>
              <p className="text-muted-foreground">
                Un partenaire local qui comprend votre territoire et vos enjeux. Disponible et réactif.
              </p>
            </div>
            <div className="bg-background rounded-lg p-8 shadow-card">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Pragmatisme</h3>
              <p className="text-muted-foreground">
                Des solutions orientées résultats et ROI, pas de la technologie pour la technologie.
              </p>
            </div>
            <div className="bg-background rounded-lg p-8 shadow-card">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Pédagogie</h3>
              <p className="text-muted-foreground">
                Nous démystifions l'IA et formons vos équipes pour une adoption réussie.
              </p>
            </div>
            <div className="bg-background rounded-lg p-8 shadow-card">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sécurité</h3>
              <p className="text-muted-foreground">
                Hébergement en France, conformité RGPD, et souveraineté de vos données garantie.
              </p>
            </div>
            <div className="bg-background rounded-lg p-8 shadow-card">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Indépendance</h3>
              <p className="text-muted-foreground">
                Aucune dépendance technologique. Nous choisissons toujours la meilleure solution pour vous.
              </p>
            </div>
            <div className="bg-background rounded-lg p-8 shadow-card">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Partenariat</h3>
              <p className="text-muted-foreground">
                Une relation de long terme, pas une simple prestation. Votre succès est notre succès.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Le Fondateur</h2>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/20 rounded-lg p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Mickaël MASSON</h3>
                  <p className="text-primary font-medium mb-6">Fondateur & Expert IA</p>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Ingénieur de formation et consultant en transformation digitale pendant plus de 10 ans, 
                      Mickaël a accompagné des dizaines d'entreprises dans leur évolution technologique.
                    </p>
                    <p>
                      Spécialisé dans l'intelligence artificielle appliquée depuis 2020, il combine une expertise 
                      technique pointue avec une compréhension fine des enjeux métier. Cette double casquette lui 
                      permet de traduire les défis opérationnels en solutions IA concrètes et rentables.
                    </p>
                    <p>
                      Passionné par la démocratisation de l'IA et profondément attaché au territoire breton, 
                      il a fondé Emeraude IA pour que chaque PME locale puisse bénéficier de cette révolution 
                      technologique.
                    </p>
                  </div>
                  <div className="mt-6">
                    <Button asChild variant="outline">
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
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

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Travaillons Ensemble
          </h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Découvrez comment l'IA peut transformer votre entreprise lors d'un diagnostic gratuit
          </p>
          <Button asChild size="lg" variant="secondary" className="shadow-lg">
            <Link to="/contact">Prendre Contact</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
