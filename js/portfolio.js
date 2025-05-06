// Portfolio data
const portfolioData = [
    {
        id: 1,
        title: "Portfolio Photographe",
        category: "Web Development",
        description: "Un site web moderne de type portfolio pour photographe, entièrement réalisé avec HTML et CSS.",
        image: "img/portfolio_img/Robbie-lens_Portfolio.png",
        link: "https://github.com/codeurluce/Robbie-Lens_Portfolio/blob/main/README.md"
    },
    {
        id: 2,
        title: "AzerType",
        category: "Web Application",
        description: "une application web interactive qui aide les utilisateurs à améliorer leur vitesse de frappe au clavier. Développée en HTML, CSS et JavaScript.",
        image: "img/portfolio_img/Robbie-lens_Portfolio.png",
        link: "https://github.com/codeurluce/AzerType_Js/blob/main/README.md"
    },
    {
        id: 3,
        title: "Les Bonnes Pièces",
        category: "Web Application",
        description: "Un site spécialisé dans la vente de pièces détachées automobiles, realisé avec JavaScript.",
        image: "img/portfolio_img/les-bonnes-pieces.png",
        link: "https://github.com/codeurluce/LesBonnesPieces_js/blob/main/README.md"
        
    },
    {
        id: 4,
        title: "Guess the Number",
        category: "Web Application",
        description: "Un jeu web interactif en JavaScript où les utilisateurs doivent deviner un nombre aléatoire généré par l'ordinateur.",
        image: "img/portfolio_img/GuessNumber.png",
        link: "https://github.com/codeurluce/GuessNumber/blob/main/README.md"
    },
    {
        id: 5,
        title: "Horloge Dynamique",
        category: "Web Development",
        description: "Une horloge dynamique en temps réel, affichant l'heure actuelle de differentes villes, avec une mise à jour automatique, réalisée en JavaScript.",
        image: "img/portfolio_img/horloge.png",
        link: "https://github.com/codeurluce/Horloge/blob/main/README.md"
    },
    {
        id: 6,
        title: "Notes App",
        category: "Web Application",
        description: "Une application de prise de notes simple et efficace, permettant aux utilisateurs de créer, modifier et supprimer des notes, développée avec Node.js, Express, EJS et MySQL",
        image: "img/portfolio_img/noteApp.png",
        link: "https://github.com/codeurluce/NotesApps/blob/master/README.md"
    },
    {
        id: 7,
        title: "site E-commerce",
        category: "Web Application",
        description: "Une API pour un magasin en ligne simple, développée avec Node.js, Express.js et MongoDB. Elle permet la gestion des produits, l’authentification des utilisateurs via JWT, ainsi que le téléchargement d’images grâce à Multer.",
        image: "img/portfolio_img/E-com1.png",
        link: "https://github.com/codeurluce/E-com_API_Nodejs/blob/main/README.md"
    },
    {
        id: 8,
        title: "site de Recettes",
        category: "Web Development",
        description: "Un site web dynamique développé en PHP, permettant aux utilisateurs de découvrir, publier et partager leurs meilleures recettes de cuisine.",
        image: "img/portfolio_img/recettesPHP.png",
        link: "https://github.com/codeurluce/Recette_PHP/blob/main/README.md"
    },
    {
        id: 9,
        title: "Student Manager",
        category: "Web Development",
        description: "Une petite application Laravel permettant de gérer des étudiants avec les opérations de base du CRUD (Créer, Lire, Mettre à jour, Supprimer). L'interface utilisateur est conçue avec Bootstrap pour un design simple, propre et réactif.",
        image: "img/portfolio_img/student_crud.png",
        link: "https://github.com/codeurluce/Laravel_Student_CRUD/blob/main/README.md"
    },
    {
        id: 10,
        title: "La maison jungle",
        category: "Web Application",
        description: "La maison jungle est une mini-application de e-commerce développée avec React . Elle permet d'afficher une sélection de plantes, de filtrer selon certains critères, et de gérer un panier d'achat interactif.",
        image: "img/portfolio_img/maison_jungle1.png",
        link: "https://github.com/codeurluce/La_maison_jungle_React/blob/main/README.md"
    },
    {
        id: 10,
        title: "Compteur & Recherche",
        category: "Web Application",
        description: "Cette application, développée avec React, permet d’incrémenter ou de décrémenter un compteur, ainsi que d’effectuer une recherche via une barre de recherche stylisée.",
        image: "img/portfolio_img/count&search.png",
        link: "https://github.com/codeurluce/compteur-rechercheApp_React/blob/main/README.md"
    },
];

// Create portfolio items
function createPortfolioItems() {
    const portfolioGrid = document.getElementById('portfolioGrid');
    
    portfolioData.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        
        portfolioItem.innerHTML = `
            <div class="portfolio-item-bg" style="background-image: url(${item.image})"></div>
            <div class="portfolio-item-content">
                <p class="portfolio-item-category">${item.category}</p>
                <h3 class="portfolio-item-title">${item.title}</h3>
                <p class="portfolio-item-description">${item.description}</p>
                <a href="${item.link}" class="portfolio-item-link" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                </a>
            </div>
        `;
        
        portfolioGrid.appendChild(portfolioItem);
    });
}

// Initialize portfolio section
document.addEventListener('DOMContentLoaded', createPortfolioItems);