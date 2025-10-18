import { useState } from "react";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    "Tous",
    "Vulgarisation",
    "Cas d'usage",
    "Actualités IA",
    "Guides Pratiques",
  ];

  const blogPosts = [
    {
      id: "ia-pme-mythes-realites",
      title: "L'IA pour les PME : Mythes et Réalités",
      excerpt: "Démystifions ensemble les idées reçues sur l'intelligence artificielle et découvrons comment elle peut réellement servir votre entreprise sans budget pharaonique.",
      category: "Vulgarisation",
      date: "15 Oct 2025",
      readTime: "5",
    },
    {
      id: "automatiser-processus-rh",
      title: "Comment Automatiser vos Processus RH",
      excerpt: "De la gestion des candidatures au suivi des collaborateurs, découvrez les possibilités concrètes d'automatisation dans les ressources humaines.",
      category: "Cas d'usage",
      date: "10 Oct 2025",
      readTime: "7",
    },
    {
      id: "gpt4-vs-claude-pme",
      title: "GPT-4 vs Claude : Quel Modèle pour Votre PME ?",
      excerpt: "Comparatif détaillé des deux principaux modèles d'IA générative pour vous aider à choisir celui qui correspond le mieux à vos besoins.",
      category: "Actualités IA",
      date: "5 Oct 2025",
      readTime: "8",
    },
    {
      id: "mesurer-roi-projet-ia",
      title: "Guide : Mesurer le ROI d'un Projet IA",
      excerpt: "Méthodologie complète pour calculer et suivre le retour sur investissement de vos initiatives d'automatisation et d'IA.",
      category: "Guides Pratiques",
      date: "28 Sept 2025",
      readTime: "10",
    },
    {
      id: "ia-tourisme-bretagne",
      title: "L'IA au Service du Tourisme en Bretagne",
      excerpt: "Comment les établissements touristiques bretons peuvent tirer parti de l'IA pour améliorer l'expérience client et optimiser leur gestion.",
      category: "Cas d'usage",
      date: "20 Sept 2025",
      readTime: "6",
    },
    {
      id: "securite-donnees-ia",
      title: "Sécurité et Souveraineté des Données : Ce Qu'il Faut Savoir",
      excerpt: "Comprendre les enjeux de protection des données dans les projets IA et pourquoi l'hébergement en France est un atout stratégique.",
      category: "Guides Pratiques",
      date: "12 Sept 2025",
      readTime: "9",
    },
  ];

  const filteredPosts = selectedCategory === "all"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-subtle py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog & <span className="text-primary">Actualités</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Décryptages, guides pratiques et actualités pour comprendre l'IA et l'automatisation
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === (category === "Tous" ? "all" : category) ? "default" : "outline"}
                onClick={() => setSelectedCategory(category === "Tous" ? "all" : category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Aucun article dans cette catégorie pour le moment.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Restez Informé
            </h2>
            <p className="text-muted-foreground mb-6">
              Recevez nos derniers articles et conseils directement dans votre boîte mail
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="votre@email.fr"
                className="flex-1 px-4 py-2 rounded-md border border-input bg-background"
              />
              <Button variant="hero">S'inscrire</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
