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
    })
    .catch(error => {
      console.error('Erreur lors du chargement du menu :', error);
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const ulSym = document.getElementById("menuSym");
  const ulAnc = document.getElementById("menuAnc");
  const ulMon = document.getElementById("menuMon");
  const currentUrl = window.location.pathname;

  switch (currentPath) {
    case "/contact":
    case "/login":
    case "/index_ancestries":
      ulAnc.style.display = "block";
      break;
    
    
    default:
      // Le menu reste visible
      break;
  }
});
