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