// //Construcción de objeto
// var objeto = {

//     nombre:'Sacha',
//     apellido:'Lif',
//     edad: 28    

// }//el objeto se compone con clave y valor

// var persona = {

//     nombre:'Razor',
//     apellido:'Impact',
//     edad:24

// }

// function imprimirMayuscula(dato){
//     console.log(dato.toUpperCase())    
// }


// imprimirMayuscula(persona.apellido)
// imprimirMayuscula(objeto.nombre)

// //-----------------------------------------------
//Construcción de objeto
var objeto = {

    nombre:'Sacha',
    apellido:'Lif',
    edad: 28    

}//el objeto se compone con clave y valor

var persona = {

    nombre:'Razor',
    apellido:'Impact',
    edad:24

}

function imprimirMayuscula(dato){
    console.log(dato.toUpperCase())    
}

imprimirMayuscula(persona.apellido)
imprimirMayuscula(objeto.nombre)

//Parametros como referencia o como valor
function cumpleanos(persona){
   
    return {
        ...persona,
        edad: persona.edad+1
    }

}
// cumpleanos()
//-----------------------------------------------
