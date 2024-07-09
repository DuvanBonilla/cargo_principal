(function ($) {
    // Service carousel
    $(".service-carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 1000, // Ajusta el tiempo entre cada movimiento del slider a 1 segundo
        smartSpeed: 1500,
        margin: 30,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3 // Mostrar 3 elementos cuando el ancho es de 992 píxeles o más
            }
        }
    });
})(jQuery);
