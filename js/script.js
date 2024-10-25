let selections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .nav .nav_link'); // Utiliser querySelectorAll pour tous les liens

window.onscroll = () => {
    selections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 160;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active-link');
            });

            const activeLink = document.querySelector('header .nav .nav_link[href*="' + id + '"]');
            if (activeLink) {
                activeLink.classList.add('active-link'); // Appel correct de add
            }
        }
    });
};
