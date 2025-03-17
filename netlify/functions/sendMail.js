exports.handler = async (event) => {
    // Ajoute l'en-tête CORS pour autoriser ton frontend à accéder à cette fonction
    const headers = {
        "Access-Control-Allow-Origin": "*",  // Permet l'accès à partir de n'importe quel domaine
        "Access-Control-Allow-Methods": "GET, POST", // Méthodes autorisées
        "Access-Control-Allow-Headers": "Content-Type", // En-têtes autorisés
    };

    if (event.httpMethod === "OPTIONS") {
        // Si la requête est une pré-demande CORS (OPTIONS), retourne une réponse avec les en-têtes appropriés
        return {
            statusCode: 200,
            headers: headers,
            body: JSON.stringify({ message: "CORS pré-demande autorisée" }),
        };
    }

    const formData = JSON.parse(event.body);

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            access_key: process.env.WEB3FORMS_ACCESS_KEY,
            name: formData.name,
            email: formData.email,
            message: formData.message,
        })
    });

    const result = await response.json();

    // Retourne la réponse avec les en-têtes CORS
    return {
        statusCode: 200,
        headers: headers,
        body: JSON.stringify(result),
    };
};
