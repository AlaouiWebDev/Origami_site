let ecran1 = document.getElementById('ecran1')
let ecran2 = document.getElementById('ecran2')

let panier = document.getElementById('panier')
panier.addEventListener("click", function() {
  ecran1.style.display = "none";
  ecran2.style.display = "block";
})
