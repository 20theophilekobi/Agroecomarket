document.getElementById("form-inscription").addEventListener("submit", function(event) {
  event.preventDefault();

  const nom = document.getElementById("nom").value;
  const email = document.getElementById("email").value;
  const choix = document.getElementById("choix").value;

  const confirmation = document.getElementById("confirmation");
  confirmation.innerHTML = `Merci ${nom}, vous êtes inscrit(e) à la conférence ${choix === "zome1" ? "Zome #1 : Compostage" : "Zome #2 : Agroécologie"}.`;
});
