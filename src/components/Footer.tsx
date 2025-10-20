import { Link } from "react-router-dom";
import { Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-emeraudeia.png";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <img src={logo} alt="Emeraude IA" className="h-12 mb-4 brightness-0 invert" />
            <p className="text-sm opacity-90 mb-4">
              Votre partenaire IA de proximité pour transformer la complexité technologique en gains de productivité mesurables.
            </p>
            <div className="flex items-center gap-2 text-sm opacity-90">
              <MapPin className="h-4 w-4" />
              <span>Saint-Malo, Côte d'Émeraude</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link to="/services" className="hover:opacity-100 hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/cas-d-usage" className="hover:opacity-100 hover:text-primary transition-colors">Cas d'Usage</Link></li>
              <li><Link to="/blog" className="hover:opacity-100 hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/a-propos" className="hover:opacity-100 hover:text-primary transition-colors">À Propos</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Nous Contacter</h3>
            <ul className="space-y-3 text-sm opacity-90">
              <li className="flex items-start gap-2">
                <Linkedin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <a href="https://www.linkedin.com/in/mickaelmasson/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 hover:text-primary transition-colors">
                  LinkedIn
                </a>
              </li>
              <li className="pt-2">
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link to="/contact">Prendre Contact</Link>
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
          <p>© 2025 Emeraude IA. Tous droits réservés.</p>
          <div className="mt-2 space-x-4">
            <Link to="/mentions-legales" className="hover:opacity-100 hover:text-primary transition-colors">
              Mentions Légales
            </Link>
            <Link to="/politique-confidentialite" className="hover:opacity-100 hover:text-primary transition-colors">
              Politique de Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
