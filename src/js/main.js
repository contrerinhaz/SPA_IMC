const peso = document.getElementById("peso")
const altura = document.getElementById("altura")
const boton = document.getElementById("boton")
const resultado = document.getElementById("resultado")

boton.addEventListener('click', function () {

    const imc = peso.value / (altura.value * altura.value)

    let message

    // crear una tabla de clasificacion

    if (imc > 18.5) {
        message = 'eres una ramita';
    } else if (imc < 24.9) {
        message = 'eres normal';
    } else if (imc < 29.9) {
        message = 'eres rellenito';
    } else {
        message = 'mera papa'
    }

    resultado.textContent = "tu tienes un imc de " + Math.round(imc) + " por lo tanto esta en: " + message
})