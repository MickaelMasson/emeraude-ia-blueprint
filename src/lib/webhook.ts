// 1. On lit EXCLUSIVEMENT depuis la variable d'environnement
const PROXY_URL = import.meta.env.VITE_PROXY_URL;

// On peut même ajouter une vérification au démarrage (optionnel mais recommandé)
if (!PROXY_URL) {
  console.error("Erreur de configuration : VITE_PROXY_URL n'est pas définie dans votre fichier .env");
}

export const sendToWebhook = async (formName: string, data: Record<string, any>) => {
  const payload = {
    formName,
    ...data,
  };

  // 2. On ajoute un bloc try...catch pour la "connexion"
  // Cela va intercepter les erreurs réseau (ex: proxy éteint, pas d'internet)
  try {
    // Si PROXY_URL est manquant, le fetch échouera et sera attrapé par le "catch"
    const response = await fetch(PROXY_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    // 3. On vérifie si la réponse du serveur est un succès (ex: 200)
    // Si le serveur répond 404 ou 500, cela lève une erreur.
    if (!response.ok) {
      throw new Error(`Le serveur a répondu avec une erreur: ${response.status}`);
    }

    return response;

  } catch (error) {
    // 4. C'est ici qu'on gère l'échec de la connexion
    console.error("Échec de l'envoi au proxy :", error);
    // On "relance" l'erreur pour que le code du formulaire (qui a appelé
    // cette fonction) puisse l'attraper et afficher un message à l'utilisateur.
    throw new Error("Erreur lors de la connexion au serveur. Veuillez réessayer.");
  }
};
