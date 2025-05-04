document.addEventListener("DOMContentLoaded", function () {
    const hero = document.getElementById("hero-section");

    const backgrounds = [
        "Images/Diasporama/images5.jpg",
        "Images/Diasporama/images4.jpg",
        "Images/Diasporama/images3.jpg",
        "Images/Diasporama/images2.jpg",
        "Images/Diasporama/images1.jpg",
        "Images/Diasporama/images6.jpg",
        "Images/Diasporama/images8.jpg",
        "Images/Diasporama/images9.jpg",
        "Images/Diasporama/images10.jpg",
        "Images/Diasporama/images11.jpg",
        "Images/Diasporama/images12.jpg",
        "Images/Diasporama/images13.jpg",
        "Images/Diasporama/images14.jpg",
        "Images/Diasporama/images15.jpg",
        "Images/Diasporama/images16.jpg",
        
    ];

    let currentBg = 0;

    function changeBackground() {
        hero.style.backgroundImage = `url('${backgrounds[currentBg]}')`;
        currentBg = (currentBg + 1) % backgrounds.length;
    }

    changeBackground(); // Démarre au chargement
    setInterval(changeBackground, 10000); // Change toutes les 60s
});


  function filtrerProduits(categorie) {
    const produits = document.querySelectorAll(".bulle-produit");
    produits.forEach(produit => {
      if (categorie === 'tous' || produit.classList.contains(categorie)) {
        produit.style.display = "block";
      } else {
        produit.style.display = "none";
      }
    });
  }

const produitsParPage = 12;
let pageActuelle = 1;

function afficherPage(page) {
  const tousProduits = document.querySelectorAll(".bulle-produit");
  const totalPages = Math.ceil(tousProduits.length / produitsParPage);
  
  tousProduits.forEach((produit, index) => {
    produit.style.display = (index >= (page - 1) * produitsParPage && index < page * produitsParPage) ? "block" : "none";
  });

  // Afficher la pagination
  const paginationContainer = document.querySelector("#pagination");
  paginationContainer.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const bouton = document.createElement("button");
    bouton.innerText = i;
    bouton.className = (i === page ? "actif" : "");
    bouton.onclick = () => afficherPage(i);
    paginationContainer.appendChild(bouton);
  }

  pageActuelle = page;
}

// Initialisation après chargement
window.addEventListener("DOMContentLoaded", () => {
  afficherPage(1);
});
