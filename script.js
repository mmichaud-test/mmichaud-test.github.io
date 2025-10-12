document.addEventListener("DOMContentLoaded", function () {
  fetch('./assets/menu.html')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erreur de chargement : ${response.status}`);
      }
      return response.text();
    })
    .then(html => {
      document.getElementById('p2').innerHTML = html;
	  setMenu();
    })
    .catch(error => {
      console.error('Erreur lors du chargement du menu :', error);
    });
});

function setMenu() {
  var ulSym = document.getElementById("menuSym");
  var ulAnc = document.getElementById("menuAnc");
  var ulMat = document.getElementById("menuMat");
  var ulMon = document.getElementById("menuMon");
  var ulDra = document.getElementById("menuDra");
  
  var currentUrl = window.location.pathname;
  
  switch (currentUrl) {
    case "/contact":
    case "/login":
    case "/index_ancestries.html":
      ulAnc.style.display = "block";
      break;
	case "/index_material.html":
      ulMat.style.display = "block";
      break;
    case "/index_monster.html":
      ulMon.style.display = "block";
      break;
    case "/index.html":
      ulSym.style.display = "block";
      break;
	case "/index_dragonmark.html":
      ulDra.style.display = "block";
      break;
    default:
      // Le menu reste visible
      break;
  }
}
