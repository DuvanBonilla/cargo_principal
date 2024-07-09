document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slider > div");
    const totalSlides = slides.length;
    let currentSlide = 0;
    let slideInterval = null;

    function showSlide(n) {
      slides.forEach((slide) => {
        slide.style.opacity = 0;
      });
      slides[n].style.opacity = 1;
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      showSlide(currentSlide);
    }

    function startSlider() {
      slideInterval = setInterval(nextSlide, 5000); // Cambiar de slide cada 3 segundos (3000 milisegundos)
    }

    function stopSlider() {
      clearInterval(slideInterval);
    }

    // Mostrar el primer slide al cargar la página y comenzar el slider automático
    showSlide(currentSlide);
    startSlider();

    // Agregar event listeners para los botones de siguiente y anterior
    document.getElementById("right").addEventListener("click", function() {
      nextSlide();
      stopSlider();
      startSlider(); // Reiniciar el slider automático después de interactuar con los botones
    });

    document.getElementById("left").addEventListener("click", function() {
      prevSlide();
      stopSlider();
      startSlider(); // Reiniciar el slider automático después de interactuar con los botones
    });
  });