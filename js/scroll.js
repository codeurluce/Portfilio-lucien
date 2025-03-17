// Appliquer l'animation correcte au chargement de la page
window.addEventListener('load', function() {
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
window.addEventListener('resize', function() {
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
