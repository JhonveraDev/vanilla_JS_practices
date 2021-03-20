class persona {
    constructor(nombre,apellido,altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
       }

saludar(fn) {
    //var nombre = this.nombre
    //var apellido = this.apellido
    var {nombre, apellido} = this
    console.log(`Hola, me llamo ${nombre} ${apellido}`)
    if (fn){
        fn(nombre, apellido, null)
    }
}

soyAlto() {
    return this.altura >= 1.80
}
}

class Desarrollador extends persona {
constructor(nombre, apellido, altura) {
    super(nombre,apellido,altura)
}
    saludar(fn){
        var {nombre, apellido} = this
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
        if (fn){
            fn(nombre, apellido, true)
        }
    }

}

function responderSaludo (nombre, apellido, esDev){
    console.log(`Buen dia ${nombre} ${apellido}`)

    if(esDev){
        console.log(`ah mira, no sabia que eras desarrollador`)
    }
}


var angel = new Desarrollador('Angel','Sulbaran', 1.71)
var pepe = new persona('Pepe','Trueno', 1.92)
var thor = new persona('Thor','Torero', 1.71)
var carl = new persona('Carl','Jhonson', 1.81)
var freddie = new persona('Freddie','Vega', 1.85)
var lorenzo = new persona('Lorenzo','VonMatterhorn', 1.76)
var lucas = new persona('Lucas','Posillo', 1.71)

angel.saludar(responderSaludo)
pepe.saludar()
thor.saludar(responderSaludo)
carl.saludar()
freddie.saludar(responderSaludo)
lorenzo.saludar(responderSaludo)