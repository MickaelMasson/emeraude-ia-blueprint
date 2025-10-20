const LegalNotice = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-subtle py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mentions <span className="text-primary">Légales</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-slate">
            <h2>1. Informations légales</h2>
            <p>
              Le site <strong>emeraudeia.fr</strong> est édité par :
            </p>
            <p>
              <strong>Emeraude Intelligence Artificielle</strong><br />
              Forme juridique : [À compléter]<br />
              Siège social : [À compléter]<br />
              SIRET : [À compléter]<br />
              Contact : Via le formulaire de contact du site
            </p>

            <h2>2. Directeur de la publication</h2>
            <p>
              Le directeur de la publication du site est <strong>Mickaël MASSON</strong>, en qualité de fondateur.
            </p>

            <h2>3. Hébergement</h2>
            <p>
              Le site est hébergé en France par :<br />
              [Nom de l'hébergeur]<br />
              [Adresse de l'hébergeur]<br />
              Contact : [Contact hébergeur]
            </p>

            <h2>4. Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, vidéos, logos, etc.) est la propriété exclusive 
              d'Emeraude Intelligence Artificielle, sauf mention contraire.
            </p>
            <p>
              Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, 
              de ces différents éléments est strictement interdite sans l'accord exprès par écrit d'Emeraude Intelligence Artificielle.
            </p>

            <h2>5. Données personnelles</h2>
            <p>
              Les informations recueillies sur ce site font l'objet d'un traitement informatique destiné à la gestion 
              des demandes de contact et à l'amélioration de nos services.
            </p>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi « Informatique et Libertés », 
              vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition au traitement de vos données personnelles.
            </p>
            <p>
              Pour exercer ces droits, vous pouvez nous contacter via le formulaire de contact du site.
            </p>
            <p>
              Pour plus d'informations, consultez notre <a href="/politique-confidentialite" className="text-primary hover:underline">
                Politique de Confidentialité
              </a>.
            </p>

            <h2>6. Cookies</h2>
            <p>
              Ce site utilise des cookies pour améliorer l'expérience utilisateur et mesurer l'audience du site. 
              Vous pouvez à tout moment désactiver ces cookies depuis les paramètres de votre navigateur.
            </p>

            <h2>7. Limitation de responsabilité</h2>
            <p>
              Emeraude Intelligence Artificielle s'efforce d'assurer l'exactitude et la mise à jour des informations 
              diffusées sur ce site. Toutefois, elle ne peut garantir l'exactitude, la précision ou l'exhaustivité 
              des informations mises à disposition sur ce site.
            </p>
            <p>
              En conséquence, Emeraude Intelligence Artificielle décline toute responsabilité pour toute imprécision, 
              inexactitude ou omission portant sur des informations disponibles sur le site.
            </p>

            <h2>8. Droit applicable</h2>
            <p>
              Les présentes mentions légales sont soumises au droit français. En cas de litige et à défaut d'accord amiable, 
              le litige sera porté devant les tribunaux français conformément aux règles de compétence en vigueur.
            </p>

            <p className="text-sm text-muted-foreground mt-12">
              Dernière mise à jour : Octobre 2025
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalNotice;
