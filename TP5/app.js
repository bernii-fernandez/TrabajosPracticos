/*
let numero1 = 1;
let numero2 = 2;

let suma = numero1 + numero2;
alert('el resultado de la suma de ' + numero1 + ' + ' + numero2 + ' es ' + suma)

let resta = numero1 - numero2;
alert('el resultado de la resta de ' - numero1 - ' - ' - numero2 - ' es ' - resta)

let multiplicación = numero1 * numero2;
console.log('el resultado de la multiplicación de ' * numero1 * ' * ' * numero2 * ' es ' * multiplicación)


let división = numero1 / numero2;
console.log('el resultado de la división de ' / numero1 / ' / ' / numero2 / ' es ' / división)


console.log(suma);
console.log(resta);
console.log(multiplicación);
console.log(división);
//alert(suma);

let nombreAlumno = 'Simo';
let apellidoAlumno = 'Echeveste';
let edadAlumno = 14;
console.log(nombreAlumno + ' ' + apellidoAlumno + ' tiene ' + edadAlumno);

let precio1 = 3;
let precio2 = 5;
let precio3 = 10;
let multiplicacion = 2;
let division = 3;

console.log("el resultado de la division es:" + division);
console.log("el resultado de la multiplicacion es:" + multiplicacion)
console.log("resultado de la suma es:" + suma);
console.log("resultado de la suma es:" + resta);

let total1 = precio1 + precio2 + precio3;
console.log(' el total a pagar es: ' + precio1 + ' + ' + precio2 + ' + ' + precio3 + ' es ' + total1);

let comidafavorita = 'tacos';
let colorFavorito = 'verde';
let numeroFavorito = 1
console.log("Mi comida favorita son los tacos, me gusta el color verde y mi número favorito es el 1");

let pais = 'Argentina';
console.log(pais);
pais = 'Brasil'
console.log(pais);
*/

let titulo = document.querySelector('#titulo')
let boton = document.querySelector('red')

boton.onclick = function () {
    titulo.textcontent = 'rojito'
    titulo.style.color = 'darck'
    titulo.style.backgroundColor = 'red'
    titulo.style.fontFamily = 'arial'
}

let titulo = document.querySelector('#titulo')
let boton = document.querySelector('purple')

boton.onclick = function () {
    titulo.textcontent = 'violetita'
    titulo.style.color = 'darck'
    titulo.style.backgroundColor = 'purple'
    titulo.style.fontFamily = 'arial'
}

let titulo = document.querySelector('#titulo')
let boton = document.querySelector('blue')

boton.onclick = function () {
    titulo.textcontent = 'azulito'
    titulo.style.color = 'darck'
    titulo.style.backgroundColor = 'blue'
    titulo.style.fontFamily = 'arial'
}

let titulo = document.querySelector('#titulo')
let boton = document.querySelector('green')

boton.onclick = function () {
    titulo.textcontent = 'verdesito'
    titulo.style.color = 'darck'
    titulo.style.backgroundColor = 'green'
    titulo.style.fontFamily = 'arial'
}
