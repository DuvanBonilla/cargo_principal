document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    animateCountersIfVisible();
  });
});

function animateCountersIfVisible() {
  const counters = document.querySelectorAll('.counter-no');

  counters.forEach(counter => {
    if (isElementInViewport(counter) && counter.textContent === "0") {
      const target = parseInt(counter.getAttribute('data-target'));
      let current = 0;
      let animationCompleted = false;

      const formatNumber = (num) => {
        if (num >= 1000000) {
          return '+' + (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
          return '+' + (num / 1000).toFixed(0) + ' K';
        }
        return num;
      };

      // Redondeamos el valor inicial del contador para mejorar la legibilidad
      counter.textContent = formatNumber(Math.round(current));

      const updateCounter = () => {
        if (animationCompleted) return; // Si la animación ya ha terminado, salimos de la función

        const increment = target / 200;
        current += increment;

        if (current >= target) {
          clearInterval(timer);
          current = target;
          animationCompleted = true;
        }

        // Formateamos el número con puntos como separadores de miles
        counter.textContent = formatNumber(Math.floor(current));
      };

      const timer = setInterval(updateCounter, 25); // Intervalo más lento (25 milisegundos)
    }
  });
}

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
