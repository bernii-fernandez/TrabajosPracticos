let uno = document.querySelector('#b1')
let dos = document.querySelector('#b2')
let tres = document.querySelector('#b3')
let cuatro = document.querySelector('#b4')
let cinco = document.querySelector('#b5')
let seis = document.querySelector('#b6')
let p= document.querySelector('p')

uno.onclick= function(){
    //cambiar el color de fondo
    p.style.backgroundColor= 'rgb(145, 189, 255)'
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
cinco.onclick= function(){
    //cambiar el tamaño del párrafo
    p.style.fontSize= '50px'
}

seis.onclick= function(){
    //reiniciar
    p.style.fontSize= '25px'
    p.style.fontFamily= 'arial'
    p.style.backgroundColor= 'rgb(218, 68, 130)'
    p.style.color= 'rgb(255, 255, 255)'
    p.style.textContent= 'Este parrafo puede modificarse'
}
