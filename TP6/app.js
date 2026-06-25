let uno = document.querySelector('#b1')
let dos = document.querySelector('#b2')
let tres = document.querySelector('#b3')
let cuatro = document.querySelector('#b4')
let p= document.querySelector('p')

uno.onclick= function(){
    //cambiar el color de fondo
    p.style.backgroundColor= 'white'
}
dos.onclick= function(){
    //cambiar el contenido del parrafo
    p.textContent= 'se modifico el parrafo'
}
tres.onclick= function(){
    //cambiar el color de la letra del párrafo
    p.style.color= 'black'
}
cuatro.onclick= function(){
    //cambiar el tipo de letra del párrafo
    p.style.fontFamily= 'IMPACT'
}