var contador = 0

const llueve = () => Math.random() < 0.25

do{
    contador ++

}while(!llueve())

var frecuencia = contador ===1 ? 'Vez':'Veces'; //Operador ternario 


if(contador===1){
    frecuenciaDos='Vez';
}else{
    frecuenciaDos = 'Veces';
}

console.log("Tanto ",contador, frecuencia,frecuenciaDos)

//----------------------------------------


var signo = prompt('¿Cual es tu signo?')


switch(signo){
    case 'aries':
        console.log('Parametro 1 y signo seleccionado',signo)
    break;

    case 'scorpio':
        console.log('Parametro 1 y signo seleccionado',signo)
    break;
    default:
        console.log('Digita un Signo')
        break

}