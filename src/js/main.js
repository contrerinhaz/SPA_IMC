let peso
let altura
let imc

peso = prompt("ingresa tu peso actual")
altura = prompt("ingresa tu altura actual")

imc = peso / (altura*altura)

console.info("tu imc es "+imc)

// crear una tabla de clasificacion

if (imc>19){
    console.info("eres una ramita")
}