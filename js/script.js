// Sélectionne toutes les sections de la page
let selections = document.querySelectorAll('section');

// Sélectionne tous les liens de navigation dans l'en-tête
let navLinks = document.querySelectorAll('header .nav .nav_link'); //querySelectorAll pour tous les liens

// Écoute l'événement de défilement de la fenêtre
window.onscroll = () => {
    // Parcourt chaque section pour vérifier sa position par rapport au défilement
    selections.forEach(sec => {
        let top = window.scrollY; // Position verticale de la fenêtre par rapport au défilement
        let offset = sec.offsetTop - 160; // Position de la section moins un décalage (160px)
        let height = sec.offsetHeight; // Hauteur de la section
        let id = sec.getAttribute('id'); // Récupère l'ID de la section

        // Vérifie si la position actuelle de la fenêtre est dans les limites de la section
        if (top >= offset && top < offset + height) {
            // Retire la classe 'active-link' de tous les liens de navigation
            navLinks.forEach(link => {
                link.classList.remove('active-link');
            });

            // Sélectionne le lien correspondant à la section active
            const activeLink = document.querySelector('header .nav .nav_link[href*="' + id + '"]');
            if (activeLink) {
                // Ajoute la classe 'active-link' au lien actif
                activeLink.classList.add('active-link'); // Appel correct de add
            }
        }
    });
};
