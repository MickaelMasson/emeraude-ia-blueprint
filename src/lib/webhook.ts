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

  console.log("📤 Envoi au webhook:", { url: PROXY_URL, formName, payload });

  try {
    const response = await fetch(PROXY_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    console.log("📥 Réponse reçue:", { status: response.status, statusText: response.statusText });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ Erreur backend:", { status: response.status, body: errorText });
      throw new Error(`Erreur backend (${response.status}): ${errorText}`);
    }

    const responseData = await response.json().catch(() => ({}));
    console.log("✅ Succès:", responseData);
    
    return response;

  } catch (error) {
    console.error("❌ Échec complet:", error);
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("Erreur lors de la connexion au serveur. Veuillez réessayer.");
  }
};
