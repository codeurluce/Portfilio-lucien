const burgerMenuButton = document.querySelector('.burger-menu-button')
const burgerMenuButtonIcon = document.querySelector('.burger-menu-button i')
const burgerMenu = document.querySelector('.burger-menu')

burgerMenuButton.onclick = function () {
    burgerMenu.classList.toggle('open')
    const isOpen = burgerMenu.classList.contains('open')
    burgerMenuButtonIcon.className = isOpen ?  'ri-close-large-line' : 'ri-menu-fill'
}

// Fermer le menu en cliquant à l'extérieur
document.addEventListener('click', function (event) {
    if (!burgerMenuButton.contains(event.target) && !burgerMenu.contains(event.target)) {
        burgerMenu.classList.remove('open');
        document.body.classList.remove('menu-open'); // Retire la classe "menu-open"
        burgerMenuButtonIcon.className = 'ri-menu-fill'; // Réinitialise l'icône
    }
});
