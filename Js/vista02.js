// var edad = 24
// edad += 5
// var cantidad = 500 
// var total = Math.round(cantidad*100*3)/100
// var totalStr = total.toFixed(2)


// var nombre = 'Jhon',edad = 24

// function imprimirEdad(nombre,edad){
//     console.log(`${nombre} tiene ${edad} años`)
// }

// imprimirEdad("Sam",25)
// imprimirEdad("Razor",24)
// imprimirEdad("Noelle",22)

// var dato = "mayuscula" //Alcance Global


// //El Dato insertado como parametro puede ser señalado como alcance local si asi se desea
// function imprimirMayuscula(){
//     console.log(dato.toUpperCase())    
// }

// imprimirMayuscula(dato)



var dato = "mayuscula" //Alcance Global

function imprimirMayuscula(){
    console.log(dato.toUpperCase())    
}

imprimirMayuscula(dato)
