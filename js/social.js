// Inicio de js para el sidebar----------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const sideMenu = document.querySelector('.sidemenu');
  
    menuToggle.addEventListener('click', function () {
      sideMenu.classList.toggle('open'); // Alternar clase 'open' en el sidebar
    });
  });
  // Fin de js para función del sidebar 