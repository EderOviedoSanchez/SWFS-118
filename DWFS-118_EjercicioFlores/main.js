//Vamos a crear un algoritmo que determine si un número es múltiplo de 3, 5, 6 o 7 y, a partir de ahí, que me arroje un mensaje con el nombre de tres flores: margarita (múltiplos de 3 y 5), rosa (múltiplos de 6 y 7) y violeta (múltiplos de 3, 5, 6, y 7).
let EntradaNumero = document.getElementById("EntradaNumero")
let BtnMultiplo = document.getElementById("BtnMultiplo")
let SalidaFlor = document.getElementById("SalidaFlor")
let NumerodeEjercicioMultiplo = 0

EntradaNumero.addEventListener("input", (evento) => {
    NumerodeEjercicioMultiplo = evento.target.value
    console.log(NumerodeEjercicioMultiplo)
})
function EsMultiplo(numero) {
    if (numero%3==0 && numero%5==0 && numero%6==0 && numero%7==0) {
        return "Violeta"
    } else if (numero%6==0 && numero%7==0) {
        return "Rosa"
    } else if (numero%3==0 && numero%5==0) {
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
