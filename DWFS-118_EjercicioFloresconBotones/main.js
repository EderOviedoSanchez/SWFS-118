//Vamos a crear un algoritmo que determine si un número es múltiplo de 3, 5, 6 o 7 y, a partir de ahí, que me arroje un mensaje con el nombre de tres flores: margarita (múltiplos de 3 y 5), rosa (múltiplos de 6 y 7) y violeta (múltiplos de 3, 5, 6, y 7).
let EntradaNumero = document.getElementById("EntradaNumero")
let BtnMultiplo = document.getElementById("BtnMultiplo")
let SalidaFlor = document.getElementById("SalidaFlor")
let NumerodeEjercicioMultiplo = 0

//Se agregan las 4 cajas en las que voy a asignar el valor del multiplicador. Se asignaron valores predeterminados en caso de que no se ingresen valores en las cajas de entrada.
let m1 = document.getElementById("m1")
let m2 = document.getElementById("m2")
let m3 = document.getElementById("m3")
let m4 = document.getElementById("m4")
let Numerom1 = 3
let Numerom2 = 5
let Numerom3 = 6
let Numerom4 = 7

EntradaNumero.addEventListener("input", (evento) => {
    NumerodeEjercicioMultiplo = evento.target.value
    console.log(NumerodeEjercicioMultiplo)
})
//De esta forma se capturan los valores que se ingresan a las cajas y que van a cambiar la función.
m1.addEventListener("input", (evento) => {Numerom1 = evento.target.value})
m2.addEventListener("input", (evento) => {Numerom2 = evento.target.value})
m3.addEventListener("input", (evento) => {Numerom3 = evento.target.value})
m4.addEventListener("input", (evento) => {Numerom4 = evento.target.value})
//Esta es la función que va a ejecutar las intrucciones.
function EsMultiplo(numero) {
    if (numero%Numerom1==0 && numero%Numerom2==0 && numero%Numerom3==0 && numero%Numerom4==0) {
        return "Violeta"
    } else if (numero%Numerom3==0 && numero%Numerom4==0) {
        return "Rosa"
    } else if (numero%Numerom1==0 && numero%Numerom2==0) {
        return "Margarita"
    } else {
        return "El número no cumple ninguna condición."
    }
}
BtnMultiplo.addEventListener("click", () => {
    let resultado = EsMultiplo(NumerodeEjercicioMultiplo)
    let hijo = document.createElement("h4")
    hijo.innerHTML = NumerodeEjercicioMultiplo +" "+resultado
    SalidaFlor.appendChild(hijo)
})
