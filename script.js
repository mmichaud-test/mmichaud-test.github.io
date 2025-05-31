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
