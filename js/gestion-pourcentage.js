window.addEventListener('DOMContentLoaded', (event) => {
    // Sélectionne toutes les barres de compétences
    const skillBars = document.querySelectorAll('.skill-per');

    skillBars.forEach((bar) => {
        // Récupère la valeur de data-percent et applique-la à la largeur de la barre
        const percent = bar.getAttribute('data-percent');
        bar.style.width = percent + '%';

        // Met à jour le texte du tooltip pour refléter la valeur
        const tooltip = bar.querySelector('.tooltip');
        if (tooltip) {
            tooltip.textContent = percent + '%';
        }
    });
});
