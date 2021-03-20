// var x = 4, y = '4'

// var razor = {
//     nombre: 'Razor'
// }

// var noello = {
//     nombre: 'Noelle'
// }

// var otraPersona ={
//     ...razor 
// }

//Condicional simple

//Contamos con objeto, parametros, funcion, condicional, 

var razor ={
    nombre: 'Razor',
    apellido: 'Impact',
    edad: '30',
    hobbie: 'Ser el mejor',
    ingeniero: false,
    cocinero: false,
    cantante:false,
    guitarrista:true,
    drones:true,
    edad: 15
}

var sam = {
    edad: 15
}

function imprimirProfesiones(persona){
    console.log(`${razor.nombre} es: `)
    
    if (persona.ingeniero === true){
        console.log('Ingeniero')
    }else{
        console.log(`${razor.nombre}, No es Ingeniero`)
    }
    if(persona.cocinero){
        console.log('Cocinero')
    }
    if(persona.drones === true){
        console.log("Volador de Drones")
    }
    if(persona.cantante === true){
        console.log("Cantante")
    }
}

const MAYORIA_DE_EDAD = 18 //Scope Global

function saberSiEsMayorDeEdad(persona){
     
    return persona.edad>=MAYORIA_DE_EDAD
}

function mayorDeEdad (persona){
    if(saberSiEsMayorDeEdad(persona)){
        console.log(`${persona.nombre} Es Mayor de edad`)

    }else{
        console.log(`${persona.nombre} No es Mayor de edad`)

    }
        
}

const esMenordeEdad = ({edad})=> edad < MAYORIA_DE_EDAD


function permitirAcceso(persona){
    if(!saberSiEsMayorDeEdad(persona)){
        console.log('No tienes permitido el acceso')
    }else{
        console.log('Se permite la entrada al lugar')
    }
}







//Const: Permite definir variables inmutables
//Var: Permite Crear variables con alcance a su funcion más cercana, tiene un mayor alcance pero si esta en una funcion no saldrá de ella
//Let: Permite crear la variable con minimo alcance en el bloque de la funcion

