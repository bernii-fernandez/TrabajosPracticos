let ej1= documento.querySelector('#ej1')
let butonej1= documento.querySelector('#butonej1')
let edad= 15
butonej1.oneclick= function(){
    //ej1.textContent= 'resultado'
    if(edad >=18) {
        ej1.textContent= 'sos mayor de edad'
    } else {
            ej1.textContent= 'sos menor de edad'
        }

    }