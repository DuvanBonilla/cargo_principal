// Obtener todas las tarjetas
const cards = document.querySelectorAll('.demo-card');

// Función para animar las tarjetas
function animateCards() {
  // Variable para controlar el retraso entre cada tarjeta
  let delay = 0;

  // Recorremos todas las tarjetas
  cards.forEach((card, index) => {
    // Aplicamos una clase CSS para establecer la posición inicial
    card.style.opacity = '0';
    card.style.transform = 'translateX(-100%)';

    // Establecemos un retraso creciente para cada tarjeta
    setTimeout(() => {
      // Aplicamos una clase CSS para animar la tarjeta
      card.style.transition = 'opacity 1s, transform 1s';
      card.style.opacity = '1';
      card.style.transform = 'translateX(0)';
    }, delay);

    // Incrementamos el retraso para la siguiente tarjeta
    delay += 1000; // Cambia este valor para ajustar la velocidad de la animación
  });
}

// Llama a la función para animar las tarjetas cuando se carga el documento
document.addEventListener('DOMContentLoaded', animateCards);
