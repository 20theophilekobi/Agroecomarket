const produits = [
  { nom: "Panier de fruits", categorie: "fruits", prix: "5 000 FCFA", image: "images/images3.jpg" },
  { nom: "Légumes variés", categorie: "legumes", prix: "7 500 FCFA", image: "images/images7.jpg" },
  { nom: "Menthe fraîche", categorie: "herbes", prix: "10 000 FCFA", image: "images/images6.jpg" }
];

const container = document.getElementById("produits-container");
const select = document.getElementById("categorie");

function afficherProduits(categorie) {
  container.innerHTML = "";
  const filtres = produits.filter(p => categorie === "tous" || p.categorie === categorie);
  filtres.forEach(p => {
    const div = document.createElement("div");
    div.className = "produit";
    div.innerHTML = `
      <img src="${p.image}" alt="${p.nom}">
      <h3>${p.nom}</h3>
      <p>${p.prix}</p>
      <button>Ajouter au panier</button>
    `;
    container.appendChild(div);
  });
}

select.addEventListener("change", () => {
  afficherProduits(select.value);
});

document.addEventListener("DOMContentLoaded", () => {
  afficherProduits("tous");
});
