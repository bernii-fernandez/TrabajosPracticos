


    
//uno//
if ((imput1.value > 10) && (imput1.value < 25)) {
    parrafo1.TextContent = "Clima agradable 🙂"
}
if (imput1.value > 25) {
    parrafo1.TextContent = "Hace calor 🥵"
}



//dos//
if (imput2 == 'sabado') {
    parrafo2.TextContent = 'no hay reesuiduos'
} else if (imput2 == 'domingo') {
    parrafo2.TextContent = 'residuos humedos'
} else if (imput2 == 'jueves') {
    parrafo2.TextContent = 'residuos humedos'
} else if (imput2 == 'martes') {
    parrafo2.TextContent = 'residuos humedos'
} else if (imput2 == 'lunes') {
    parrafo2.TextContent = 'residuos secos'
} else if (imput2 == 'miercoles') {
    parrafo2.TextContent = 'residuos secos'
} else if (imput2 == 'viernes') {
    parrafo2.TextContent = 'residuos secos'
}



//tres//
if ((imput3 =='admin') && (imput4 =='1234')) {
    parrafo3.TextContent = 'acceso permitido'
} if ((imput3 !='admin') && (imput4 !='1234')) {
    parrafo3.TextContent = 'acceso denegado'
}