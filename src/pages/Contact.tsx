import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { sendToWebhook } from "@/lib/webhook";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [callbackFormData, setCallbackFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      return;
    }

    try {
      await sendToWebhook("diagnostic-strategique", formData);

      toast({
        title: "Message envoyé !",
        description: "Nous vous recontacterons sous 24h.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCallbackChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCallbackFormData({
      ...callbackFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCallbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!callbackFormData.firstName || !callbackFormData.lastName || !callbackFormData.phone || !callbackFormData.message) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      return;
    }

    try {
      await sendToWebhook("demande-rappel", callbackFormData);

      toast({
        title: "Demande envoyée !",
        description: "Nous vous rappellerons dans les plus brefs délais.",
      });

      // Reset form
      setCallbackFormData({
        firstName: "",
        lastName: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-subtle py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Parlons de Votre <span className="text-primary">Projet</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Échangeons sur vos opportunités pour identifier comment l'Intelligence Artificielle peut transformer votre entreprise
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-2xl">Demander un Diagnostic Stratégique</CardTitle>
                  <CardDescription>
                    Remplissez ce formulaire et nous vous recontacterons sous 24h pour programmer un rendez-vous.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                          Prénom *
                        </label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="Jean"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                          Nom *
                        </label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Dupont"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Entreprise
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Ma PME"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="jean.dupont@entreprise.fr"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Téléphone
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+33 6 12 34 56 78"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Décrivez votre projet ou vos besoins *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Ex: Je souhaite automatiser la gestion de mes commandes fournisseurs..."
                        rows={6}
                        required
                      />
                    </div>

                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Shield className="h-4 w-4 flex-shrink-0 mt-0.5 text-primary" />
                      <p>
                        Vos données sont protégées et ne seront jamais partagées. 
                        Consultez notre <a href="/politique-confidentialite" className="text-primary underline">politique de confidentialité</a>.
                      </p>
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      Envoyer ma demande
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Callback Form */}
            <div>
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-2xl">Demander à être Rappelé</CardTitle>
                  <CardDescription>
                    Laissez-nous vos coordonnées et nous vous rappellerons rapidement.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleCallbackSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="callback-firstName" className="block text-sm font-medium mb-2">
                          Prénom *
                        </label>
                        <Input
                          id="callback-firstName"
                          name="firstName"
                          value={callbackFormData.firstName}
                          onChange={handleCallbackChange}
                          placeholder="Jean"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="callback-lastName" className="block text-sm font-medium mb-2">
                          Nom *
                        </label>
                        <Input
                          id="callback-lastName"
                          name="lastName"
                          value={callbackFormData.lastName}
                          onChange={handleCallbackChange}
                          placeholder="Dupont"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="callback-phone" className="block text-sm font-medium mb-2">
                        Téléphone *
                      </label>
                      <Input
                        id="callback-phone"
                        name="phone"
                        type="tel"
                        value={callbackFormData.phone}
                        onChange={handleCallbackChange}
                        placeholder="+33 6 12 34 56 78"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="callback-message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="callback-message"
                        name="message"
                        value={callbackFormData.message}
                        onChange={handleCallbackChange}
                        placeholder="Indiquez vos disponibilités ou votre demande..."
                        rows={4}
                        required
                      />
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      Demander un rappel
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Questions Fréquentes</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Combien coûte le diagnostic stratégique ?</h3>
                <p className="text-muted-foreground">
                  Notre Diagnostic Stratégique est proposé sous la forme d'un forfait unique de 725 € HT. Il s'agit d'un investissement initial conçu pour vous fournir une feuille de route claire et chiffrée, vous permettant de prendre des décisions éclairées.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Combien de temps dure un diagnostic ?</h3>
                <p className="text-muted-foreground">
                  Le diagnostic se déroule en deux temps principaux. Il commence par un atelier d'immersion d'une demi-journée que nous réalisons directement dans votre entreprise pour analyser vos processus. Ensuite, sous 3 jours, nous vous livrons une feuille de route complète et détaillée.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Quelle est votre zone d'intervention ?</h3>
                <p className="text-muted-foreground">
                  Notre cœur d'activité est centré sur la Côte d'Émeraude, le pays de Saint-Malo et l'axe Rennes/Saint-Malo, où notre proximité est un atout majeur pour nos clients. Cependant, nous étudions avec attention tous les projets pertinents. Selon la nature de la mission, des interventions à distance ou des déplacements plus lointains sont tout à fait envisageables.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
