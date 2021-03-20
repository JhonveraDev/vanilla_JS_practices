
var eminem = {
    nombre: 'Eminem',
    apellido: 'Rap',
    edad: 50,
    peso:75,

}

console.log(`Al Inicio del Año ${eminem.nombre}, pesaba aproximadamente ${eminem.peso}`)

const PESO_MOD = 0.2

const aumentarDePeso = (persona)=>persona.peso+= PESO_MOD //Implicitamente retorna al usar este modelo de function
const bajarDePeso = (persona)=>persona.peso -=PESO_MOD
const comeMucho = ()=> Math.random() < 0.3
const comePoco = ()=> Math.random() < 0.4
var dias = 0
const META = eminem.peso - 3


for (var i=1; i<=365;i++){

    var random = Math.random()

    if(random <= 0.25){
        aumentarDePeso(eminem)


    }else if(random < 0.5){
        bajarDePeso(eminem)

    }
}

while(eminem.peso>META){
    if(comeMucho()){
        aumentarDePeso(eminem)
        
    }if(comePoco){
        bajarDePeso(eminem)
    }

    dias +=1

}

console.log(`A MR. ${eminem.nombre} le tomo ${dias} dias para lograr su meta`)
console.log(`Al Final del Agno ${eminem.nombre}, pesaba  ${eminem.peso.toFixed(1)}`)

