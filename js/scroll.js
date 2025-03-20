// Appliquer l'animation correcte au chargement de la page
window.addEventListener('load', function () {
    const allElements = document.querySelectorAll('[data-aos]');
    const isMobile = window.innerWidth <= 910; // Détecter les petits écrans dès le chargement

    allElements.forEach(element => {
        // Sauvegarder l'animation d'origine si elle n'est pas déjà sauvegardée
        if (!element.hasAttribute('data-original-aos')) {
            const currentAnimation = element.getAttribute('data-aos');
            element.setAttribute('data-original-aos', currentAnimation); // Sauvegarder l'animation actuelle
        }

        // Appliquer l'animation correcte en fonction de la taille de l'écran dès le chargement
        if (isMobile) {
            element.setAttribute('data-aos', 'fade-up'); // Animation spécifique pour les petits écrans
        } else {
            const originalAnimation = element.getAttribute('data-original-aos');
            element.setAttribute('data-aos', originalAnimation || 'fade-right'); // Animation d'origine pour grands écrans
        }
    });
});

// Appliquer l'animation correcte lors du redimensionnement de la fenêtre
window.addEventListener('resize', function () {
    const allElements = document.querySelectorAll('[data-aos]');
    const isMobile = window.innerWidth <= 910;

    allElements.forEach(element => {
        if (isMobile) {
            // Si l'écran est petit, applique l'animation "fade-up"
            element.setAttribute('data-aos', 'fade-up');
        } else {
            // Si l'écran est plus grand, applique l'animation d'origine sauvegardée
            const originalAnimation = element.getAttribute('data-original-aos');
            element.setAttribute('data-aos', originalAnimation || 'fade-right');
        }
    });
});

// Déclencher une animation lorsque la section contenant les icônes sociales (.contact_socials) devient visible à l'écran.

document.addEventListener("DOMContentLoaded", function () {
    const socialSection = document.querySelector(".contact_socials");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    socialSection.classList.add("visible"); //ajoute une classe pour declencher l'aniation
                    observer.unobserve(socialSection); // Désactive l'observation après l'animation
                }
            });
        },
        { threshold: 0.5 } // Déclenche l'animation quand 50% de la section est visible
    );

    observer.observe(socialSection);
});

// Declencher une animation pour les elements Card.
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

        let threshold = 0.5; // Définir un seuil par défaut pour les grands écrans (50%)

    // Vérifier la taille de l'écran et ajuster le seuil
    if (window.innerWidth <= 700) {
        threshold = 0.3; // Réduire le seuil à 30% pour les petits écrans
    }

    // Créer l'observer avec le seuil dynamique
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const card = entry.target;
                    const index = Array.from(cards).indexOf(card); // Trouve l'index de la carte
                    setTimeout(() => {
                        card.classList.add("visible");
                    }, index * 300); // Décalage progressif entre chaque carte
                    observer.unobserve(card); // Arrêter l'observation de la carte une fois animée
                }
            });
        },
        { threshold: threshold } // Utilise le seuil dynamique ici
    );

    cards.forEach(card => observer.observe(card)); // Observer chaque carte individuellement
});
