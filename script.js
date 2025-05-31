document.addEventListener("DOMContentLoaded", function () {
  fetch('./assets/menu.html')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erreur de chargement : ${response.status}`);
      }
      return response.text();
    })
    .then(html => {
      document.getElementById('menu').innerHTML = html;
	  setMenu();
    })
    .catch(error => {
      console.error('Erreur lors du chargement du menu :', error);
    });
});

function setMenu() {
  const ulSym = document.getElementById("menuSym");
  const ulAnc = document.getElementById("menuAnc");
  const ulMon = document.getElementById("menuMon");
  const currentUrl = window.location.pathname;
  console.log(ulAnc);
  switch (currentUrl) {
    case "/contact":
    case "/login":
    case "/index_ancestries.html":
      ulAnc.style.display = "block";
      break;
    case "/index_monster.html":
      ulMon.style.display = "block";
      break;
    case "/index.html":
      ulSym.style.display = "block";
      break;
    default:
      // Le menu reste visible
      break;
  }
}
