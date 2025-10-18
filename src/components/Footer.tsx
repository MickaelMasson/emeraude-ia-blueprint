import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
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
              <li><Link to="/etudes-de-cas" className="hover:opacity-100 hover:text-primary transition-colors">Études de Cas</Link></li>
              <li><Link to="/blog" className="hover:opacity-100 hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/a-propos" className="hover:opacity-100 hover:text-primary transition-colors">À Propos</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm opacity-90">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:contact@emeraudeia.fr" className="hover:opacity-100 hover:text-primary transition-colors">
                  contact@emeraudeia.fr
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+33612345678" className="hover:opacity-100 hover:text-primary transition-colors">
                  +33 6 12 34 56 78
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin className="h-4 w-4" />
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 hover:text-primary transition-colors">
                  LinkedIn
                </a>
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
