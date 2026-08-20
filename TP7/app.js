let ej1 = documento.querySelector('#ej1')
let butonej1 = documento.querySelector('#butonej1')
let edad = 15
butonej1.onclick = function () {
    //ej1.textContent= 'resultado'
    if (edad >= 18) {
        ej1.textContent = 'sos mayor de edad'
    } else {
        ej1.textContent = 'sos menor de edad'
    }

}

let nombreUsuario = "Katia"
let b2 = document.querySelector("#botonej2")
let p2 = document.querySelector("#ej2")

b2.onclick = function(){
    if (nombreUsuario == 'Nahuel') {
        p2.textContent = "Bienvenido Nahuel ¿bienvenido como estas?"
    } else {
        p1.textContent = "bienvenido usuario"
    }
}

