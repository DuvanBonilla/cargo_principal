document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("scroll", function() {
    if (window.scrollY > 260) { // Cambia 400 por la posición en la página donde deseas que se active la animación
      document.querySelectorAll(".card").forEach(function(card, index) {
        setTimeout(function() {
          card.classList.add("show");
        }, index * 450); // Ajusta el retraso de la animación según sea necesario
      });
      window.removeEventListener("scroll", this);
    }
  });
});