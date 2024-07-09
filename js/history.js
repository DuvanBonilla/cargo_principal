// Función para activar el siguiente paso automáticamente cada 5 segundos
function autoNextStep() {
    var currentStep = $(".step.active");
    var nextStep = currentStep.next(".step");

    if (nextStep.length === 0) {
        // Si no hay siguiente paso, volvemos al primero
        nextStep = $(".step").first();
    }

    nextStep.click(); // Simula un clic en el siguiente paso
}

// Configuración del intervalo para llamar a autoNextStep cada 2 segundos
var intervalId = setInterval(autoNextStep, 7000);

// Manejar clics en los pasos
$(".step").click(function() {
    clearInterval(intervalId); // Detener el intervalo cuando se hace clic en un paso
    intervalId = setInterval(autoNextStep, 100000000); // Reiniciar el intervalo
    $(this).addClass("active").prevAll().addClass("active");
    $(this).nextAll().removeClass("active");
});

$(".step01").click(function() {
    clearInterval(intervalId);
    intervalId = setInterval(autoNextStep, 10000000);
    $("#line-progress").css("width", "3%");
    $(".discovery").addClass("active").siblings().removeClass("active");
});

$(".step02").click(function() {
    clearInterval(intervalId);
    intervalId = setInterval(autoNextStep, 10000000);
    $("#line-progress").css("width", "25%");
    $(".strategy").addClass("active").siblings().removeClass("active");
});

$(".step03").click(function() {
    clearInterval(intervalId);
    intervalId = setInterval(autoNextStep, 10000000);
    $("#line-progress").css("width", "50%");
    $(".creative").addClass("active").siblings().removeClass("active");
});

$(".step04").click(function() {
    clearInterval(intervalId);
    intervalId = setInterval(autoNextStep, 10000000);
    $("#line-progress").css("width", "75%");
    $(".production").addClass("active").siblings().removeClass("active");
});

$(".step05").click(function() {
    clearInterval(intervalId);
    intervalId = setInterval(autoNextStep, 10000000);
    $("#line-progress").css("width", "100%");
    $(".analysis").addClass("active").siblings().removeClass("active");
});

$(".step06").on("click", function(){
    clearInterval(intervalId);
    intervalId = setInterval(autoNextStep, 10000);
    $("#line-progress").css("width", "100%");
    $(".marketing").addClass("active").siblings().removeClass("active");
});