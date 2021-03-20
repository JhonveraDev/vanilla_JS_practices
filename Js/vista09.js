function Persona(nombre,apellido,altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function(){
    console.log(`Hola, ${this.nombre}`)
}

Persona.prototype.suAltura = function(){

    if(this.altura>1.8){
        console.log(`${this.nombre} Es una persona alta, con estatura de: ${this.altura}`)
    }else{
        console.log(`${this.nombre} ES una persona Baja`)
    }
}


Persona.prototype.altura2 = function(){
    return this.altura > 1.8 ? console.log(`${this.nombre} Es considerado una persona alta, con estatura de: ${this.altura}`):console.log(`${this.nombre}Es considerada como una persona Baja.`)
}

var sam = new Persona('Sam','Megan',1.78)
var erika = new Persona('Erika','Rast',1.95)
var eminem = new Persona('Eminem','RapGod')
var razor = new Persona('Razor','Impact')

function Desarrollador(nombre,apellido){
    this.apellido = apellido
    this.Nombre = nombre
}

Desarrollador.prototype.saludar = function (){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}



eminem.saludar()
razor.saludar()
sam.suAltura()
erika.altura2()