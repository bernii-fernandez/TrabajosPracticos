let estrellas = document.quryselector('#estrellas')
let km = document.quryselector('#km')
let anios = document.quryselector('#anios')
let boton = document.quryselector('#boton')
boton.onclick = function () {
    if (estrellas.value >= 4 && (km.value < 50000 || anios.value < 10)){
    resultado.textContent= "viajara con UBER BLACK"
}   else {
    resultado.textContent= "viajara con UBER X"
}
}