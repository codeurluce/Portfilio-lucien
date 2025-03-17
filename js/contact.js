document.getElementById("contact-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    
    // Fonction de validation de l'email
    const validateEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
        return emailPattern.test(email);
    };

    if (!validateEmail(email)) {
        Swal.fire({
            title: "Erreur !",
            text: "❌ L'email que vous avez entré est invalide. Veuillez le vérifier.",
            icon: "error",
            confirmButtonColor: "#e74c3c",
            confirmButtonText: "OK"
        });
        return;  // Stoppe l'envoi du formulaire si l'email est invalide
    }

    // Prépare les données du formulaire
    const formData = {
        name: document.getElementById("name").value,
        email: email,
        message: document.getElementById("message").value
    };

    try {
        // Envoie la requête à ton proxy Netlify
        const response = await fetch("https://lighthearted-chaja-fc3dd9.netlify.app/.netlify/functions/sendMail", { 
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        console.log(result);

        // Affichage du résultat via Swal
        if (result.success) {
            Swal.fire({
                title: "Succès !",
                text: "✅ Message envoyé avec succès !",
                icon: "success",
                confirmButtonColor: "#6c5ce7",
                confirmButtonText: "OK"
            });
            document.getElementById("contact-form").reset();
        } else {
            Swal.fire({
                title: "Erreur !",
                text: "❌ Erreur lors de l'envoi : " + result.message,
                icon: "error",
                confirmButtonColor: "#e74c3c",
                confirmButtonText: "OK"
            });
        }
    } catch (error) {
        Swal.fire({
            title: "Erreur !",
            text: "❌ Une erreur s'est produite : " + error.message,
            icon: "error",
            confirmButtonColor: "#e74c3c",
            confirmButtonText: "OK"
        });
    }
});
