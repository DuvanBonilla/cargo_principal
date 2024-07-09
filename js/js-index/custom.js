jQuery(document).ready(function ($) {
    "use strict";

    // Formateo de números
    function formatNumber(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num;
    }

    function animateCounter($element) {
        var target = parseInt($element.text().replace(/,/g, ''));
        jQuery({ Counter: 0 }).animate({ Counter: target }, {
            duration: 3000,
            easing: 'swing',
            step: function () {
                $element.text(formatNumber(Math.ceil(this.Counter)));
            }
        });
    }

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateCountersIfVisible() {
        $('.count-digit').each(function () {
            var $this = $(this);
            if (isElementInViewport(this) && !$this.hasClass('counter-loaded')) {
                $this.addClass('counter-loaded');
                animateCounter($this);
            }
        });
    }

    $(window).on('scroll', animateCountersIfVisible);

    // Inicializar la animación si los contadores ya son visibles al cargar la página
    animateCountersIfVisible();
});
