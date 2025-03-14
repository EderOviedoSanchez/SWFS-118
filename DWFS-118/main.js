//Empiezan los ejercicios básicos con JavaScript.
console.log("Hola Mundo")
let suma
suma = 3+5
console.log("Esta es la suma de 3+5:",suma)
let resta = 3-5
console.log(resta)
console.log(9+3)
console.log("Desigualdades",3>9)
let mivariable = "un string"
console.log(mivariable)
mivariable = 9
console.log(mivariable)

//Empieza el ejercicio sobre condicionales con JavaScript.
let numero = 8
if(numero%2==0){
    console.log("El número ", numero, " es par.")
} else{
    console.log("El número ", numero, " es impar.")
}

let prueba = 210
if(prueba%3==0 && prueba%5==0 && prueba%6==0 && prueba%7==0){
    console.log("Violeta")
} else if(prueba%6==0 && prueba%7==0){
    console.log("Rosa")
} else if(prueba%3==0 && prueba%5==0){
    console.log("Margarita")
} else{
    console.log("El numero no cumple ninguna condición.")
}
  
//Empieza el ejercicio de la consola para ingresar números y determinar si es par o no es par.

let EntradaUsuarioPar = document.getElementById("EntradaUsuarioPar")
let BtnPar = document.getElementById("BtnPar")
let SalidaPar = document.getElementById("SalidaPar")
let NumerodeEjercicioesPar = 0

EntradaUsuarioPar.addEventListener("input", (evento) => {
    NumerodeEjercicioesPar = evento.target.value
    console.log(NumerodeEjercicioesPar)
})
function EsPar(numero) {
    if(numero%2==0) {
        return "Es par."
    } else{
        return "No es par."
    }
}
BtnPar.addEventListener("click", () => {
    let resultado = EsPar(NumerodeEjercicioesPar)
    let hijo = document.createElement("h4")
    hijo.innerHTML = NumerodeEjercicioesPar +" "+resultado
    SalidaPar.appendChild(hijo)
})
