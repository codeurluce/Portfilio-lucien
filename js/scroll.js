window.addEventListener('resize', function() {
    const allElements = document.querySelectorAll('[data-aos]');
    const isMobile = window.innerWidth <= 768;

    allElements.forEach(element => {
        if (isMobile) {
            // Si l'écran est petit, remplace l'animation actuelle par "fade-up"
            element.setAttribute('data-aos', 'fade-up');
        } else {
            // Si l'écran est plus grand, applique l'animation d'origine
            // Par exemple, remettre l'animation fade-right si elle était initialement fade-right
            // Vous pouvez ajouter plus de logique pour cela si nécessaire
            const originalAnimation = element.getAttribute('data-original-aos');
            element.setAttribute('data-aos', originalAnimation || 'fade-right'); // Remplacer par l'original si sauvegardé
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
